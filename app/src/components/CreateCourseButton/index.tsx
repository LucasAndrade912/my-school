import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../theme'

import { Container, ButtonText } from './styles'

export function CreateCourseButton() {
  const { navigate } = useNavigation()

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigate('createCourse')}
    >
      <Plus size={24} color={theme.colors.white[600]} />

      <ButtonText>
        Criar {'\n'}
        novo curso
      </ButtonText>
    </Container>
  )
}