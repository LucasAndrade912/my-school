import { prisma } from '../prisma'
import { Class } from '../../types/Class'
import { getDateFromWeekDay } from '../../utils/getDateFromWeekDay'

import { SqlClassRepositoryInterface } from './SqlClassRepositoryInterface'

export class SqlClassRepository implements SqlClassRepositoryInterface {
	public async insert(courseId: string, data: Class) {
		const clas = await prisma.class.create({
			data: {
				name: data.name,
				description: data.description,
				assisted: data.assisted,
				startTime: data.startTime,
				endTime: data.endTime,
				courseId
			}
		})

		let days = await prisma.day.findMany({
			where: {
				date: {
					in: data.weekDays.map(weekDay => getDateFromWeekDay(weekDay))
				}
			}
		})

		const daysInISOString = days.map(day => day.date.toISOString())

		if (days.length === 0 || days.length !== data.weekDays.length) {
			await prisma.day.createMany({
				data: data.weekDays.filter(weekDay => {
					return !daysInISOString.includes(getDateFromWeekDay(weekDay))
				}).map(weekDay => {
					const date = getDateFromWeekDay(weekDay)

					return { date }
				}),
			})

			days = await prisma.day.findMany({
				where: {
					date: {
						in: data.weekDays.map(weekDay => getDateFromWeekDay(weekDay))
					}
				}
			})
		}

		await prisma.classesInTheDay.createMany({
			data: days.map(day => ({
				classId: clas.id,
				dayId: day.id
			}))
		})
	}

	public async findClassesByWeekDay(courseId: string, weekDay: number) {
		const date = getDateFromWeekDay(weekDay)

		const classes = await prisma.classesInTheDay.findMany({
			where: {
				day: { date },
				class: {
					courseId
				}
			},
			select: { class: true }
		})

		return classes.map(({ class: clas }) => ({
			...clas,
			description: clas.description || undefined
		}))
	}
}