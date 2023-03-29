import { CoursesRepositoryInterface } from '../../repositories/interfaces/CoursesRepositoryInterface'
import { getDateFromWeekDay } from '../../utils/getDateFromWeekDay'

interface GetCourseUseCaseRequest {
  ownerId: string
  courseId: string
}

export class GetCourseUseCase {
	constructor(
    private repository: CoursesRepositoryInterface
	) {}

	public async execute({ ownerId, courseId }: GetCourseUseCaseRequest) {
		if (!ownerId) throw new Error('Send owner id')
		if (!courseId) throw new Error('Send course id')

		const course = await this.repository.findCourse(ownerId, courseId)

		if (!course) return null

		const currentWeekDays = [0, 1, 2, 3, 4, 5, 6].map(getDateFromWeekDay)

		const classesOfTheWeek = course.classes.filter(clas => {
			for (const day of clas.days) {
				if (currentWeekDays.includes(day)) return clas
			}
		})

		course.classes = classesOfTheWeek

		return course
	}
}