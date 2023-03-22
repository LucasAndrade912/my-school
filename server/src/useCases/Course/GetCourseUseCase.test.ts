import { GetCourseUseCase } from './GetCourseUseCase'
import { CoursesRepository, fakeUserIdForTests } from '../../repositories/InMemory/CoursesRepository'

function sutFactory() {
	const repository = new CoursesRepository()
	const sut = new GetCourseUseCase(repository)
	const courseId = '1'
	const courseData = {
		id: '1',
		name: 'React',
		icon: '📚',
		color: '#D9D9D9'
	}

	return { sut, fakeUserIdForTests, courseId, courseData }
}

describe('Get Course Use Case', () => {
	it('should be able to get a course', () => {
		const { sut, fakeUserIdForTests, courseId, courseData } = sutFactory()

		expect(sut.execute({
			ownerId: fakeUserIdForTests,
			courseId
		})).resolves.not.toThrow()

		expect(sut.execute({
			ownerId: fakeUserIdForTests,
			courseId
		})).resolves.toEqual(courseData)
	})

	it('should not be able to get a course if the course id is not sent', () => {
		const { sut, fakeUserIdForTests } = sutFactory()

		expect(sut.execute({
			ownerId: fakeUserIdForTests,
			courseId: ''
		})).rejects.toThrow()
	})

	it('should not be able to get a course if the owner id is not sent', () => {
		const { sut, courseId } = sutFactory()

		expect(sut.execute({
			ownerId: '',
			courseId
		})).rejects.toThrow()
	})

	it('should not be able to get a course if the owner does not exist', () => {
		const { sut, courseId } = sutFactory()

		expect(sut.execute({
			ownerId: 'not-exists',
			courseId
		})).rejects.toThrow()
	})
})