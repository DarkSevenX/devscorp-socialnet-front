import { FiFeather } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { FiCodesandbox } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FiKey } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";


// TODO: fix colorscheme
const subjectsData = [
  {
    name: 'Matemáticas',
    icon: <FiCodesandbox />,
    color: 'bg-green-400'
  },
  {
    name: 'Castellano',
    icon: <BsBook/>,
    color: 'bg-yellow-300'
  },
  {
    name: 'Informática',
    icon: <FiCommand/>,
    color: 'bg-blue-400'
  },
  {
    name: 'Filosofía',
    icon: <FiFeather/>,
    color: 'bg-purple-400'
  },
  {
    name: 'Economía',
    icon: <PiCurrencyDollarBold />,
    color: 'bg-pink-400'
  },
  {
    name: 'Política',
    icon: <FiKey/>,
    color: 'bg-red-400'
  },
  {
    name: 'Humanidades',
    icon: <FiCompass />,
    color: 'bg-orange-200'
  }
];

export const Descubre = () => {
  return (
    <div className='border-b-1 border-neutral-900 pb-6'>
      <h2 className='text-white text-lg'>Descubre</h2>
      <div className='flex flex-col space-y-3 pt-7'>
        {subjectsData.map((subject, index) => (
          <button
            className={`flex justify-between w-full items-center px-15 font-extrabold
              py-2 rounded-full ${subject.color} text-black font-semibold`}
            key={index}
          >
            {subject.name} <span>{subject.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
