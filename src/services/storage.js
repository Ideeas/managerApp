import AsyncStorage from '@react-native-async-storage/async-storage'
import PropTypes from 'prop-types'

const USER_TOKEN = '@storage_token'

export const setUserToken = async (value) => {
  try {
    await AsyncStorage.setItem(USER_TOKEN, value)
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserToken = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_TOKEN)
    return value
  } catch (error) {
    throw new Error(error)
  }
}

setUserToken.propTypes = {
  value: PropTypes.string,
}
