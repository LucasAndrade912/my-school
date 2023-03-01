import { Plus } from 'phosphor-react-native'

import { theme } from '../../theme'

import * as S from './styles'

interface CreateClassButtonProps {
  onCreate: () => void
}

export function CreateClassButton({ onCreate }: CreateClassButtonProps) {
  return (
    <S.Container onPress={onCreate} activeOpacity={0.7}>
      <Plus size={12} color={theme.colors.white[600]} />

      <S.Content>
        Criar aula
      </S.Content>
    </S.Container>
  )
}