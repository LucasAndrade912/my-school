import { TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

import { theme } from '../../theme'

interface HeaderStackProps {
  title: string
  subtitle?: string
  onResetStates?: () => void
  rightButton?: JSX.Element
}

export function HeaderStack({ title, subtitle, onResetStates, rightButton }: HeaderStackProps) {
  const navigator = useNavigation()

  function goBack() {
    if (onResetStates) onResetStates()
    navigator.goBack()
  }

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
        >
          <Icon name="arrow-back-ios" size={32} color={theme.colors.white[600]} />
        </TouchableOpacity>

        { rightButton }
      </S.Header>

      <S.Title>
        { title }
      </S.Title>

      { subtitle && (
        <S.SubTitle>
          { subtitle }
        </S.SubTitle>
      ) }
    </S.Container>
  )
}