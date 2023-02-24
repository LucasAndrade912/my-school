import { Title, SubTitle } from './styles'

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <Title>
        { title }
      </Title>

      <SubTitle>
        { subtitle }
      </SubTitle>
    </>
  )
}