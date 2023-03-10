import { TouchableOpacityProps } from 'react-native'

import { Loading } from '../Loading'

import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  loading: boolean
}

export function Button({ children, loading = false, ...props }: ButtonProps) {
  return (
    <S.Container { ...props }>
      <S.Content>
        { loading ? <Loading size="small" /> : children }
      </S.Content>
    </S.Container>
  )
}