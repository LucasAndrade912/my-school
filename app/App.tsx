import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'
import * as SplashScreen from 'expo-splash-screen'

import { SignIn } from './src/screens/SignIn'
import { Background } from './src/components/Background'
import { AuthContextProvider } from './src/context/AuthContext'

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
      await SplashScreen.hideAsync()
    }
  }, [isFontsLoaded])

  if (!isFontsLoaded) {
    return null
  }

  return (
    <AuthContextProvider>
      <Background onLayout={onLayoutRootView}>
        <SignIn />
        <StatusBar style="light" translucent />
      </Background>
    </AuthContextProvider>
  )
}