import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../../general/styles/colors'
import PropTypes from 'prop-types'

import CompleteImg from '../../../../general/assets/complete_img.svg'
import InProgrees from '../../../../general/assets/inProgress_img.svg'
import ButtonStatus from '../../../../general/components/ButtonStatus'

const Status = ({ complete }) => {
  const buttonStatus = (text, complete) => {
    return (
      <View style={styles.statusContainer}>
        <ButtonStatus status={complete} />
        <Text style={styles.status}>{text}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.title}>Status</Text>
      <View style={styles.selectStatusContainer}>
        {complete ? (
          <CompleteImg width={150} height={150} />
        ) : (
          <InProgrees width={150} height={150} />
        )}
        <View style={styles.selectButtonContainer}>
          <View>{buttonStatus('Development', !complete)}</View>
          <View>{buttonStatus('Completete', complete)}</View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 18,
  },

  selectStatusContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },

  selectButtonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  statusContainer: {
    alignItems: 'center',
  },

  status: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 10,
  },
})

Status.PropTypes = {
  complete: PropTypes.bool,
}

Status.defaultProps = {
  complete: false,
}
export default Status
