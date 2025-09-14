import type { FormEvent } from 'react'
import { useState } from 'react'
import useAuth from '../../store/authStore'
import { useNavigate } from '../../store/routerStore'
import type { ILogin } from '../../model/user'

interface LoginProps {
  toggleLogin: () => void
}

export const Login = ({ toggleLogin }: LoginProps) => {
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error } = useAuth()
  const { navigate } = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const form = e.currentTarget

      const userData: ILogin = { email, password }
      await login(userData)

      navigate('home')
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 >Login</h2>
        <div style={{ color: 'red' }}>{error && error}</div>
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
        >
          Go!
        </button> 
        <p>
          ¿no tienes cuenta? <button className='text-blue-500 hover:cursor-pointer hover:text-white transition-all duration-300 ease-in-out' onClick={toggleLogin}>Registrate</button>
        </p>
      </form>
    </div>
  )
}
