import AsyncStorage from '@react-native-async-storage/async-storage'

export function useAsyncStorage() {
  async function storeData(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.log(err)
    }
  }

  async function getData(key: string) {
    try {
      const value = await AsyncStorage.getItem(key)

      if (value) {
        return JSON.parse(value)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return { storeData, getData }
}