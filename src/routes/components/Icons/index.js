import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../../../general/styles/colors'

function Icons({ name, isSelect }) {
  const shadowConfig = {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 2,
    // shadowOffset: {
    //   width: animatedContainer.x,
    //   height: animatedContainer.y,
    // },
  }

  return (
    <View
      style={
        isSelect && [
          styles.container,
          {
            shadowColor: shadowConfig.shadowColor,
            shadowOffset: shadowConfig.shadowOffset,
            shadowOpacity: shadowConfig.shadowOpacity,
          },
        ]
      }
    >
      <MaterialCommunityIcons name={name} size={30} color={COLORS.white} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue700,
    padding: 10,
    borderRadius: 50,
  },
})

export default Icons
