import { User } from '../../types/User'

export interface UsersRepositoryInterface {
  insert: (user: User) => Promise<User & { id: string }>
  findById: (userId: string) => Promise<User & { id: string } | null>
  findByGoogleId: (googleId: string) => Promise<User & { id: string } | null>
}