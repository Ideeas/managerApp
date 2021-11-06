import React from 'react'
import GreetingsView from './Greetings'
import { useNavigation } from '@react-navigation/core'

const GreetingsContainer = () => {
  const navigation = useNavigation()
  const handleNavigate = () => navigation.navigate('Login')

  return <GreetingsView navigate={handleNavigate} />
}

export default GreetingsContainer
