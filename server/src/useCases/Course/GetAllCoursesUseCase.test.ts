import { GetAllCoursesUseCase } from './GetAllCoursesUseCase'
import { CoursesRepository, dbCourses, fakeUserIdForTests } from '../../repositories/InMemory/CoursesRepository'

function sutFactory() {
	const repository = new CoursesRepository()
	const sut = new GetAllCoursesUseCase(repository)

	return { userId: fakeUserIdForTests, userData: dbCourses, sut }
}

describe('Get All Courses Use Case', () => {
	it('should be able to get all courses from a user', () => {
		const { userId, userData, sut } = sutFactory()

		expect(sut.execute(userId)).resolves.not.toThrow()
		expect(sut.execute(userId)).resolves.toEqual(userData)
	})

	it('should not be able to get all courses if user not exists', () => {
		const { sut } = sutFactory()

		expect(sut.execute('not-exists')).rejects.toThrow()
	})

	it('should not be able to get all courses without user id', () => {
		const { sut } = sutFactory()

		expect(sut.execute(null!)).rejects.toThrow()
	})
})