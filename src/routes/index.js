import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import GreetingsContainer from '../views/Greetings/Container'
import LoginContainer from '../views/Login/Container'
import SignUpContainer from '../views/SignUp/Container'

const Public = createNativeStackNavigator()
const Private = createNativeStackNavigator()

export default function Routers() {
  const options = {
    headerShown: false,
  }
  return (
    <NavigationContainer>
      <Public.Navigator>
        <Public.Screen name="Greetings" component={GreetingsContainer} options={options} />
        <Public.Screen name="Login" component={LoginContainer} options={options} />
        <Public.Screen name="SignUp" component={SignUpContainer} options={options} />
      </Public.Navigator>
    </NavigationContainer>
  )
}
