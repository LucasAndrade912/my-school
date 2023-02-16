import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'

import { theme } from './src/theme'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
  })

  if (!isFontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MySchool 📚</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black[900],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.white[900],
    fontFamily: theme.fonts['lg'].font,
    fontSize: theme.fonts['lg'].size
  }
})