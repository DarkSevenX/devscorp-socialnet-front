import type { FormEvent } from 'react'
import { useState } from 'react'
import useAuth from '../../store/authStore'
import type { IUser } from '../../model/user'

interface RegisterProps {
  toggleLogin: () => void
}

export const Register = ({ toggleLogin }: RegisterProps) => {
  const [username, setUsername] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')

  const { register, error } = useAuth()

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const form = e.currentTarget

      const newUser: IUser = {
        username,
        email,
        password,
      }
      await register(newUser)

      alert('usuario registrado')
      toggleLogin()
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <div style={{ color: 'red' }}>{error && error}</div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">registrarse</button>
      </form>
      <p>
        ¿ya tienes cuenta? <button onClick={toggleLogin}>Login</button>
      </p>
    </div>
  )
}
