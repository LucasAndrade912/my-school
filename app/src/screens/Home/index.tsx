import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { CreateCourseButton } from '../../components/CreateCourseButton'

import { Container } from './styles'

export function Home() {

  return (
    <Background>
      <Container>
        <Header
          title="Olá, Lucas"
          subtitle="Boa sorte nas aulas de hoje 😉"
        />

        <CreateCourseButton />
      </Container>
    </Background>
  )
}