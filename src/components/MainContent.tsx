import { Nav } from './Nav';

const postsData = [
  {
    username: 'Keyla Poloh',
    profileImg:
      'https://plus.unsplash.com/premium_photo-1757392183484-db7d416357a3?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image:
      'https://plus.unsplash.com/premium_photo-1757392183484-db7d416357a3?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    uploadTime: 'Hace 5h'
  },
  {
    username: 'Juan Salazar',
    profileImg:
      'https://images.unsplash.com/photo-1757452608866-0b9c2f3e2d6b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image:
      'https://plus.unsplash.com/premium_photo-1757392183411-05b939d37bf5?q=80&w=805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    uploadTime: 'Hace 2h'
  }
];

export const MainContent = () => {
  return (
    <main className='flex-1 md:mx-64 lg:mx-80 overflow-y-auto bg-black'>
      <div className='max-w-2xl mx-auto p-6 space-y-6'>
        {postsData.map((post, index) => (
          <div className='rounded-xl p-4 space-y-4' key={index}>
            <div className='flex items-center space-x-3'>
              <img
                className='w-10 h-10 rounded-full'
                src={post.profileImg}
                alt=''
              />
              <div>
                <p className='font-semibold text-white'>{post.username}</p>
                <p className='text-xs text-gray-400'>{post.uploadTime}</p>
              </div>
            </div>
            <img className='w-full rounded-lg' src={post.image} alt='' />
            <p className='text-white'>description</p>
            <div className='flex justify-between text-gray-400 text-sm'>
              <span>💬 24</span>
              <span>❤️ 80</span>
              <span>🔁 12</span>
              <span>📤</span>
            </div>
          </div>
        ))}
        <Nav />
      </div>
    </main>
  );
};
