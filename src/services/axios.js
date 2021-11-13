import Axios from 'axios'
import { BASE_URL } from '@env'

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createUser = (payload) => {
  return axios.post('users/signUp', payload)
}
