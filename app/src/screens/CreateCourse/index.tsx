import { useState } from 'react'
import { View } from 'react-native'

import { Button } from '../../components/Button'
import { Background } from '../../components/Background'
import { CourseCard } from '../../components/CourseCard'
import { HeaderStack } from '../../components/HeaderStack'

import { theme } from '../../theme'

import {
  Container,
  Label,
  Input,
  IconsContainer,
  Icon,
  IconContent,
  Colors,
  ColorSelector
} from './styles'

export function CreateCourse() {
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('📚')
  const [cardColor, setCardColor] = useState(theme.colors.purple)

  function resetStates() {
    setName('')
    setIcon('📚')
    setCardColor(theme.colors.purple)
  }

  function createCourse() {
    if (name.trim() === '') {
      // exibir toast de erro
    } else {
      console.log('Curso criado com sucesso!')
    }
  }

  return (
    <Background>
      <Container>
        <HeaderStack
          title="Crie um novo curso"
          onResetStates={resetStates}
        />

        <View style={{ alignItems: 'center' }}>
          <CourseCard
            color={cardColor}
            icon={icon}
            name={name}
          />
        </View>

        <Colors>
          <ColorSelector
            style={{ backgroundColor: theme.colors.blue[700] }}
            onPress={() => setCardColor(theme.colors.blue[700])}
          />

          <ColorSelector
            style={{ backgroundColor: theme.colors.red }}
            onPress={() => setCardColor(theme.colors.red)}
          />

          <ColorSelector
            style={{ backgroundColor: theme.colors.green }}
            onPress={() => setCardColor(theme.colors.green)}
          />

          <ColorSelector
            style={{ backgroundColor: theme.colors.purple, marginRight: 0 }}
            onPress={() => setCardColor(theme.colors.purple)}
          />
        </Colors>

        <Label>
          Nome do curso
        </Label>

        <Input
          placeholder="Informe o nome do curso"
          placeholderTextColor={theme.colors.white[600]}
          value={name}
          onChangeText={text => setName(text)}
        />

        <IconsContainer>
          <Icon
            selected={icon === '📚'}
            onPress={() => setIcon('📚')}
          >
            <IconContent>📚</IconContent>
          </Icon>

          <Icon
            selected={icon === '📏'}
            onPress={() => setIcon('📏')}
          >
            <IconContent>📏</IconContent>
          </Icon>

          <Icon
            selected={icon === '🧪'}
            onPress={() => setIcon('🧪')}
          >
            <IconContent>🧪</IconContent>
          </Icon>

          <Icon
            selected={icon === '✏️'}
            onPress={() => setIcon('✏️')}
          >
            <IconContent>✏️</IconContent>
          </Icon>
        </IconsContainer>

        <Button onPress={createCourse}>
          Criar Curso
        </Button>
      </Container>
    </Background>
  )
}