import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../../general/styles/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const Upload = ({ img, title, handlePress }) => {
  const renderImage = () => {
    return img === '' ? (
      <>
        <MaterialCommunityIcons name="cloud-upload-outline" size={40} color={COLORS.blue700} />
        <Text style={styles.upload}>Upload</Text>
      </>
    ) : (
      <Image source={{ uri: img }} style={styles.image} />
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.imgContainer} onPress={handlePress}>
        {renderImage()}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 20,
  },

  imgContainer: {
    width: 120,
    height: 100,
    backgroundColor: COLORS.blue100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.blue700,
    borderRadius: 5,
  },

  upload: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.blue700,
  },

  image: {
    flex: 1,
  },
})

Upload.PropTypes = {
  title: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
}

Upload.defaultProps = {
  img: '',
}

export default Upload
