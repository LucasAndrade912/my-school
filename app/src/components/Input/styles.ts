import styled from 'styled-components/native'

import { theme } from '../../theme'

const { fonts, colors, radius } = theme

export const Label = styled.Text`
  font-size: ${fonts.md.size}px;
  font-family: ${fonts.md.font};
  color: ${colors.white[700]};
  margin-bottom: 18px;
`

export const Input = styled.TextInput`
  padding: 14px 16px;
  border-radius: ${radius.lg}px;
  background-color: ${colors.black[800]};
  font-size: ${fonts['xs'].size}px;
  font-family: ${fonts['xs'].font};
  color: ${colors.white[900]};
`