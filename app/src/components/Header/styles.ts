import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, fonts } = theme

export const Title = styled.Text`
  color: ${colors.white[900]};
  font-size: ${fonts.xl.size}px;
  font-family: ${fonts.xl.font};
  margin-bottom: 24px;
`

export const SubTitle = styled.Text`
  color: ${colors.white[700]};
  font-size: ${fonts.md.size}px;
  font-family: ${fonts.md.font};
  margin-bottom: 56px;
`