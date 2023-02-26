import { Platform } from 'react-native'

const isAndroid = Platform.OS === 'android'

export const theme = {
  colors: {
    black: {
      900: '#0D0D0D',
      800: '#161616',
      700: '#212121'
    },
    white: {
      900: '#FFFFFF',
      800: '#EAEAEA',
      700: '#D9D9D9',
      600: '#9D9898'
    },
    blue: {
      900: '#3152D0',
      800: '#2A4AC2',
      700: '#027BCE',
      600: '#0085E0'
    },
    green: '#63C132',
    red: '#D13C43',
    purple: '#7353BA'
  },
  fonts: {
    '3xl': {
      size: 32,
      font: 'Rubik_700Bold'
    },
    '2xl': {
      size: 24,
      font: 'Rubik_700Bold'
    },
    'xl': {
      size: 20,
      font: 'Rubik_600SemiBold'
    },
    'lg': {
      size: 18,
      font: 'Rubik_500Medium'
    },
    'md': {
      size: 16,
      font: 'Rubik_500Medium'
    },
    'sm': {
      size: 14,
      font: 'Rubik_500Medium'
    },
    'xs': {
      size: 12,
      font: 'Rubik_400Regular'
    },
    '2xs': {
      size: 10,
      font: 'Rubik_400Regular'
    },
    '3xs': {
      size: 8,
      font: 'Rubik_400Regular'
    },
  },
  radius: {
    lg: 14,
    md: 8,
    sm: 6
  },
  shadows: {
    md: {
      shadow: `0px 3px 5px rgba(255, 255, 255, ${isAndroid ? '1' : '0.15'})`,
      elevation: 7
    },
    sm: {
      shadow: `0px 3px 6px rgba(255, 255, 255, ${isAndroid ? '1' : '0.15'})`,
      elevation: 4
    },
    xs: {
      shadow: `1px 2px 3px rgba(255, 255, 255, ${isAndroid ? '1' : '0.15'});`,
      elevation: 2
    }
  }
}