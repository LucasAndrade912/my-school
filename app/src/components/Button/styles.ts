import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, radius, shadows, fonts } = theme

export const Content = styled.Text`
  text-transform: uppercase;
  font-size: ${fonts.sm.size}px;
  font-family: ${fonts.sm.font};
  color: ${colors.white[900]};
`

export const Container = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 0.7,
  ...props
}))`
  opacity: ${props => props.disabled ? 0.7 : 1};
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.lg}px;
  background-color: ${colors.blue[900]};
  box-shadow: ${shadows.sm.shadow};
  elevation: ${shadows.sm.elevation};
`