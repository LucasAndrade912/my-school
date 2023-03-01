import * as S from './styles'

interface CourseCardProps {
  color: string
  name: string
  icon: string
  marginRight?: number
  pressOpacity?: number
  onNavigate?: () => void
}

export function CourseCard(props: CourseCardProps) {
  const {
    color,
    icon,
    name,
    marginRight = 0,
    pressOpacity = 0.7,
    onNavigate
  } = props

  return (
    <S.Container
      style={{ backgroundColor: color, marginRight }}
      activeOpacity={pressOpacity}
      onPress={onNavigate}
    >
      <S.Icon>
        { icon }
      </S.Icon>

      <S.Name>
        { !name ? 'Example' : name }
      </S.Name>
    </S.Container>
  )
}