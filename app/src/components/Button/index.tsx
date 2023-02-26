import { TouchableOpacityProps } from 'react-native'

import { Container, Content } from './styles'

export function Button({ children, ...props }: TouchableOpacityProps) {
  return (
    <Container { ...props }>
      <Content>
        { children }
      </Content>
    </Container>
  )
}