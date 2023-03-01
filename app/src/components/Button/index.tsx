import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export function Button({ children, ...props }: TouchableOpacityProps) {
  return (
    <S.Container { ...props }>
      <S.Content>
        { children }
      </S.Content>
    </S.Container>
  )
}