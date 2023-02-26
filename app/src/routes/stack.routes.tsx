import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab.routes'
import { Class } from '../screens/Class'
import { Course } from '../screens/Course'
import { CreateClass } from '../screens/CreateClass'
import { CreateEvent } from '../screens/CreateEvent'
import { CreateCourse } from '../screens/CreateCourse'

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator initialRouteName="main" screenOptions={{ headerShown: false }}>
      <Screen name="main" component={TabRoutes} />
      <Screen name="course" component={Course} />
      <Screen name="class" component={Class} />
      <Screen name="createClass" component={CreateClass} />
      <Screen name="createCourse" component={CreateCourse} />
      <Screen name="createEvent" component={CreateEvent} />
    </Navigator>
  )
}