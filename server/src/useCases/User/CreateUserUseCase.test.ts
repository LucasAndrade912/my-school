import { JWTAdapter } from '../../adapters/JwtAdapter'
import { ZodAdapter } from '../../adapters/ZodAdapter'
import { UsersRepository } from '../../repositories/InMemory/UsersRepository'
import { MockOAuthGoogleService } from '../../services/auth/MockOAuthGoogleService'
import { CreateUserUseCase } from './CreateUserUseCase'

function sutFactory() {
	const accessToken = 'default-oauth-service-accesstoken'
	const repository = new UsersRepository()
	const validator = new ZodAdapter()
	const jwt = new JWTAdapter()
	const googleAuthService = new MockOAuthGoogleService()
	const sut = new CreateUserUseCase(repository, jwt, validator, googleAuthService)

	return { accessToken, sut }
}

describe('Create User Use Case', () => {
	it('should be able to create a new user', () => {
		const { accessToken, sut } = sutFactory()

		expect(sut.execute({ accessToken })).resolves.not.toThrow()
		sut.execute({ accessToken })
			.then(token => {
				expect(token).toEqual(
					expect.objectContaining({
						token: expect.any(String)
					})
				)
			})
	})

	it('should not be able to create a new user without access token valid', () => {
		const { sut } = sutFactory()

		expect(sut.execute({ accessToken: 'accesstoken-invalid' })).rejects.toThrow()
	})
})