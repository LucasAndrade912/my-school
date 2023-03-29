import { prisma } from './prisma'

import { Course } from '../../types/Course'
import { CoursesRepositoryInterface } from '../interfaces/CoursesRepositoryInterface'

export class CoursesRepository implements CoursesRepositoryInterface {
	public async insert(ownerId: string, course: Course) {
		await prisma.course.create({
			data: {
				name: course.name,
				icon: course.icon,
				color: course.color,
				owner: {
					connect: {
						id: ownerId
					}
				}
			},
		})
	}

	public async findCourse(ownerId: string, courseId: string) {
		const course = await prisma.course.findFirst({
			where: { id: courseId, ownerId },
			include: {
				classes: {
					include: {
						classesInTheDay: {
							include: {
								day: true
							}
						}
					}
				}
			}
		})

		if (!course) return null

		const classes = course.classes.map(clas => {
			const days = clas.classesInTheDay.map(({ day }) => day.date.toISOString())

			return {
				id: clas.id,
				name: clas.name,
				description: clas.description || undefined,
				startTime: clas.startTime,
				endTime: clas.endTime,
				assisted: clas.assisted,
				courseId: clas.courseId,
				days
			}
		})

		return { ...course, classes }
	}

	public async findAllCourses(userId: string) {
		const courses = await prisma.course.findMany({
			where: {
				owner: {
					id: userId
				}
			}
		})

		return courses
	}
}