import { ActivityIndicator } from 'react-native'

import { theme } from '../../theme'

export function Loading() {
  return <ActivityIndicator size="large" color={theme.colors.white[900]} />
}