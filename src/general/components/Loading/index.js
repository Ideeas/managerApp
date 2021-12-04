import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { COLORS } from '../../styles/colors'

const Loading = ({ loading }) => {
  return <Spinner loading={loading} color={COLORS.blue500} />
}

export default Loading
