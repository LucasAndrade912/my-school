import { ActivityIndicator } from 'react-native'

import { theme } from '../../theme'

interface LoadingProps {
  size?: 'large' | 'small'
}

export function Loading({ size = 'large' }: LoadingProps) {
  return <ActivityIndicator size={size} color={theme.colors.white[900]} />
}