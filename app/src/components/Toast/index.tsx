import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import { Check, X } from 'phosphor-react-native'

import * as S from './styles'

import { theme } from '../../theme'

interface ToastProps {
  status: 'success' | 'error'
  message: string
  onResetStates: () => void
}

export function Toast({ status, message, onResetStates }: ToastProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current

  function fadeIn() {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true
    }).start()
  }

  function fadeOut() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true
    }).start()

    setTimeout(onResetStates, 400)
  }

  const isSuccess = status === 'success'

  useEffect(() => {
    fadeIn()

    setTimeout(fadeOut, 3200)
  }, [])

  return (
    <S.Container
      style={{
        borderBottomColor: isSuccess ? theme.colors.blue[900] : theme.colors.red,
        transform: [{ translateX: 50 }],
        opacity: fadeAnim
      }}
    >
      <S.Status
        style={{ backgroundColor: isSuccess ? theme.colors.blue[900] : theme.colors.red }}
      >
        { isSuccess ? (
          <Check size={16} color={theme.colors.white[900]} weight="bold" />
        ) : (
          <X size={16} color={theme.colors.white[900]} weight="bold" />
        ) }
      </S.Status>

      <S.MessageContainer>
        <S.Message>
          { message }
        </S.Message>
      </S.MessageContainer>
    </S.Container>
  )
}