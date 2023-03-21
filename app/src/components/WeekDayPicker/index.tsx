import { theme } from '../../theme'
import { WeekDay, weekDays } from '../../utils/weekDays'

import * as S from './styles'

interface WeekDayPickerProps {
  selectedWeekDay: WeekDay
  onSelect: (weekDay: WeekDay) => void
}

export function WeekDayPicker({ selectedWeekDay, onSelect }: WeekDayPickerProps) {
  return (
    <S.Container
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      { weekDays.map(weekDay => (
        <S.WeekDay
          onPress={() => onSelect(weekDay as WeekDay)} key={weekDay}
          activeOpacity={0.5}
        >
          <S.WeekDayContent
            style={{
              color: selectedWeekDay === weekDay ? theme.colors.white[900] : theme.colors.white[800]
            }}
          >
            { weekDay }
          </S.WeekDayContent>

          <S.WeekDayIndicator
            style={{
              backgroundColor: selectedWeekDay === weekDay ? theme.colors.blue[900] : theme.colors.black[800]
            }}
          />
        </S.WeekDay>
      )) }
    </S.Container>
  )
}