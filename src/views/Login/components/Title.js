import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../general/styles/colors'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: COLORS.white }]}>Mana</Text>
      <Text style={[styles.text, { color: COLORS.blue100 }]}>ger</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
})

export default Title
