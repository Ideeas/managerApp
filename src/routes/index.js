import React from 'react'
import { COLORS } from '../general/styles/colors'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'

import Greetings from '../views/Greetings/Container'
import Login from '../views/Login/Container'
import SignUp from '../views/SignUp/Container'
import Home from '../views/Home/container'

const Public = createNativeStackNavigator()
const Private = createBottomTabNavigator()

export default function Routers() {
  const user = useSelector((state) => state.user)

  const options = {
    headerShown: false,
  }
  const tabBarStyle = { backgroundColor: COLORS.blue500, borderTopWidth: 0 }
  return (
    <NavigationContainer>
      {user?.token === null ? (
        <Public.Navigator>
          <Public.Screen name="Greetings" component={Greetings} options={options} />
          <Public.Screen name="Login" component={Login} options={options} />
          <Public.Screen name="SignUp" component={SignUp} options={options} />
        </Public.Navigator>
      ) : (
        <Private.Navigator screenOptions={{ tabBarStyle }}>
          <Private.Screen name="Home" component={Home} options={options} />
        </Private.Navigator>
      )}
    </NavigationContainer>
  )
}
