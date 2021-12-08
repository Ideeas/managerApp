import React from 'react'
import GreetingsView from './Greetings'
import { useNavigation } from '@react-navigation/core'
import { hasUserAuth } from '../../general/redux/user'
import { useDispatch } from 'react-redux'

const GreetingsContainer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(hasUserAuth())
    navigation.navigate('Login')
  }

  return <GreetingsView navigate={handleNavigate} />
}

export default GreetingsContainer
