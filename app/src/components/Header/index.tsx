import * as S from './styles'

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <S.Title>
        { title }
      </S.Title>

      <S.SubTitle>
        { subtitle }
      </S.SubTitle>
    </>
  )
}