import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, radius, shadows, fonts } = theme

export const Container = styled.View`
  border-radius: ${radius.lg}px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.sm.shadow};
  elevation: ${shadows.sm.elevation};
`

export const Icon = styled.Text`
  font-size: ${fonts['2xl'].size}px;
  margin-bottom: 12px;
`

export const Name = styled.Text`
  color: ${colors.white[900]};
  font-size: ${fonts.md.size}px;
  font-family: ${fonts.md.font};
  max-width: 112px;
  text-align: center;
`