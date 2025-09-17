import { create } from 'zustand'
import { AuthService } from '../service/authService'
import type { ILogin } from '../model/user'
import type { IUser } from '../model/user'

// ---- Funciones para manejar cookies ----
function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`
}

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
  token: getCookie('token') || null,
  user: null,
  error: null,

  login: async (loginData: ILogin) => {
    const service = new AuthService()
    set({ error: null })

    try {
      const { token, userData } = await service.signIn(loginData)

      console.log(token)
      console.log(userData)
      setCookie('token', token, 7)
      localStorage.setItem('user', JSON.stringify(userData))

      set({ token })
    } catch (error: any) {
      console.error('error en login', error)
      set({ error: 'error en login' })
      throw error
    }
  },

  register: async (registerData: IUser) => {
    const service = new AuthService()
    set({ error: null })

    try {
      await service.signUp(registerData)
    } catch (err: any) {
      console.error('error en login', err)
      // aquí se pueden poner errores mas descriptivos
      // pero no se que responde supabase
      set({ error: 'error en registro' })
      throw err
    }
  },

  logout: () => {
    deleteCookie('token')
    localStorage.removeItem('user')
    set({ token: null })
  },

  resetError: () => {
    set({ error: null })
  }
}))

export default useAuth
