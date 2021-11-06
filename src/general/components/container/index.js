import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { COLORS } from '../../styles/colors'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const Container = ({ children, background = '' }) => {
  const color = background === '' ? COLORS.blue500 : background

  return <View style={[styles.container, { backgroundColor: color }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.blue500,
    paddingTop: Platform.OS === 'ios' && getStatusBarHeight(),
  },
})

export default Container
