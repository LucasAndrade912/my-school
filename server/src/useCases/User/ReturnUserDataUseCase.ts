import { UsersRepositoryInterface } from '../../repositories/Sql/User/UsersRepositoryInterface'

export class ReturnUserDataUseCase {
	constructor(
    private repository: UsersRepositoryInterface
	) {}

	public async execute(userId: string) {
		const user = await this.repository.findById(userId)

		return user
	}
}