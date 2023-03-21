import { useState } from 'react'
import { useRoute } from '@react-navigation/native'

import { Background } from '../../components/Background'
import { HeaderStack } from '../../components/HeaderStack'
import { WeekDayPicker } from '../../components/WeekDayPicker'
import { CreateClassButton } from '../../components/CreateClassButton'

import { weekDays, WeekDay } from '../../utils/weekDays'

import * as S from './styles'

interface RouteParams {
  courseId: string
}

export function Course() {
  const today = weekDays[new Date().getDay()]
  const [selectedWeekDay, setSelectedWeekDay] = useState(today as WeekDay)
  const { courseId } = useRoute().params as RouteParams

  return (
    <Background>
      <S.Container>
        <HeaderStack
          title={'Você está no curso de Matemática'}
          subtitle="Foco nas aulas!!!"
          rightButton={<CreateClassButton courseId={courseId} />}
        />

        <WeekDayPicker
          selectedWeekDay={selectedWeekDay}
          onSelect={setSelectedWeekDay}
        />
      </S.Container>
    </Background>
  )
}