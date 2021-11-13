import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import SignUpViews from './SignUp'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

import { clearData, createUser } from './redux'

const SignUpContainer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const message = useSelector((state) => state.message)
  const error = useSelector((state) => state.error)
  const loading = useSelector((state) => state.loading)

  const signUp = (data) => {
    dispatch(createUser(data))
  }

  useEffect(() => {
    if (error) {
      Alert.alert('Something went wrong with your register, try again later')
      dispatch(clearData())
    }

    if (message && message === 'SUCCESS') {
      Alert.alert(`Congratulations your registration was success`)
      navigation.goBack()
    }
  }, [message, error])

  useEffect(() => {
    return function () {
      dispatch(clearData())
    }
  }, [])

  return <SignUpViews submit={signUp} loading={loading} />
}

export default SignUpContainer
