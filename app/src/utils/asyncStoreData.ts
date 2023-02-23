import AsyncStorage from '@react-native-async-storage/async-storage'

export async function asyncStoreData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (err) {
    console.log(err)
  }
}