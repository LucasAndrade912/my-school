import { SqlUsersRepositoryInterface } from '../../repositories/User/SqlUsersRepositoryInterface'

export class ReturnUserDataUseCase {
	constructor(
    private repository: SqlUsersRepositoryInterface
	) {}

	public async execute(userId: string) {
		const user = await this.repository.findById(userId)

		return user
	}
}