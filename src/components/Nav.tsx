import { useState } from 'react';
import { Modal } from './Modal';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa";
import useAuth from '../store/authStore';

export const Nav = ({ onNewPost }: { onNewPost?: (post: any) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const user: any = useAuth((state) => state.user); 

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postText.trim()) return;

    let imageUrl = '';
    if (imageFile && imagePreview) {
      imageUrl = imagePreview;
    }

    const newPost = {
      username: user?.user_metadata?.name || 'Usuario',
      profileImg: 'https://ui-avatars.com/api/?name=' + (user?.user_metadata?.name || 'U'),
      image: imageUrl,
      description: postText,
      uploadTime: 'Ahora'
    };

    const localPosts = JSON.parse(localStorage.getItem('userPosts') || '[]');
    localStorage.setItem('userPosts', JSON.stringify([newPost, ...localPosts]));

    setIsModalOpen(false);
    setPostText('');
    setImageFile(null);
    setImagePreview('');
    if (onNewPost) onNewPost(newPost);
  };

  return (
    <div className='fixed inset-x-0 bottom-4 flex justify-center z-50'>
      <nav className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black border-1 border-neutral-900
        text-white rounded-full shadow-lg px-10 py-3 flex items-center justify-between space-x-8 w-[98%] max-w-lg'>
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
        <form className='bg-neutral-950 text-white' onSubmit={handlePost}>
          <textarea
            cols={70}
            rows={10}
            className='focus:outline-none p-2 resize-none scrollbar-hide'
            value={postText}
            onChange={e => setPostText(e.target.value)}
            placeholder='¿Qué quieres compartir?'
          ></textarea>
          <input
            type='file'
            accept='image/*'
            className='block my-2'
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt='preview' className='max-h-40 rounded-lg mb-2' />
          )}
          <button type='submit' className='rounded-full hover:cursor-pointer bg-white text-black py-2 px-4'>
            Post!
          </button>
        </form>
      </Modal>
    </div>
  );
};
