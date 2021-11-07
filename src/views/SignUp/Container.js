import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import SignUpViews from './SignUp'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

import { createUser } from './redux'

const SignUpContainer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [body, setBody] = useState({})

  const createUserTest = () => {
    dispatch(createUser(body))
  }

  const modifyCurrentType = (type, content) => setBody({ ...body, [type]: content })
  const handleChange = (type, content) => modifyCurrentType(type, content)

  useEffect(() => {
    if (selector.error) {
      Alert.alert('Something went wrong with your register, try again later')
    }

    if (selector.message && selector.message === 'SUCCESS') {
      const { user } = selector
      Alert.alert(`Congratulations ${user.nome} your registration was success`)
      navigation.goBack()
    }
  }, [selector])

  return <SignUpViews onPress={createUserTest} handleChange={handleChange} />
}

export default SignUpContainer
