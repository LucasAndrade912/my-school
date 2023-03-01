import { Background } from '../../components/Background'
import { HeaderStack } from '../../components/HeaderStack'
import { CreateClassButton } from '../../components/CreateClassButton'

import * as S from './styles'

export function Course() {
  return (
    <Background>
      <S.Container>
        <HeaderStack
          title={'Você está no curso de Matemática'}
          subtitle="Foco nas aulas!!!"
          rightButton={<CreateClassButton onCreate={() => console.log('navegar para tela de criação de aula')} />}
        />
      </S.Container>
    </Background>
  )
}