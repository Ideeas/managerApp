import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FavoriteCard from './FavoriteCard'

function renderFavorites({ projects }) {
  return (
    <ScrollView style={{ marginVertical: 50 }} horizontal showsHorizontalScrollIndicator={false}>
      {projects?.map(({ title, owner, id }) => (
        <View style={{ marginHorizontal: 20 }} key={id}>
          <FavoriteCard
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
