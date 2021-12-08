import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { COLORS } from '../../../../general/styles/colors'

const Header = (handlePress) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: COLORS.white }]}>New Project</Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Text style={[styles.title, { color: COLORS.blue300 }]}>Done</Text>
      </TouchableWithoutFeedback>
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

Header.PropTypes = {
  backgroundColor: PropTypes.func.isRequired,
}

export default Header
