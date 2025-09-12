import { api } from '../config/axios'
import type { ILogin, IUser } from '../model/user'

export const authService = {
  login: async (userData: ILogin) => {
    const response = await api.post('/auth/login', userData)

    return {
      user: response.data,
      token: response.headers['token'],
    }
  },

  register: async (userData: IUser) => {
    const response = await api.post('/auth/register', userData)

    return response
  },
}
