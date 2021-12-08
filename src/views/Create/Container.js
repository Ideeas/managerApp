import React from 'react'
import CreateView from './Create'
import { useNavigation } from '@react-navigation/core'

const CreateContainer = () => {
  const navigation = useNavigation()

  return <CreateView />
}

export default CreateContainer
