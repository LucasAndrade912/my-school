import { User } from '../../types/User'

export interface SqlUsersRepositoryInterface {
  insert: (user: User) => Promise<User>
  findByGoogleId: (googleId: string) => Promise<User | null>
}