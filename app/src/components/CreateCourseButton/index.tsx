import { Plus } from 'phosphor-react-native'

import { theme } from '../../theme'

import { Container, ButtonText } from './styles'

export function CreateCourseButton() {
  return (
    <Container activeOpacity={0.7} onPress={() => console.log('Abrir modal')}>
      <Plus size={24} color={theme.colors.white[600]} />

      <ButtonText>
        Criar {'\n'}
        novo curso
      </ButtonText>
    </Container>
  )
}