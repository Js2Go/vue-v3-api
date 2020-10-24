import axios from 'axios'
import { HTTP_TIMEOUT } from '../config'
import { getToken } from './token'

const instance = axios.create({
  timeout: HTTP_TIMEOUT,
  baseURL: import.meta.env.VITE_API_BASE_URL
})

instance.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken()

  return config
})

instance.interceptors.response.use(res => {
  return res.data
})

export default instance
