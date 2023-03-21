import BackgroundIcons from '../../assets/background-icons.png'

import { useAuth } from '../../hooks/useAuth'
import { Loading } from '../../components/Loading'
import { Background } from '../../components/Background'

import * as S from './styles'

export function SignIn() {
  const { isLoading, signIn } = useAuth()

  return (
    <Background>
      <S.Container source={BackgroundIcons}>
        <S.Title>
          Bem-vindo ao MySchool
        </S.Title>

        <S.SubTitle>
          O app que vai te ajudar a focar nos estudos
        </S.SubTitle>

        <S.SignInButton activeOpacity={0.7} onPress={signIn} disabled={isLoading}>
          {
            isLoading
              ? <Loading />
              : (
                <>
                  <S.SignInButtonIcon name="google" />

                  <S.SignInButtonText>
                    Entrar com o Google
                  </S.SignInButtonText>
                </>
              )
          }
        </S.SignInButton>
      </S.Container>
    </Background>
  )
}