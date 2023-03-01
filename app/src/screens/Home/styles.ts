import styled from 'styled-components/native'

export const Container = styled.View`
  padding-top: 56px;
  padding-left: 24px;
`

export const Row = styled.ScrollView.attrs(props => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  ...props
}))`
  flex-direction: row;
`