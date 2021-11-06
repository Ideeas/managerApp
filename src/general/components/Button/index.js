import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

const Button = ({ children, background = '', color = '', content, ...rest }) => {
  const backgroundColor = background === '' ? COLORS.blue100 : background
  const buttonColor = color === '' ? COLORS.blue500 : color
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
      <Text style={[styles.textButton, { color: buttonColor }]}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 50,
  },

  textButton: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})

export default Button
