import { CreateCourseUseCase } from './CreateCourseUseCase'
import { CoursesRepository } from '../../repositories/InMemory/CoursesRepository'
import { ZodAdapter } from '../../adapters/ZodAdapter'

function sutFactory() {
	const userId = 'default-user-for-tests'
	const repository = new CoursesRepository()
	const validator = new ZodAdapter()
	const sut = new CreateCourseUseCase(repository, validator)

	return { userId, sut }
}

describe('Create Course Use Case', () => {
	it('should be able to create a new course', () => {
		const { userId, sut } = sutFactory()

		const data = {
			name: 'Java',
			color: '#63C132',
			icon: '🧪'
		}

		expect(sut.execute({ ownerId: userId, data })).resolves.not.toThrow()
	})

	it('should not be able to create a new course without name', () => {
		const { userId, sut } = sutFactory()

		const data = {
			name: null!,
			color: '#63C132',
			icon: '🧪'
		}

		expect(sut.execute({ ownerId: userId, data })).rejects.toThrow()
	})

	it('should not be able to create a new course if user not exists', () => {
		const { sut } = sutFactory()

		const data = {
			name: 'Java',
			color: '#63C132',
			icon: '🧪'
		}

		expect(sut.execute({ ownerId: 'not-exists', data })).rejects.toThrow()
	})
})