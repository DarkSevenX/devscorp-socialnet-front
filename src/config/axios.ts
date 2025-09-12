import axios from 'axios'
import useAuth from '../store/authStore'

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  //  withCredentials: true
})

api.interceptors.request.use(
  (config) => {
    const token = useAuth.getState().token
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => Promise.reject(error),
)
