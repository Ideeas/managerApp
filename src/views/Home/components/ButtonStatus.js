import React, { useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../../general/styles/colors'

const ButtonStatus = ({ status, ...rest }) => {
  const complete = status === 'complete' ? true : false
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View
        style={[
          styles.completeContainer,
          complete ? { borderColor: COLORS.white } : { borderColor: 'rgba(0,0,0,0)' },
        ]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
  },

  completeContainer: {
    borderWidth: 10,
    borderRadius: 50,
    borderColor: COLORS.white,
  },
})

export default ButtonStatus
