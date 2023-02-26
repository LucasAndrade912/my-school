import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, fonts } = theme

export const Container = styled.View`
  margin-bottom: 40px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${fonts.lg.size}px;
  font-family: ${fonts.lg.font};
  margin-top: 40px;
  color: ${colors.white[900]};
`

export const SubTitle = styled.Text`
font-size: ${fonts.sm.size}px;
font-family: ${fonts.sm.font};
margin-top: 16px;
color: ${colors.white[700]};
`