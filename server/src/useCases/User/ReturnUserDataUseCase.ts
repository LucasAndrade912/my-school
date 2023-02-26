export class ReturnUserDataUseCase {
	public async execute() {
		const userData = {
			id: 'hello',
			name: 'Lucas',
			email: 'lucas@email.com'
		}

		return userData
	}
}