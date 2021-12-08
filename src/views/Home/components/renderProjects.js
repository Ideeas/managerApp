import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../general/styles/colors'
import ButtonStatus from '../../../general/components/ButtonStatus'

const renderProjects = (props) => {
  const { cardData, isInteracting, handlePressIn, handlePressOut } = props
  const { status, title, owner, date } = cardData

  return (
    <TouchableOpacity
      style={[styles.container, isInteracting && styles.onInteracting]}
      activeOpacity={0.5}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <ButtonStatus status={status} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{owner}</Text>
      </View>
      <Text style={{ color: COLORS.white }}>{date}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  subTitle: {
    fontSize: 16,
    color: COLORS.white,
  },

  onInteracting: {
    backgroundColor: COLORS.transparentBlue,
    borderRadius: 30,
  },
})

export default renderProjects
