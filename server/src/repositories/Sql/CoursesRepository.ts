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