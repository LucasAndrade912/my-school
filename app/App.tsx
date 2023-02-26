import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'

import { AppRoutes } from './src/routes/app.routes'
import { Background } from './src/components/Background'
import { ToastProvider } from './src/context/ToastContext'
import { AuthContextProvider } from './src/context/AuthContext'

import { api } from './src/lib/api'
import { asyncGetData } from './src/utils/asyncGetData'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isFontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) {
      const token = await asyncGetData('@token')
      if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      await SplashScreen.hideAsync()
    }
  }, [isFontsLoaded])

  if (!isFontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <ToastProvider>
          <Background onLayout={onLayoutRootView}>
            <AppRoutes />
            <StatusBar style="light" translucent />
          </Background>
        </ToastProvider>
      </AuthContextProvider>
    </NavigationContainer>
  )
}