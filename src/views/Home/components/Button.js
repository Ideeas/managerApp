import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { COLORS } from '../../../general/styles/colors'

const Button = ({ backgroundColor, color, content, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
      <Text style={[styles.textButton, { color }]}>{content}</Text>
      <MaterialCommunityIcons name="chevron-right" size={40} color={COLORS.blue700} />
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

Button.propsTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string.isRequired,
}

Button.defaultProps = {
  backgroundColor: COLORS.white,
  color: COLORS.blue700,
}

export default Button
