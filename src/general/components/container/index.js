import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { COLORS } from '../../styles/colors'
import PropTypes from 'prop-types'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const Container = ({ children, backgroundColor, justifyContent }) => {
  return <View style={[styles.container, { backgroundColor, justifyContent }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
})

Container.propsTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
}

Container.defaultProps = {
  backgroundColor: COLORS.blue500,
  justifyContent: 'center',
}

export default Container
