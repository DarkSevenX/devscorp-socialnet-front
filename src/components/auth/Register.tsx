import type { FormEvent } from 'react';
import { useState } from 'react';
import useAuth from '../../store/authStore';
import type { IUser } from '../../model/user';

interface RegisterProps {
  toggleLogin: () => void;
}

export const Register = ({ toggleLogin }: RegisterProps) => {
  const [username, setUsername] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const { register, error } = useAuth();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;

      const newUser: IUser = {
        username,
        email,
        password
      };
      await register(newUser);

      alert('usuario registrado');
      toggleLogin();
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white w-1/2 flex justify-center rounded-bl-2xl rounded-tl-2xl'>
      <form
        onSubmit={handleRegister}
        className='flex flex-col items-center justify-center w-2/3 gap-5'
      >
        <h2 className='text-3xl font-extrabold'>Register</h2>
        <div style={{ color: 'red' }}>{error && error}</div>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          className='border-2 rounded-sm w-full px-5 py-2 focus:px-4 transition-all duration-150 ease-in-out'
        />
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setMail(e.target.value)}
          className='border-2 rounded-sm w-full px-5 py-2 focus:px-4 transition-all duration-150 ease-in-out'
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 rounded-sm w-full px-5 py-2 focus:px-4 transition-all duration-150 ease-in-out'
        />
        <button
          type='submit'
          className='bg-black text-white font-bold w-full px-5 py-2 rounded-lg hover:cursor-pointer
        border-2 hover:rounded-xl transition-all duration-300 ease-in-out active:bg-white active:text-black active:border-black'
        >
          registrarse
        </button>
        <p>
          ¿ya tienes cuenta? <button onClick={toggleLogin}
            className='text-blue-500 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in-out'
          >Login</button>
        </p>
      </form>
    </div>
  );
};
