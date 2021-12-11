import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors'
import PropTypes from 'prop-types'

const Button = ({ backgroundColor, color, content, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
      <Text style={[styles.textButton, { color }]}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 20,
  },

  textButton: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string.isRequired,
}

Button.defaultProps = {
  backgroundColor: COLORS.white,
  color: COLORS.blue700,
}

export default Button
