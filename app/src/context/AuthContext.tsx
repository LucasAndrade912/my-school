import { CLIENT_ID } from '@env'
import {
  useState,
  useEffect,
  createContext,
  ReactNode
} from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import * as GoogleProvider from 'expo-auth-session/providers/google'

import { api } from '../lib/api'
import { asyncStoreData } from '../utils/asyncStoreData'

WebBrowser.maybeCompleteAuthSession()

type User = { name: string } | null

interface AuthContextProps {
  user: User
  isLoading: boolean
  signIn: () => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(false)

  const [, response, promptAsync] = GoogleProvider.useAuthRequest({
    clientId: CLIENT_ID,
    scopes: ['profile', 'email'],
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    responseType: 'token'
  })

  async function signIn() {
    setIsLoading(true)

    try {
      await promptAsync()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  async function signInWithGoogle(accessToken: string) {
    setIsLoading(true)

    try {
      const { data } = await api.post('/users', { accessToken })
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      await asyncStoreData('@token', data.token)

      const userData = await api.get('/me')
      setUser(userData.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken)
    }
  }, [response])

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}