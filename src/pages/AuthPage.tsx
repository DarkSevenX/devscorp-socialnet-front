import { useState } from 'react';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import useAuth from '../store/authStore';
import logo from '/logo.png'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { resetError } = useAuth();

  const toggleLogin = () => {
    resetError();
    setIsLogin(!isLogin);
  };

  return (
    <div className='bg-black h-dvh flex justify-center sm:justify-end items-center'>
      <div className='w-full h-full hidden sm:flex justify-center items-center align-middle'>
        <div className='flex flex-row justify-center items-center'>
          <img src={logo} alt='logo de Devscorp' className='w-12 sm:w-25 inline' />
          <h1 className='text-white mx-auto sm:text-5xl lg:text-7xl font-extrabold inline'>
            Devscorp
          </h1>
        </div>
      </div>
      {isLogin ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <Register toggleLogin={toggleLogin} />
      )}
    </div>
  );
};
