import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { COLORS } from '../../general/styles/colors'
import NoProjects from '../../general/assets/noProjects.svg'
import UserImg from '../../general/assets/userImg.svg'

import Button from './components/Button'
import renderProjects from './components/renderProjects'

function HomeView({ user }) {
  const [isPressingButton, setIsPressingButton] = useState(false)

  const handlePress = () => {
    setIsPressingButton(!isPressingButton)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello {user.name}</Text>
          <Text style={styles.subTitle}>{user.favorites} projects in your favorites</Text>
        </View>
        <UserImg />
      </View>
      {user.projects.length > 0 ? (
        <>
          <View style={{ flex: 1 }}></View>
          <FlatList
            data={user.projects}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              renderProjects({
                cardData: item,
                isInteracting: isPressingButton,
                handlePressIn: handlePress,
                handlePressOut: handlePress,
              })
            }
          />
        </>
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <NoProjects width={300} height={300} />
            <Text style={[styles.subTitle, { fontWeight: 'bold' }]}>
              It's look likes you don't have any project yet
            </Text>
          </View>

          <View style={{ marginBottom: 40 }}>
            <Button content="Create my first project" activeOpacity={0.6} />
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue500,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 60 : 0,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  subTitle: {
    fontSize: 16,
    color: COLORS.white,
  },
})

export default HomeView
