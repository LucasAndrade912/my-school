import styled from 'styled-components/native'

import { theme } from '../../theme'

const { radius, colors, fonts } = theme

export const Container = styled.TouchableOpacity`
  width: 112px;
  height: 112px;
  border-radius: ${radius.lg}px;
  background-color: rgba(22, 22, 22, 0.25);
  border: 1px dashed ${colors.white[600]};
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const ButtonText = styled.Text`
  font-size: ${fonts.xs.size}px;
  font-family: ${fonts.xs.font};
  color: ${colors.white[600]};
  margin-top: 12px;
  text-align: center;
`