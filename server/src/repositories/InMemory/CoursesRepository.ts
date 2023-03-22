import { randomUUID } from 'node:crypto'

import { Course } from '../../types/Course'
import { CoursesRepositoryInterface } from '../interfaces/CoursesRepositoryInterface'

export const fakeUserIdForTests = 'default-user-for-tests'

export class CoursesRepository implements CoursesRepositoryInterface {
	private db = [
		{
			id: fakeUserIdForTests,
			courses: [
				{
					id: '1',
					name: 'React',
					icon: '📚',
					color: '#D9D9D9'
				},
				{
					id: '2',
					name: 'Matemática',
					icon: '📏',
					color: '#7353BA'
				}
			]
		}
	]

	public async insert(ownerId: string, course: Course) {
		const user = this.db.find(user => user.id === ownerId)

		if (!user) {
			throw new Error('User not found')
		}

		this.db[0].courses.push({
			id: randomUUID(),
			...course
		})
	}

	public async findCourse(ownerId: string, courseId: string) {
		const user = this.db.find(user => user.id === ownerId)

		if (!user) {
			throw new Error('User not found')
		}

		const course = user.courses.find(course => course.id === courseId)
		return course
	}

	public async findAllCourses(userId: string) {
		const user = this.db.find(user => user.id === userId)

		if (!user) {
			throw new Error('User not found')
		}

		return user.courses
	}
}