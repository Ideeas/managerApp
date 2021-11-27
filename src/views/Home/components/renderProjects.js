import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../general/styles/colors'
import ButtonStatus from './ButtonStatus'

const renderProjects = ({ title, status, date, owner }, onLongPress, isInteracting) => {
  return (
    <TouchableOpacity
      style={[styles.container, isInteracting && styles.onLongPressStyle]}
      onLongPress={onLongPress}
      activeOpacity={0.5}
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

  onLongPressStyle: {
    marginHorizontal: 10,
    backgroundColor: COLORS.transparentBlue,
    borderRadius: 30,
  },
})

export default renderProjects
