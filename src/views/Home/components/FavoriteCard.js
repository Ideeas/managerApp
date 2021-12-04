import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORS } from '../../../general/styles/colors'

function FavoriteCard({ title, owner, image, ownerImg }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImg}
        source={{
          uri: image,
        }}
      />
      <View style={styles.leaderContainer}>
        <Image
          style={styles.leaderImg}
          source={{
            uri: ownerImg,
          }}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{owner}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 180,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },

  containerImg: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  leaderContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  leaderImg: {
    borderRadius: 10,
    marginRight: 10,
    width: 30,
    height: 30,
  },

  title: {
    color: COLORS.blue500,
    fontSize: 16,
    fontWeight: 'bold',
  },

  subtitle: {
    color: COLORS.blue500,
    fontSize: 10,
  },
})

export default FavoriteCard
