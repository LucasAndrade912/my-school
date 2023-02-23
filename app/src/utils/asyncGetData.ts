import AsyncStorage from '@react-native-async-storage/async-storage'

export async function asyncGetData(key: string) {
  try {
    const value = await AsyncStorage.getItem(key)

    if (value) {
      return value
    }
  } catch(err) {
    console.log(err)
  }
}
