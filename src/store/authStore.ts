import { create } from 'zustand'

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
    set({ error: null })

    try {
      const { user, token } = await authService.login(loginData)

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      set({ user, token })
    } catch (error: any) {
      console.error('error en login', error)
      set({ error: error.response.data.message })
      throw error
    }
  },

  register: async (registerData: IUser) => {
    set({ error: null })

    try {
      await authService.register(registerData)
    } catch (error: any) {
      console.error('error en login', error)
      set({ error: error.response.data.message })
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
