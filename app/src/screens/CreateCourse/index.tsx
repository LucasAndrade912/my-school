import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { Background } from '../../components/Background'
import { CourseCard } from '../../components/CourseCard'
import { HeaderStack } from '../../components/HeaderStack'

import { api } from '../../lib/api'
import { theme } from '../../theme'
import { useToast } from '../../hooks/useToast'

export function CreateCourse() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('📚')
  const [cardColor, setCardColor] = useState(theme.colors.purple)

  const toast = useToast()
  const { navigate } = useNavigation()

  function resetStates() {
    setName('')
    setIcon('📚')
    setCardColor(theme.colors.purple)
  }

  async function createCourse() {
    if (!name.trim()) {
      toast.show('error', 'Informe o nome do curso')
    } else {
      setIsLoading(true)

      try {
        await api.post('/courses', {
          name,
          icon,
          color:  cardColor
        })

        navigate('home')
        toast.show('success', 'Seu curso foi criado com sucesso!')
      } catch (err) {
        console.log(err)
        toast.show('error', 'Ocorreu um erro na criação do curso')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Background>
      <S.Container>
        <S.Content behavior="padding">
          <HeaderStack
            title="Crie um novo curso"
            onResetStates={resetStates}
          />

          <View style={{ alignItems: 'center' }}>
            <CourseCard
              color={cardColor}
              icon={icon}
              name={name}
              pressOpacity={1}
            />
          </View>

          <S.Colors>
            <S.ColorSelector
              style={{ backgroundColor: theme.colors.blue[700] }}
              onPress={() => setCardColor(theme.colors.blue[700])}
            />

            <S.ColorSelector
              style={{ backgroundColor: theme.colors.red }}
              onPress={() => setCardColor(theme.colors.red)}
            />

            <S.ColorSelector
              style={{ backgroundColor: theme.colors.green }}
              onPress={() => setCardColor(theme.colors.green)}
            />

            <S.ColorSelector
              style={{ backgroundColor: theme.colors.purple, marginRight: 0 }}
              onPress={() => setCardColor(theme.colors.purple)}
            />
          </S.Colors>

          <Input
            label="Nome do curso"
            placeholder="Informe o nome do curso"
            value={name}
            onChangeText={text => setName(text)}
          />

          <S.IconsContainer>
            <S.Icon
              selected={icon === '📚'}
              onPress={() => setIcon('📚')}
            >
              <S.IconContent>📚</S.IconContent>
            </S.Icon>

            <S.Icon
              selected={icon === '📏'}
              onPress={() => setIcon('📏')}
            >
              <S.IconContent>📏</S.IconContent>
            </S.Icon>

            <S.Icon
              selected={icon === '🧪'}
              onPress={() => setIcon('🧪')}
            >
              <S.IconContent>🧪</S.IconContent>
            </S.Icon>

            <S.Icon
              selected={icon === '✏️'}
              onPress={() => setIcon('✏️')}
            >
              <S.IconContent>✏️</S.IconContent>
            </S.Icon>
          </S.IconsContainer>

          <Button onPress={createCourse} disabled={isLoading}>
            { isLoading ? <Loading size="small" /> : 'Criar Curso' }
          </Button>
        </S.Content>
      </S.Container>
    </Background>
  )
}