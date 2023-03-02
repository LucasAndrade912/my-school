import { Check } from 'phosphor-react-native'

import { theme } from '../../theme'

import * as S from './styles'

interface CheckboxProps {
  checked?: boolean
}

export function Checkbox({ checked = false }: CheckboxProps) {
  return (
    <S.Container checked={checked}>
      { checked && <Check size={12} color={theme.colors.white[900]} weight="bold" /> }
    </S.Container>
  )
}