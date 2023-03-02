import { View } from 'react-native'

import * as S from './styles'

import { theme } from '../../theme'

interface InputProps {
  label: string
  textArea?: boolean
  placeholder?: string
  value?: string
  marginBottom?: number
  onChangeText?: (text: string) => void
}

export function Input({ label, textArea = false, placeholder, value, marginBottom, onChangeText }: InputProps) {
  return (
    <View style={{ marginBottom }}>
      <S.Label>
        { label }
      </S.Label>

      <S.Input
        placeholderTextColor={theme.colors.white[600]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={textArea}
        textAlignVertical={textArea ? 'top' : 'center'}
        style={{ height: textArea ? 80 : 'auto' }}
      />
    </View>
  )
}