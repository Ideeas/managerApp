import React from 'react'
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native'
import { COLORS } from '../../general/styles/colors'
import { useForm } from 'react-hook-form'

import Button from '../../general/components/Button'
import Header from './components/Header'
import Loading from '../../general/components/Loading'
import RenderForm from '../../general/components/RenderFormsFIelds'

const formFields = [
  {
    type: 'name',
    placeholder: 'Name',
    value: '',
  },

  {
    type: 'email',
    placeholder: 'Email',
    rules: {
      pattern: {
        value:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email must be valid',
      },
    },
    value: '',
  },

  {
    type: 'username',
    placeholder: 'Username',
    value: '',
  },

  {
    type: 'password',
    placeholder: 'Password',
    rules: {
      minLength: {
        value: 5,
        message: 'Password must have at least 5 characteres',
      },

      maxLength: {
        value: 200,
        message: 'Password must have 200 characteres',
      },
    },
    value: '',
  },
]

const SignUpView = ({ submit, loading }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  return (
    <View style={styles.container}>
      <Header title="Lets get started !" subtitle="Create new account" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.formContainer}>
        <Loading loading={loading} />
        <View>{RenderForm(formFields, control, errors)}</View>

        <View style={styles.buttonContainer}>
          <Button content="Sign Up" onPress={handleSubmit(submit)} />
          <Text style={styles.signIn}>Sign in</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue500,
  },

  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  buttonContainer: {
    marginVertical: Platform.OS === 'ios' ? '20%' : 10,
  },

  signIn: {
    color: COLORS.blue100,
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
  },

  error: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
  },
})

export default SignUpView
