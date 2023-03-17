import { UsersRepositoryInterface } from '../../repositories/interfaces/UsersRepositoryInterface'

export class ReturnUserDataUseCase {
	constructor(
    private repository: UsersRepositoryInterface
	) {}

	public async execute(userId: string) {
		try {
			const user = await this.repository.findById(userId)

			if (!user) throw new Error('User not exists')

			return user
		} catch (err) {
			if (err instanceof Error) console.log('Cause ->', err.cause ?? err.message)

			throw err
		}
	}
}