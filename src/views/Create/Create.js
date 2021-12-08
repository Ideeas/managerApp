import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Container from '../../general/components/container'
import RenderForm from '../../general/components/RenderFormsFIelds'
import Header from './components/Header'
import Status from './components/Status'
import Upload from './components/Upload'

const formFields = [
  {
    type: 'owner',
    placeholder: 'Owner',
    value: '',
  },

  {
    type: 'name',
    placeholder: 'Name',
    value: '',
  },
]

const CreateView = ({ status }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: 'onChange' })

  return (
    <Container justifyContent={'flex-start'}>
      <View style={styles.header}>
        <Header handlePress={() => {}} />
      </View>
      {RenderForm(formFields, control, errors)}
      <View>
        <Status complete={status} />
      </View>

      <View style={styles.uploadImageContainer}>
        <Upload title="Project" handlePress={() => {}} />
        <Upload title="Owner" handlePress={() => {}} />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    marginVertical: Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 20,
  },

  uploadImageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default CreateView
