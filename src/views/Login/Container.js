import React from 'react'
import LoginView from './Login'

import { useNavigation } from '@react-navigation/core'

const LoginContainer = () => {
  const navigation = useNavigation()
  const handleNavigate = () => {
    navigation.navigate('SignUp')
  }
  return <LoginView navigate={handleNavigate} />
}

export default LoginContainer
