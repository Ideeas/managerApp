import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../general/styles/colors'
import ButtonStatus from '../../../general/components/ButtonStatus'

const renderProjects = (props) => {
  const { cardData } = props
  const { status, name, date } = cardData

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <ButtonStatus status={status} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{props.owner}</Text>
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
