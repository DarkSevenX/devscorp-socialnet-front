const rankingData = [
  { icon: '🏆', name: 'Guillermo Salgado', points: 390 },
  { icon: '🏆', name: 'Amílkar', points: 380 },
  { icon: '🏆', name: 'Greycl', points: 350 },
  { icon: '🏆', name: 'Samuel', points: 320 },
  { icon: '🏆', name: 'Macaco', points: 300 }
];

export const Ranking = () => {
  return (
    <div>
      <h2 className='text-lg font-bold mb-4 text-white'>Ranking</h2>
      <div className='flex flex-col space-y-2 text-sm'>
        {rankingData.map((user, index) => (
          <div
            key={index}
            className='flex items-center justify-between p-4 border-b border-neutral-900'
          >
            <span className='flex items-center space-x-2 text-white'>
              <span className='px-4 py-1 bg-blue-400 rounded-2xl'>
                {user.icon}
              </span>{' '}
              <img
                className='rounded-full w-8 h-8 ml-3 mr-2'
                src='https://plus.unsplash.com/premium_photo-1757392183484-db7d416357a3?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='image'
              />
              <div>
                <p>{user.name}</p>
                <span className='text-gray-400'>{user.points} pts</span>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
