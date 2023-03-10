import { useState, useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Header } from '../../components/Header'
import { CourseCard } from '../../components/CourseCard'
import { Background } from '../../components/Background'
import { CreateCourseButton } from '../../components/CreateCourseButton'

import { api } from '../../lib/api'
import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

type CourseRequestData = {
  id: string
  name: string
  icon: string
  color: string
}[]

export function Home() {
  const [courses, setCourses] = useState([] as CourseRequestData)
  const { navigate } = useNavigation()
  const { user } = useAuth()

  function navigateToCourse(id: string) {
    navigate('course', { courseId: id })
  }

  useFocusEffect(useCallback(() => {
    api.get('/courses')
      .then(response => setCourses(response.data))
  }, []))

  return (
    <Background>
      <S.Container>
        <Header
          title={`Olá, ${user?.name}`}
          subtitle="Boa sorte nas aulas de hoje 😉"
        />

        <S.Row>
          <CreateCourseButton />

          { courses.map(course => (
            <CourseCard
              key={course.id}
              marginRight={16}
              onNavigate={() => navigateToCourse(course.id)}
              {...course}
            />
          )) }
        </S.Row>
      </S.Container>
    </Background>
  )
}