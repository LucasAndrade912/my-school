import { Text } from 'react-native'

import { Container, Icon, Name } from './styles'

interface CourseCardProps {
  color: string
  name: string
  icon: string
}

export function CourseCard({ color, icon, name }: CourseCardProps) {
  return (
    <Text>
      <Container style={{ backgroundColor: color }}>
        <Icon>
          { icon }
        </Icon>

        <Name>
          { !name ? 'Example' : name }
        </Name>
      </Container>
    </Text>
  )
}