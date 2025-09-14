import { create } from 'zustand'
import { AuthService } from '../service/authService'
import type { ILogin } from '../model/user'
import type { IUser } from '../model/user'

type AuthTypes = {
  token: string | null
  user: ILogin | null
  error: string | null
  login: (loginData: ILogin) => Promise<void>
  register: (registerData: IUser) => Promise<void>
  logout: () => void
  resetError: () => void
}

const useAuth = create<AuthTypes>((set) => ({
  token: localStorage.getItem('token') || null,
  user: null,
  error: null,

  login: async (loginData: ILogin) => {
    const service = new AuthService()
    set({ error: null })

    try {
      const { token } = await service.signIn(loginData)

      localStorage.setItem('token', token)

      set({ token })
    } catch (error: any) {
      console.error('error en login', error)
      set({ error: error })
      throw error
    }
  },

  register: async (registerData: IUser) => {
    const service = new AuthService()
    set({ error: null })

    try {
      await service.signUp(registerData)
    } catch (err: any) {
      console.error('error en login', error)
      set({ error: error })
      throw error
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  resetError: () => {
    set({ error: null })
  }
}))

export default useAuth