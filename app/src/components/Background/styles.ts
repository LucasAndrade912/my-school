import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { theme } from '../../theme'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${theme.colors.black[900]};
`