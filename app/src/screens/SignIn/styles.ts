import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/AntDesign'

import { theme } from '../../theme'

const { colors, fonts, radius, shadows } = theme

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 40px;
`

export const Title = styled.Text`
  margin-top: 144px;
  font-size: ${fonts['2xl'].size}px;
  font-family: ${fonts['2xl'].font};
  color: ${colors.white[900]};
`

export const SubTitle = styled.Text`
  margin-top: 24px;
  margin-bottom: 136px;
  font-size: ${fonts['md'].size}px;
  font-family: ${fonts['md'].font};
  color: ${colors.white[700]};
`

export const SignInButton = styled.TouchableOpacity`
  opacity: ${props => props.disabled ? 0.7 : 1};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 72px;
  border-radius: ${radius.lg}px;
  background-color: ${colors.blue[900]};
  box-shadow: ${shadows.md.shadow};
  elevation: ${shadows.md.elevation};
`

export const SignInButtonText = styled.Text`
  font-size: ${fonts['md'].size}px;
  font-family: ${fonts['md'].font};
  color: ${colors.white[900]};
  text-transform: uppercase;
  margin-left: 12px;
`

export const SignInButtonIcon = styled(Icon)`
  font-size: 28px;
  color: ${colors.white[900]};
`