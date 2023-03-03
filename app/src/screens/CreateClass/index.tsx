import { useState } from 'react'
import { Clock } from 'phosphor-react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { Background } from '../../components/Background'
import { HeaderStack } from '../../components/HeaderStack'

import { theme } from '../../theme'

import * as S from './styles'

const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

export function CreateClass() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [weekDaysChecked, setWeekDaysChecked] = useState<number[]>([])
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()

  function getHoursInMinutesFromDate(date: Date) {
    return (date.getHours() * 60) + date.getMinutes()
  }

  function showTimePicker(hour: Date | undefined, fn: (date: Date | undefined) => void) {
    DateTimePickerAndroid.open({
      value: hour || new Date(),
      mode: 'time',
      onChange(event, date) {
        fn(date)
      },
      is24Hour: true
    })
  }

  function verifyIfWeekDayHasPassed(weekDay: number) {
    const today = new Date().getDay()

    return today > weekDay
  }

  function toggleCheckedWeekDay(index: number) {
    const weekDayHasPassed = verifyIfWeekDayHasPassed(index)

    if (!weekDayHasPassed) {
      if (weekDaysChecked.includes(index)) {
        setWeekDaysChecked(prevState => prevState.filter(weekDayIndex => weekDayIndex !== index))
        return
      }

      setWeekDaysChecked(prevState => [...prevState, index])
    }
  }

  function createClass() {
    console.log({
      title,
      description,
      weekDaysChecked,
      startTime: getHoursInMinutesFromDate(startDate || new Date()),
      endTime: getHoursInMinutesFromDate(endDate || new Date())
    })
  }

  return (
    <Background>
      <S.Container contentContainerStyle={{ paddingBottom: 88 }}>
        <HeaderStack
          title="Crie uma nova aula"
        />

        <Input
          label="Título"
          placeholder="Informe o título da aula"
          value={title}
          onChangeText={setTitle}
          marginBottom={32}
        />

        <Input
          label="Descrição"
          placeholder="Você pode colocar uma descrição para a aula"
          marginBottom={32}
          value={description}
          onChangeText={setDescription}
          textArea
        />

        <S.HoursInputs>
          <S.HourInput style={{ marginRight: 56 }}>
            <S.Label>
              Hora de início
            </S.Label>

            <S.Input
              onPress={() => showTimePicker(startDate, setStartDate)}
            >
              <Clock size={14} color={theme.colors.blue[600]} />

              <S.Content style={{ opacity: startDate ? 1 : 0.4 }}>
                { startDate ? startDate.toLocaleTimeString().slice(0, 5) : '00:00' }
              </S.Content>
            </S.Input>
          </S.HourInput>

          <S.HourInput>
            <S.Label>
              Hora de término
            </S.Label>

            <S.Input
              onPress={() => showTimePicker(endDate, setEndDate)}
            >
              <Clock size={14} color={theme.colors.blue[600]} />

              <S.Content style={{ opacity: endDate ? 1 : 0.4 }}>
                { endDate ? endDate.toLocaleTimeString().slice(0, 5) : '00:00' }
              </S.Content>
            </S.Input>
          </S.HourInput>
        </S.HoursInputs>

        <S.WeekDaysLabel>
          Selecione os dias da semana que você vai assistir esta aula
        </S.WeekDaysLabel>

        <>
          { weekDays.map((weekDay, index) => (
            <S.CheckBoxContainer
              key={weekDay}
              activeOpacity={0.7}
              onPress={() => toggleCheckedWeekDay(index)}
              style={{
                marginBottom: index < (weekDays.length - 1) ? 16 : 32,
                opacity: verifyIfWeekDayHasPassed(index) ? 0.4 : 1
              }}
            >
              <Checkbox checked={weekDaysChecked.includes(index)} />

              <S.Content>
                { weekDay }
              </S.Content>
            </S.CheckBoxContainer>
          )) }
        </>

        <Button onPress={createClass}>
          Criar nova aula
        </Button>
      </S.Container>
    </Background>
  )
}