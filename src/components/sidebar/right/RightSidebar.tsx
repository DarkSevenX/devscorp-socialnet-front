import { FiFeather } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { FiCommand } from 'react-icons/fi';
import { PiCurrencyDollarBold } from 'react-icons/pi';
import { FiCompass } from 'react-icons/fi';
import { FiLogOut } from "react-icons/fi";
import useAuth from '../../../store/authStore';
import {useNavigate} from '../../../store/routerStore';

const discussionsData = [
  {
    title: 'Meme Monday',
    comments: 36,
    icon: <FiFeather />,
    bgColor: 'bg-purple-300'
  },
  {
    title: 'Why the Latest JS Frameworks...',
    comments: 89,
    icon: <FiCommand/>,
    bgColor: 'bg-blue-400'
  },
  {
    title: 'Hope Was Distant...',
    comments: 20,
    icon: <FiCompass />,
    bgColor: 'bg-red-400'
  },
  {
    title: 'Why Most AI Teams Are Stuck',
    comments: 39,
    icon: <PiCurrencyDollarBold />,
    bgColor: 'bg-pink-400'
  },
  {
    title: 'De la mentira y la verdad...',
    comments: 500,
    icon: <BsBook/>,
    bgColor: 'bg-yellow-300'
  }
];

export const RightSidebar = () => {
  const { logout } = useAuth()
  const { navigate } = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate('auth')
  }
  
  return (
    <aside className='hidden overflow-y-scroll scrollbar-hide lg:flex lg:w-85 flex-col bg-black border-l border-neutral-900 fixed right-0 top-0 h-screen p-5 space-y-6'>
      <div className='flex px-3' onClick={handleLogout}>
        <FiLogOut className='text-white ml-auto hover:cursor-pointer text-lg'/>
      </div>
      <h2 className='text-lg font-bold text-white'>Discusiones activas</h2>
      <div className='flex flex-col space-y-3 text-sm'>
        {discussionsData.map((discussion, index) => (
          <div
            key={index}
            className='flex justify-between items-center p-3 rounded-lg text-white'
          >
            <div>
              <p className='font-semibold text-xl'>{discussion.title}</p>
              <p className='text-gray-400'>{discussion.comments} Comentarios</p>
            </div>
            <span
              className={`flex items-center justify-center px-3 rounded text-black ${discussion.bgColor} h-full`}
            >
              {discussion.icon}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};
