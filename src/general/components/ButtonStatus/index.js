import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors'
import PropTypes from 'prop-types'

const ButtonStatus = ({ status, ...rest }) => {
  React.useEffect(() => {
    console.log(status)
  }, [])
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View
        style={[
          styles.completeContainer,
          status ? { borderColor: COLORS.white } : { borderColor: 'rgba(0,0,0,0)' },
        ]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 14,
    borderRadius: 50,
    borderWidth: 3,

    borderColor: COLORS.white,
  },

  completeContainer: {
    borderWidth: 10,
    borderRadius: 50,
    borderColor: COLORS.white,
  },
})

ButtonStatus.PropTypes = {
  status: PropTypes.bool,
}

ButtonStatus.defaultProps = {
  status: false,
}

export default ButtonStatus
