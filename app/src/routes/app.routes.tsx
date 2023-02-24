import { useAuth } from '../hooks/useAuth'

import { SignIn } from '../screens/SignIn'
import { StackRoutes } from './stack.routes'

export function AppRoutes() {
  const { user } = useAuth()

  return !user ? <SignIn /> : <StackRoutes />
}