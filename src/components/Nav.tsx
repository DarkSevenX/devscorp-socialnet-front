import { useState } from 'react';
import { Modal } from './Modal';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa";

// nota, poner subida de archivos
export const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='fixed inset-x-0 bottom-4 flex justify-center z-50'>
      <nav
        className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black border-1 border-neutral-900
    text-white rounded-full shadow-lg px-10 py-3 flex items-center justify-between space-x-8 w-[98%] max-w-lg'
      >
        <button className='hover:text-blue-400 hover:cursor-pointer '>🏠</button>
        <button className='hover:text-blue-400 hover:cursor-pointer'>
          <FaMagnifyingGlass />
        </button>
        <button
          className='text-white rounded-full shadow hover:cursor-pointer'
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus />
        </button>
        <button className='relative hover:text-blue-400 hover:cursor-pointer'>
          <FaRegBell />
          <span className='absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full px-1'>
            3
          </span>
        </button>
        <button className='hover:text-blue-400 hover:cursor-pointer'>👤</button>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='new post'
      >
        <form className='bg-neutral-950 text-white'>
          <textarea
            name=''
            id=''
            cols={70}
            rows={10}
            className='focus:outline-none p-2 resize-none scrollbar-hide'
          ></textarea>
          <button className='rounded-full hover:cursor-pointer bg-white text-black py-2 px-4'>
            Post!
          </button>
        </form>
      </Modal>
    </div>
  );
};
