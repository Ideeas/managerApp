import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { COLORS } from '../../../../general/styles/colors'

const Header = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: COLORS.white }]}>New Project</Text>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.2}>
        <Text style={[styles.title, { color: COLORS.blue300 }]}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

Header.propsTypes = {
  backgroundColor: PropTypes.func.isRequired,
}

export default Header
