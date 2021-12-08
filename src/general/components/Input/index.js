import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors'

const Title = ({ ...rest }) => {
  return <TextInput style={styles.container} {...rest} />
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
})

export default Title
