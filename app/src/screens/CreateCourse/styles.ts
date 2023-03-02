import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, fonts, radius } = theme

export const Container = styled.ScrollView``

export const Content = styled.KeyboardAvoidingView`
  padding: 56px 24px;
`

export const Colors = styled.View`
  flex-direction: row;
  margin: 32px 0;
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

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
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