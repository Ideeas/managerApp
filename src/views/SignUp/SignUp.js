import React from 'react'
import { View, Text, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from 'react-native'

import { COLORS } from '../../general/styles/colors'

import Input from '../../general/components/Input'
import Button from '../../general/components/Button'
import Header from './components/Header'

const formFields = [
  {
    type: 'NAME',
    placeholder: 'Name',
    value: '',
  },

  {
    type: 'EMAIL',
    placeholder: 'Email',
    value: '',
  },

  {
    type: 'USERNAME',
    placeholder: 'Username',
    value: '',
  },

  {
    type: 'PASSWORD',
    placeholder: 'Password',
    value: '',
  },
]

const SignUpView = ({ onPress, handleChange }) => {
  const renderFormsFields = () =>
    formFields.map((field, index) => (
      <View key={index} style={{ marginTop: 20 }}>
        <Input
          placeholder={field.placeholder}
          onChangeText={(content) => {
            handleChange(field.type, content)
          }}
        />
      </View>
    ))

  return (
    <View style={styles.container}>
      <Header title="Lets get started !" subtitle="Create new account" />

      <KeyboardAvoidingView behavior="padding" style={{ marginTop: '20%' }}>
        <ScrollView>
          <View>{renderFormsFields()}</View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.buttonContainer}>
        <Button content="Sign Up" onPress={onPress} />
        <Text style={styles.signIn}>Sign in</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue500,
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
})

export default SignUpView
