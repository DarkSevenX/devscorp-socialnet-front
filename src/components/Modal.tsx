import type React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm'>
      <div className='bg-neutral-950 border border-white text-white rounded-lg shadow-xl max-w-lg w-full p-6 m-4'>
        {title && (
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700'
            >
              ✕
            </button>
          </div>
        )}
        <div>{children}</div>
        {!title && (
          <div className='mt-4 flex justify-end'>
            <button
              onClick={onClose}
              className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
