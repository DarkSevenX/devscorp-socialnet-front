import type { FormEvent } from 'react';
import { useState } from 'react';
import useAuth from '../../store/authStore';
import { useNavigate } from '../../store/routerStore';
import type { ILogin } from '../../model/user';

interface LoginProps {
  toggleLogin: () => void;
}

export const Login = ({ toggleLogin }: LoginProps) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuth();
  const { navigate } = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;

      const userData: ILogin = { email, password };
      await login(userData);

      navigate('home');
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white w-1/2 flex justify-center rounded-bl-2xl rounded-tl-2xl'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center w-2/3 gap-5'
      >
        <h2 className='text-3xl font-extrabold'>Login</h2>
        <div style={{ color: 'red' }}>{error && error}</div>
        <input
          type='email'
          placeholder='Correo'
          required={true}
          onChange={(e) => setMail(e.target.value)}
          className='border-2 rounded-sm w-full px-5 py-2 focus:px-4 transition-all duration-150 ease-in-out'
        />
        <input
          type='password'
          required={true}
          placeholder='contraseña'
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 rounded-sm w-full px-5 py-2 focus:px-4 transition-all duration-150 ease-in-out'
        />
        <button type='submit' className='bg-black text-white font-bold w-full px-5 py-2 rounded-lg hover:cursor-pointer
        border-2 hover:rounded-xl transition-all duration-300 ease-in-out active:bg-white active:text-black active:border-black
        '>
          Go!
        </button>
        <p>
          ¿no tienes cuenta?{' '}
          <button
            className='text-blue-500 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in-out'
            onClick={toggleLogin}
          >
            Registrate
          </button>
        </p>
      </form>
    </div>
  );
};
