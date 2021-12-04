import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FavoriteCard from './FavoriteCard'

function renderFavorites({ projects }) {
  if (projects === undefined || projects.length <= 0) {
    return (
      <View>
        <Text>Tem nada pra mostrar aqui</Text>
      </View>
    )
  }

  return (
    <ScrollView style={{ marginHorizontal: 10 }} horizontal showsHorizontalScrollIndicator={false}>
      {projects.map(({ title, owner }) => (
        <FavoriteCard title={title} owner={owner} image={} ownerImg={}/>
      ))}
    </ScrollView>
  )
}

export default renderFavorites
