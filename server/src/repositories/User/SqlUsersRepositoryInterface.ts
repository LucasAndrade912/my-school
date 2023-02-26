import { User } from '../../types/User'

export interface SqlUsersRepositoryInterface {
  insert: (user: User) => Promise<User & { id: string }>
  findByGoogleId: (googleId: string) => Promise<User & { id: string } | null>
}