import { TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, SubTitle, Header } from './styles'

import { theme } from '../../theme'

interface HeaderStackProps {
  title: string
  onResetStates: () => void
  subtitle?: string
  rightButton?: JSX.Element
}

export function HeaderStack({ title, onResetStates, subtitle, rightButton }: HeaderStackProps) {
  const navigator = useNavigation()

  function goBack() {
    onResetStates()
    navigator.goBack()
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
        >
          <Icon name="arrow-back-ios" size={32} color={theme.colors.white[600]} />
        </TouchableOpacity>

        { rightButton }
      </Header>

      <Title>
        { title }
      </Title>

      { subtitle && (
        <SubTitle>
          { subtitle }
        </SubTitle>
      ) }
    </Container>
  )
}