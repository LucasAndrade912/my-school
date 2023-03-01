import styled from 'styled-components/native'

import { theme } from '../../theme'

const { radius, colors, fonts } = theme

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: ${radius.lg}px;
  border: 1px solid ${colors.blue[900]};
  background-color: rgba(22, 22, 22, 0.25);
`

export const Content = styled.Text`
  color: ${colors.white[600]};
  font-size: ${fonts.xs.size}px;
  font-family: ${fonts.xs.font};
  margin-left: 12px;
`