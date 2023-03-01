import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, fonts, radius, shadows } = theme

export const Center = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 100px;
`

export const Container = styled(Animated.View)`
  flex-direction: row;
  height: 32px;
  padding-right: 8px;
  background-color: ${colors.black[800]};
  border-bottom-width: 3px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: ${radius.md}px;
  border-bottom-left-radius: ${radius.md}px;
  box-shadow: ${shadows.xs.shadow};
  elevation: ${shadows.xs.elevation};
`

export const Status = styled.View`
  width: 32px;
  height: 32px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: ${radius.md}px;
  border-bottom-left-radius: ${radius.md}px;
  margin-right: 10px;
`

export const MessageContainer = styled.View`
  justify-content: center;
`

export const Message = styled.Text`
  font-size: ${fonts.xs.size}px;
  font-family: ${fonts.xs.font};
  color: ${colors.white[900]};
`