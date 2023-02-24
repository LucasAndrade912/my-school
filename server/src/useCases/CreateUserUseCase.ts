import { ValidatorAdapter } from '../adapters/ValidatorAdapter'
import { JsonWebTokenAdapter } from '../adapters/JsonWebTokenAdapter'
import { SqlUsersRepositoryInterface } from '../repositories/User/SqlUsersRepositoryInterface'

export class CreateUserUseCase {
	constructor (
    private repository: SqlUsersRepositoryInterface,
    private jwt: JsonWebTokenAdapter,
    private validator: ValidatorAdapter
	) {}

	public async execute(accessToken: string) {
		const schema = this.validator.createSchema({
			accessToken: this.validator.types.string()
		})

		schema.validate({ accessToken })

		const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		const user = await response.json() as {
      id: string,
      name: string,
      email: string
    }

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
			subject: user.name,
			expiresIn: '7 days'
		})

		return { token }
	}
}