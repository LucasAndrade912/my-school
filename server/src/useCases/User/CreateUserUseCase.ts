import { ValidatorAdapter } from '../../adapters/ValidatorAdapter'
import { JsonWebTokenAdapter } from '../../adapters/JsonWebTokenAdapter'
import { OAuthGoogleInterface } from '../../services/auth/OAuthGoogleInterface'
import { UsersRepositoryInterface } from '../../repositories/interfaces/UsersRepositoryInterface'

interface CreateUserUseCaseRequest {
  accessToken: string
}

export class CreateUserUseCase {
	constructor (
    private repository: UsersRepositoryInterface,
    private jwt: JsonWebTokenAdapter,
    private validator: ValidatorAdapter,
    private googleOAuthService: OAuthGoogleInterface
	) {}

	public async execute({ accessToken }: CreateUserUseCaseRequest) {
		const schema = this.validator.createSchema({
			accessToken: this.validator.string()
		})

		schema.validate({ accessToken })

		const user = await this.googleOAuthService.execute(accessToken)

		let userInfo = await this.repository.findByGoogleId(user.id)

		if (!userInfo) {
			userInfo = await this.repository.insert({
				name: user.name,
				email: user.email,
				googleId: user.id
			})
		}

		const token = this.jwt.sign({
			name: userInfo.name,
			email: userInfo.email
		}, {
			subject: userInfo.id,
			expiresIn: '7 days'
		})

		return { token }
	}
}