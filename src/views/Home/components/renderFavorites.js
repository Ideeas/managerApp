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
    <ScrollView style={{ marginVertical: 50 }} horizontal showsHorizontalScrollIndicator={false}>
      {projects.map(({ title, owner, id }) => (
        <View style={{ marginHorizontal: 20 }}>
          <FavoriteCard
            key={id}
            title={title}
            owner={owner}
            image={projects.image}
            ownerImg={projects.ownerImg}
          />
        </View>
      ))}
    </ScrollView>
  )
}

export default renderFavorites
