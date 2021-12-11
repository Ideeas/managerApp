import React from 'react'
import LoginView from './Login'

import { useDispatch, useSelector } from 'react-redux'
import { authUser } from '../../general/redux/user'
import { Alert } from 'react-native'

const LoginContainer = () => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.error)
  const loading = useSelector((state) => state.loading)
  const handleLogin = (payload) => {
    dispatch(authUser(payload))
  }

  if (error) {
    Alert.alert('Login error, try again later ' + error.message)
  }
  return <LoginView handleLogin={handleLogin} loading={loading} />
}

export default LoginContainer
