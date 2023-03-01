import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../theme'

import * as S from './styles'

export function CreateCourseButton() {
  const { navigate } = useNavigation()

  return (
    <S.Container
      activeOpacity={0.7}
      onPress={() => navigate('createCourse')}
    >
      <Plus size={24} color={theme.colors.white[600]} />

      <S.ButtonText>
        Criar {'\n'}
        novo curso
      </S.ButtonText>
    </S.Container>
  )
}