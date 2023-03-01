import * as S from './styles'

interface CourseCardProps {
  color: string
  name: string
  icon: string
  marginRight?: number
}

export function CourseCard({ color, icon, name, marginRight = 0 }: CourseCardProps) {
  return (
    <S.Container style={{ backgroundColor: color, marginRight }}>
      <S.Icon>
        { icon }
      </S.Icon>

      <S.Name>
        { !name ? 'Example' : name }
      </S.Name>
    </S.Container>
  )
}