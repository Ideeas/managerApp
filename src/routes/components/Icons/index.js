import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../../../general/styles/colors'

function Icons({ name, isSelect }) {
  const animatedContainer = useRef(new Animated.ValueXY()).current

  const shadowConfig = {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 2,
    shadowOffset: {
      width: animatedContainer.x,
      height: animatedContainer.y,
    },
  }

  useEffect(() => {
    Animated.spring(animatedContainer, {
      toValue: { x: 2, y: 10 },
      useNativeDriver: false,
    }).start()
  }, [isSelect])

  return (
    <Animated.View
      style={[
        animatedContainer.getLayout(),
        isSelect && [
          styles.container,
          {
            shadowColor: shadowConfig.shadowColor,
            shadowOffset: shadowConfig.shadowOffset,
            shadowOpacity: shadowConfig.shadowOpacity,
          },
        ],
      ]}
    >
      <MaterialCommunityIcons name={name} size={30} color={COLORS.white} />
    </Animated.View>
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
