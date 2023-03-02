import styled from 'styled-components/native'

import { theme } from '../../theme'

const { colors, radius } = theme

export const Container = styled.View.attrs(props => ({
  checked: false,
  ...props
}))`
  width: 20px;
  height: 20px;
  border-radius: ${radius.xs}px;
  border: ${props => !props.checked ? `1px solid ${colors.white[600]}` : 'none'};
  background-color: ${props => props.checked ? colors.blue[900] : colors.black[900]};
  justify-content: center;
  align-items: center;
`