import { FiFeather } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { FiCodesandbox } from 'react-icons/fi';
import { FiCommand } from 'react-icons/fi';
import { PiCurrencyDollarBold } from 'react-icons/pi';
import { FiKey } from 'react-icons/fi';
import { FiCompass } from 'react-icons/fi';

export const subjectsData = [
  {
    name: 'Matemáticas',
    icon: <FiCodesandbox />,
    color: 'bg-green-400',
    hover: 'hover:shadow-green-500'
  },
  {
    name: 'Castellano',
    icon: <BsBook />,
    color: 'bg-yellow-300',
    hover: 'hover:shadow-yellow-400'
  },
  {
    name: 'Informática',
    icon: <FiCommand />,
    color: 'bg-blue-400',
    hover: 'hover:shadow-blue-500'
  },
  {
    name: 'Filosofía',
    icon: <FiFeather />,
    color: 'bg-purple-400',
    hover: 'hover:shadow-purple-500'
  },
  {
    name: 'Economía',
    icon: <PiCurrencyDollarBold />,
    color: 'bg-pink-400',
    hover: 'hover:shadow-pink-500'
  },
  {
    name: 'Política',
    icon: <FiKey />,
    color: 'bg-red-400',
    hover: 'hover:shadow-red-500'
  },
  {
    name: 'Humanidades',
    icon: <FiCompass />,
    color: 'bg-orange-200',
    hover: 'hover:shadow-orange-300'
  }
];

export const Descubre = () => {
  return (
    <div className='border-b-1 border-neutral-900 pb-6'>
      <h2 className='text-white text-lg'>Descubre</h2>
      <div className='flex flex-col space-y-3 pt-7'>
        {subjectsData.map((subject, index) => (
          <button
            className={`flex justify-between w-full items-center px-15 font-extrabold hover:cursor-pointer
              py-2 rounded-full ${subject.color} text-black font-semibold shadow-sm hover:translate-x-1 ${subject.hover}
              transition-all duration-400 ease-in-out`}
            key={index}
          >
            {subject.name} <span>{subject.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
