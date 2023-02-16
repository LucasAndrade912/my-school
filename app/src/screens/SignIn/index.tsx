import { useState } from 'react'

import BackgroundIcons from '../../assets/background-icons.png'

import { Loading } from '../../components/Loading'

import {
  Container,
  Title,
  SubTitle,
  SignInButton,
  SignInButtonText,
  SignInButtonIcon
} from './styles'

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignInUser() {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Container source={BackgroundIcons}>
      <Title>
        Bem-vindo ao MySchool
      </Title>

      <SubTitle>
        O app que vai te ajudar a focar nos estudos
      </SubTitle>

      <SignInButton activeOpacity={0.7} onPress={handleSignInUser} disabled={isLoading}>
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
  )
}