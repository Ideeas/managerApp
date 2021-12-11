import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject, clearProject } from './redux'
import { updateUserData } from '../../general/redux/user'

import * as ImagePicker from 'expo-image-picker'
import CreateView from './Create'
import { Alert } from 'react-native'

const CreateContainer = () => {
  const user = useSelector((state) => state.user)
  const project = useSelector((state) => state.project)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  const [formFields, setFormFields] = useState({
    ownerId: user.id,
    name: '',
    status: false,
    image: '',
    owner_image: '',
  })

  const handleChangeName = (event) => {
    setFormFields({ ...formFields, name: event })
  }

  const handleChangeStatus = () => {
    setFormFields({ ...formFields, status: !formFields.status })
  }

  const handleUploadImg = async (type) => {
    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      })

      if (image.cancelled) return

      if (type === 'owner') {
        setFormFields({ ...formFields, owner_image: image.uri })
      } else {
        setFormFields({ ...formFields, image: image.uri })
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleSubmit = (payload) => {
    dispatch(addProject(payload))
    setFormFields(clearFields)
  }

  const clearFields = () => ({
    ownerId: user.id,
    name: '',
    status: false,
    image: '',
    owner_image: '',
  })

  useEffect(() => {
    if (project !== undefined) {
      dispatch(updateUserData({ user, project }))
      Alert.alert('SUCCESS')
    }

    return () => {
      dispatch(clearProject())
    }
  }, [project])

  return (
    <CreateView
      formFields={formFields}
      loading={loading}
      handleChangeName={handleChangeName}
      handleUploadImg={handleUploadImg}
      handleChangeStatus={handleChangeStatus}
      handleSubmit={handleSubmit}
    />
  )
}

export default CreateContainer
