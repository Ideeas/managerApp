import React from 'react'
import { View, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import Container from '../../general/components/container'
import Input from '../../general/components/Input'
import Header from './components/Header'
import Status from './components/Status'
import Upload from './components/Upload'
import Loading from '../../general/components/Loading'

const CreateView = ({
  formFields,
  loading,
  handleChangeStatus,
  handleChangeName,
  handleUploadImg,
  handleSubmit,
}) => {
  return (
    <Container justifyContent={'flex-start'}>
      {loading && <Loading />}
      <View style={styles.header}>
        <Header
          handlePress={() => {
            handleSubmit(formFields)
          }}
        />
      </View>
      <View style={{ marginBottom: '20%' }}>
        <Input
          placeholder="Name"
          value={formFields.name}
          onChangeText={(event) => handleChangeName(event)}
        />
      </View>
      <View>
        <Status complete={formFields.status} handleChangeStatus={handleChangeStatus} />
      </View>

      <View style={styles.uploadImageContainer}>
        <Upload title="Project" img={formFields.image} handlePress={handleUploadImg} />
        <Upload
          title="Owner"
          img={formFields.owner_image}
          handlePress={async () => {
            await handleUploadImg('owner')
          }}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    marginVertical: Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 20,
  },

  uploadImageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
})

export default CreateView
