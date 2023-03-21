import styled from 'styled-components/native'

export const Container = styled.ScrollView``

export const WeekDay = styled.TouchableOpacity`
  margin-right: 12px;
`

export const WeekDayContent = styled.Text`
  margin: 0 12px;
  font-size: ${({ theme }) => theme.fonts.md.size}px;
  font-family: ${({ theme }) => theme.fonts.md.font};
`

export const WeekDayIndicator = styled.View`
  height: 2px;
  margin-top: 12px;
`