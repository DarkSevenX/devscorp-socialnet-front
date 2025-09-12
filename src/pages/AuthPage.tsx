import { useState } from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import useAuth from '../store/authStore'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const { resetError } = useAuth()

  const toggleLogin = () => {
    resetError()
    setIsLogin(!isLogin)
  }

  return (
    <div>
      <h1>Devscorp</h1>
      {isLogin ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <Register toggleLogin={toggleLogin} />
      )}
    </div>
  )
}
