import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, fonts, radius } = theme

export const Container = styled.View`
  padding: 56px 24px;
`

export const Colors = styled.View`
  flex-direction: row;
  margin-top: 32px;
  justify-content: center;
`

export const ColorSelector = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 0.7,
  ...props
}))`
  width: 24px;
  height: 24px;
  border-radius: ${radius.sm}px;
  margin-right: 32px;
`

export const Label = styled.Text`
  font-size: ${fonts.sm.size}px;
  font-family: ${fonts.sm.font};
  color: ${colors.white[800]};
  margin-bottom: 18px;
  margin-top: 32px;
`

export const Input = styled.TextInput`
  padding: 14px 16px;
  border-radius: ${radius.lg}px;
  background-color: ${colors.black[800]};
  font-size: ${fonts['xs'].size}px;
  font-family: ${fonts['xs'].font};
  color: ${colors.white[900]};
  margin-bottom: 24px;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const IconContent = styled.Text`
  font-size: ${fonts['2xl'].size}px;
`

export const Icon = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 0.5,
  selected: false,
  ...props
}))`
  justify-content: center;
  align-items: center;
  border-radius: ${radius.lg}px;
  background-color: ${colors.black[800]};
  padding: 5px;
  border: 3px solid ${props => props.selected ? colors.blue[900] : colors.black[800]};
`