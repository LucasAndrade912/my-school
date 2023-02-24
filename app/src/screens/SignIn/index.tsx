import BackgroundIcons from '../../assets/background-icons.png'

import { useAuth } from '../../hooks/useAuth'
import { Loading } from '../../components/Loading'
import { Background } from '../../components/Background'

import {
  Container,
  Title,
  SubTitle,
  SignInButton,
  SignInButtonText,
  SignInButtonIcon
} from './styles'

export function SignIn() {
  const { isLoading, signIn } = useAuth()

  return (
    <Background>
      <Container source={BackgroundIcons}>
        <Title>
        Bem-vindo ao MySchool
        </Title>

        <SubTitle>
        O app que vai te ajudar a focar nos estudos
        </SubTitle>

        <SignInButton activeOpacity={0.7} onPress={signIn} disabled={isLoading}>
          {
            isLoading
              ? <Loading />
              : (
                <>
                  <SignInButtonIcon name="google" />

                  <SignInButtonText>
                  Entrar com o Google
                  </SignInButtonText>
                </>
              )
          }
        </SignInButton>
      </Container>
    </Background>
  )
}