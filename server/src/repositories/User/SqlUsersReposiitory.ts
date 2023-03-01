import { prisma } from '../prisma'

import { User } from '../../types/User'
import { SqlUsersRepositoryInterface } from './SqlUsersRepositoryInterface'

export class SqlUsersRepository implements SqlUsersRepositoryInterface {
	public async insert(user: User) {
		const newUser = await prisma.user.create({
			data: user
		})

		return newUser
	}

	public async findById(userId: string) {
		const user = await prisma.user.findUnique({
			where: {
				id: userId
			}
		})

		return user
	}

	public async findByGoogleId(googleId: string) {
		const user = await prisma.user.findUnique({
			where: {
				googleId
			}
		})

		return user
	}
}