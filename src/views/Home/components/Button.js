import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../../../general/styles/colors'

const Button = ({ children, background = '', color = '', content, ...rest }) => {
  const backgroundColor = background === '' ? COLORS.blue100 : background
  const buttonColor = color === '' ? COLORS.blue500 : color
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
      <Text style={[styles.textButton, { color: buttonColor }]}>{content}</Text>
      <MaterialCommunityIcons name="chevron-right" size={40} color={COLORS.blue500} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },

  textButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default Button
