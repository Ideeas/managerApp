import React from 'react'
import LoginView from './Login'

import { useDispatch } from 'react-redux'
import { authUser } from '../../general/redux/user'

const LoginContainer = () => {
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(authUser())
  }

  return <LoginView handleLogin={handleLogin} />
}

export default LoginContainer
