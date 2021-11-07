import Axios from 'axios'
import { BASE_URL } from '@env'

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'Application/json',
  },
})

axios.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)

export const postCreateUser = (body) => {
  return axios.post('users', body)
}
