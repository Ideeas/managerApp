import React from 'react'
import { StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { COLORS } from '../../styles/colors'

const Loading = ({ loading }) => {
  return <Spinner loading={loading} color={COLORS.blue500} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

export default Loading
