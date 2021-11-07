import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

import { COLORS } from '../../../general/styles/colors'

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.contentContainer}>
      <StatusBar backgroundColor={COLORS.blue700} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtititle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1.5,
    backgroundColor: COLORS.blue700,
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomEndRadius: 80,
  },

  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtititle: {
    color: COLORS.white,
    fontSize: 18,
  },
})

export default Header
