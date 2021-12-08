import React from 'react'
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../general/styles/colors'

import SvgGreetings from '../../general/assets/SvgGreetings.svg'

import Container from '../../general/components/container'
import Button from '../../general/components/Button'

const GreetingsView = ({ navigate }) => {
  return (
    <Container>
      <View style={styles.contentContainer}>
        <StatusBar backgroundColor={COLORS.blue500} />
        <SvgGreetings width={300} height={300} />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { marginBottom: 15 }]}>Manage Projects</Text>
          <Text style={styles.subtititle}>List and Manage yours projects is easier than never</Text>
        </View>
      </View>
      <Button activeOpacity={0.6} onPress={navigate} content="Lets go" />
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: 'bold',
  },

  subtititle: {
    color: COLORS.white,
    fontSize: 20,
  },

  contentContainer: {
    alignItems: 'center',
  },

  titleContainer: {
    marginVertical: Platform.OS === 'android' ? '10%' : '30%',
  },
})

export default GreetingsView
