import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../general/styles/colors'

import Logo from '../../general/assets/Logo.svg'

import Container from '../../general/components/container'
import Title from './components/Title'
import Input from '../../general/components/Input'
import Button from '../../general/components/Button'

const LoginView = () => {
  return (
    <Container>
      <View style={styles.LogoContainer}>
        <Logo style={{ marginRight: 5 }} />
        <Title />
      </View>

      <View style={{ marginTop: 100 }}>
        <Input placeholder="Username" />
        <View style={{ marginTop: 30 }}>
          <Input placeholder="Password" />
        </View>
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button content="Sign in" />

        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccount}>Dont have account?</Text>
          <Text style={[styles.createAccount, { color: COLORS.blue100 }]}>Sign up</Text>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  LogoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },

  forgotPassword: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
    color: COLORS.blue300,
  },

  buttonContainer: {
    marginTop: 80,
  },

  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  createAccount: {
    fontSize: 16,
    marginHorizontal: 2,
  },
})

export default LoginView
