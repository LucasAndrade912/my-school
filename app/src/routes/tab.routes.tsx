import { House } from 'phosphor-react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { Events } from '../screens/Events'
import { Statistics } from '../screens/Statistics'

import { theme } from '../theme'

const { colors } = theme

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const color = focused ? colors.blue[900] : colors.white[900]

          if (route.name === 'home') {
            return <House color={color} size={32} weight="fill" />
          } else if (route.name === 'events') {
            return <MaterialIcons name="event" size={32} color={color} />
          } else if (route.name === 'statistics') {
            return <MaterialIcons name="data-usage" size={32} color={color} />
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.black[900],
          height: 72,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: colors.black[800]
        }
      })}
    >
      <Screen name="home" component={Home} />
      <Screen name="events" component={Events} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}