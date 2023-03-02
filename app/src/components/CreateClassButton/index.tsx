import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../theme'

import * as S from './styles'

interface CreateClassButtonProps {
  courseId: string
}

export function CreateClassButton({ courseId }: CreateClassButtonProps) {
  const { navigate } = useNavigation()

  function navigateToCreateClass() {
    navigate('createClass', { courseId })
  }

  return (
    <S.Container onPress={navigateToCreateClass} activeOpacity={0.7}>
      <Plus size={12} color={theme.colors.white[600]} />

      <S.Content>
        Criar aula
      </S.Content>
    </S.Container>
  )
}