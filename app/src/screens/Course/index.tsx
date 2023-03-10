import { useRoute } from '@react-navigation/native'

import { Background } from '../../components/Background'
import { HeaderStack } from '../../components/HeaderStack'
import { CreateClassButton } from '../../components/CreateClassButton'

import * as S from './styles'

interface RouteParams {
  courseId: string
}

export function Course() {
  const { courseId } = useRoute().params as RouteParams

  return (
    <Background>
      <S.Container>
        <HeaderStack
          title={'Você está no curso de Matemática'}
          subtitle="Foco nas aulas!!!"
          rightButton={<CreateClassButton courseId={courseId} />}
        />
      </S.Container>
    </Background>
  )
}