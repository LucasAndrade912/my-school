import { prisma } from '../prisma'

import { Course } from '../../types/Course'
import { SqlCoursesRepositoryInterface } from './SqlCoursesRepositoryInterface'

export class SqlCoursesRepository implements SqlCoursesRepositoryInterface {
	public async insert(ownerId: string, course: Course) {
		const newCourse = await prisma.course.create({
			data: {
				name: course.name,
				icon: course.icon,
				owner: {
					connect: {
						id: ownerId
					}
				}
			},
		})

		return newCourse
	}
}