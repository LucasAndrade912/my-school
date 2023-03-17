import { randomUUID } from 'node:crypto'

import { User } from '../../types/User'
import { UsersRepositoryInterface } from '../interfaces/UsersRepositoryInterface'

export class UsersRepository implements UsersRepositoryInterface {
	private db = [{
		id: '1',
		googleId: 'g-1',
		name: 'Lucas',
		email: 'lucas@email.com'
	}]

	async insert(user: User) {
		const id = randomUUID()

		this.db.push({ id, ...user })

		return { id, ...user }
	}

	async findById(userId: string) {
		const user = this.db.find(user => user.id === userId)

		return user ?? null
	}

	async findByGoogleId(googleId: string) {
		const user = this.db.find(user => user.googleId === googleId)

		return user ?? null
	}
}