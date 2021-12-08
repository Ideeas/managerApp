import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../general/styles/colors'
import { useNavigation } from '@react-navigation/core'

import Logo from '../../general/assets/Logo.svg'

import Container from '../../general/components/container'
import Title from './components/Title'
import Input from '../../general/components/Input'
import Button from '../../general/components/Button'

const LoginView = ({ handleLogin }) => {
  const navigation = useNavigation()
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (key, value) => {
    setLoginData({ ...loginData, [key]: value })
  }
  return (
    <Container>
      <View style={styles.LogoContainer}>
        <Logo style={{ marginRight: 5 }} />
        <Title />
      </View>

      <View style={{ marginTop: 100 }}>
        <Input
          placeholder="Username"
          onChangeText={(text) => {
            handleChange('username', text)
          }}
        />
        <View style={{ marginTop: 30 }}>
          <Input
            placeholder="Password"
            onChangeText={(text) => {
              handleChange('password', text)
            }}
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button content="Sign in" onPress={() => handleLogin(loginData)} />

        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccount}>Dont have account?</Text>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.createAccount, { color: COLORS.blue100 }]}
          >
            Sign up
          </Text>
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
