import { randomUUID } from 'node:crypto'

import { Course } from '../../types/Course'
import { getDateFromWeekDay } from '../../utils/getDateFromWeekDay'
import { CoursesRepositoryInterface } from '../interfaces/CoursesRepositoryInterface'

export const fakeUserIdForTests = 'default-user-for-tests'
export const dbCourses = [
	{
		id: '1',
		name: 'React',
		icon: '📚',
		color: '#D9D9D9',
		classes: [
			{
				id: '456',
				name: 'useState',
				description: '',
				startTime: 760,
				endTime: 820,
				assisted: false,
				days: [getDateFromWeekDay(1), getDateFromWeekDay(3)]
			},
			{
				id: '001',
				name: 'useEffect',
				description: '',
				startTime: 760,
				endTime: 820,
				assisted: false,
				days: ['2023-03-10T00:00:00.000Z', '2023-03-11T00:00:00.000Z']
			}
		]
	},
	{
		id: '2',
		name: 'Matemática',
		icon: '📏',
		color: '#7353BA',
		classes: [{
			id: '789',
			name: 'Trigonometria',
			startTime: 230,
			endTime: 300,
			assisted: true,
			days: ['2023-03-20T00:00:00.000Z']
		}]
	}
]

export class CoursesRepository implements CoursesRepositoryInterface {
	private db = [
		{
			id: fakeUserIdForTests,
			courses: dbCourses
		}
	]

	public async insert(ownerId: string, course: Course) {
		const user = this.db.find(user => user.id === ownerId)

		if (!user) {
			throw new Error('User not found')
		}

		this.db[0].courses.push({
			id: randomUUID(),
			classes: [],
			...course
		})
	}

	public async findCourse(ownerId: string, courseId: string) {
		const user = this.db.find(user => user.id === ownerId)

		if (!user) {
			throw new Error('User not found')
		}

		const course = user.courses.find(course => course.id === courseId)

		if (!course) return null

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