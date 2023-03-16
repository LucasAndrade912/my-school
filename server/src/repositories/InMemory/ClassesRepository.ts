import { randomUUID } from 'node:crypto'

import { Class } from '../../types/Class'
import { getDateFromWeekDay } from '../../utils/getDateFromWeekDay'
import { ClassesRepositoryInterface } from '../interfaces/ClassesRepositoryInterface'

export class ClassesRepository implements ClassesRepositoryInterface {
	private db = [{
		id: 'default-course-for-tests',
		days: [
			{
				date: getDateFromWeekDay(5),
				classes: [
					{
						id: '456',
						name: 'Trigonometria',
						description: '',
						startTime: 760,
						endTime: 820,
						assisted: false,
					}
				]
			},
			{
				date: getDateFromWeekDay(6),
				classes: [
					{
						id: '456',
						name: 'Trigonometria',
						description: '',
						startTime: 760,
						endTime: 820,
						assisted: false,
					}
				]
			}
		]
	}]

	async insert(courseId: string, data: Class) {
		const course = this.db.find(course => course.id === courseId)

		if (course) {
			const newClass = {
				id: randomUUID(),
				description: data.description ?? '',
				...data
			}

			const newClassDays = data.weekDays.map(weekDay => getDateFromWeekDay(weekDay))
			const existingDaysInDB = this.db[0].days.map(day => day.date)

			newClassDays.forEach(day => {
				if (!existingDaysInDB.includes(day)) {
					this.db[0].days.push({
						date: day,
						classes: [newClass]
					})
				} else {
					this.db[0].days.forEach(({ date, classes }) => {
						if (day === date) {
							classes.push(newClass)
						}
					})
				}
			})

			return
		}

		throw new Error('Course not found')
	}

	async findClassesByWeekDay(courseId: string, weekDay: number) {
		const course = this.db.find(course => course.id === courseId)
		const dateFromWeekDay = getDateFromWeekDay(weekDay)

		const data = course?.days.find(({ date }) => date === dateFromWeekDay)

		return data?.classes ?? []
	}
}