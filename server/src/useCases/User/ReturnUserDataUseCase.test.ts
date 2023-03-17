import { UsersRepository } from '../../repositories/InMemory/UsersRepository'
import { ReturnUserDataUseCase } from './ReturnUserDataUseCase'

function sutFactory() {
	const userData = {
		id: '1',
		googleId: 'g-1',
		name: 'Lucas',
		email: 'lucas@email.com'
	}
	const userId = '1'
	const repository = new UsersRepository()
	const sut = new ReturnUserDataUseCase(repository)

	return { userData, userId, sut }
}

describe('Create User Use Case', () => {
	it('should be able to return user data', () => {
		const { userData, userId, sut } = sutFactory()

		expect(sut.execute(userId)).resolves.not.toThrow()
		expect(sut.execute(userId)).resolves.toEqual(userData)
	})

	it('should not be able to return user data without existing user id', () => {
		const { sut } = sutFactory()

		expect(sut.execute('not-exists')).rejects.toThrow()
	})
})