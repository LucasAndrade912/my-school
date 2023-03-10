import { Class } from '../../types/Class'
import { ValidatorAdapter } from '../../adapters/ValidatorAdapter'
import { verifyIfWeekDayHasPassed } from '../../utils/verifyIfWeekDayHasPassed'
import { SqlClassRepositoryInterface } from '../../repositories/Class/SqlClassRepositoryInterface'

export class CreateClassUseCase {
	constructor(
    private repository: SqlClassRepositoryInterface,
    private validator: ValidatorAdapter
	) {}

	public async execute(courseId: string, data: Class) {
		const schema = this.validator.createSchema({
			name: this.validator.string(),
			description: this.validator.string({ nullable: true }),
			startTime: this.validator.number(),
			endTime: this.validator.number(),
			weekDays: this.validator.numberRangeArray(0, 6)
		})

		schema.validate(data)

		if (data.endTime < data.startTime) {
			throw new Error('End time cannot be less than the start time', { cause: 'Invalid class duration time' })
		}

		const classTimeIsLessThan15Minutes = !((data.endTime - data.startTime) >= 15)

		if (classTimeIsLessThan15Minutes) {
			throw new Error('Duration of the lesson should be at least 15 minutes', { cause: 'Very short class time' })
		}

		for (const weekDay of data.weekDays) {
			const dayHasPassed = verifyIfWeekDayHasPassed(weekDay)

			if (dayHasPassed) {
				throw new Error('You cannot create classes on a day of the week that has passed', { cause: 'Day has passed' })
			}
		}

		try {
			const [classes] = await Promise.all(
				data.weekDays.map(weekDay => this.repository.findClassesByWeekDay(courseId, weekDay))
			)

			for (const clas of classes) {
				const startTimeOfNewClassIsBetweenDurationTimeOfOtherClass = (
					data.startTime >= clas.startTime &&
          data.startTime < clas.endTime
				)

				const endTimeOfNewClassIsBetweenDurationTimeOfOtherClass = (
					data.endTime > clas.startTime &&
          data.endTime < clas.endTime
				)

				const classTimeConflictsWithAnotherClass = (
					(clas.endTime - clas.startTime) < (data.endTime - data.startTime)
				)

				const happensDuringTheTimeOfAnotherClass = (
					startTimeOfNewClassIsBetweenDurationTimeOfOtherClass ||
          endTimeOfNewClassIsBetweenDurationTimeOfOtherClass
				) &&
        (classTimeConflictsWithAnotherClass)

				if (happensDuringTheTimeOfAnotherClass) {
					throw new Error('One class cannot be created at the same time as another')
				}
			}

			await this.repository.insert(courseId, { ...data, assisted: false })
		} catch (err) {
			return err
		}
	}
}