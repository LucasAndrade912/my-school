import { ViewProps } from 'react-native'

import { Container } from './styles'

export function Background({ children, ...props }: ViewProps) {
  return (
    <Container { ...props }>
      { children }
    </Container>
  )
}