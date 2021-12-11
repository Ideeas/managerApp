import React, { useEffect } from 'react'
import GreetingsView from './Greetings'
import { useNavigation } from '@react-navigation/core'
import { hasUserAuth } from '../../general/redux/user'
import { useDispatch, useSelector } from 'react-redux'

const GreetingsContainer = () => {
  const loading = useSelector((state) => state.loading)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleNavigate = () => {
    navigation.navigate('Login')
  }

  useEffect(() => {
    dispatch(hasUserAuth())
  }, [])
  return <GreetingsView navigate={handleNavigate} loading={loading} />
}

export default GreetingsContainer
