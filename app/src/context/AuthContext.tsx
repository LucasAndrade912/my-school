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

WebBrowser.maybeCompleteAuthSession()

interface AuthContextProps {
  isLoading: boolean
  signIn: () => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
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

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      console.log(response.authentication.accessToken)
    }
  }, [response])

  return (
    <AuthContext.Provider value={{ isLoading, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}