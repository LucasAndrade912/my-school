import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, fonts, radius } = theme

export const Container = styled.ScrollView`
  padding: 56px 24px;
`

export const HoursInputs = styled.View`
  flex-direction: row;
  margin-bottom: 32px;
`

export const HourInput = styled.View`
  align-items: flex-start;
`

export const Label = styled.Text`
  font-size: ${fonts.sm.size}px;
  font-family: ${fonts.sm.font};
  color: ${colors.white[700]};
  margin-bottom: 16px;
`

export const Input = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 0.7,
  ...props
}))`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  border-radius: ${radius.lg}px;
  background-color: ${colors.black[800]};
  font-size: ${fonts.sm.size}px;
  font-family: ${fonts.sm.font};
  color: ${colors.white[900]};
`

export const Content = styled.Text`
  font-size: ${fonts.sm.size}px;
  font-family: ${fonts.sm.font};
  color: ${colors.white[800]};
  margin-left: 8px;
`

export const WeekDaysLabel = styled.Text`
  font-size: ${fonts.md.size}px;
  font-family: ${fonts.md.font};
  color: ${colors.white[700]};
  margin-bottom: 32px;
`

export const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`