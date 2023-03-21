import { ViewProps } from 'react-native'

import * as S from './styles'

export function Background({ children, ...props }: ViewProps) {
  return (
    <S.Container { ...props }>
      { children }
    </S.Container>
  )
}