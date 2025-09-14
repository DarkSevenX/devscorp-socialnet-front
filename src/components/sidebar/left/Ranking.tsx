const rankingData = [
  { icon: '🏆', name: 'Guillermo', points: 390 },
  { icon: '🥈', name: 'Amílkar', points: 380 },
  { icon: '🥉', name: 'Greycl', points: 350 },
  { icon: '👤', name: 'Samuel', points: 320 },
  { icon: '🐒', name: 'Macaco', points: 300 }
];

export const Ranking = () => {
  return (
    <div>
      <h2 className='text-lg font-bold mb-4 text-white'>Ranking</h2>
      <div className='flex flex-col space-y-2 text-sm'>
        {rankingData.map((user, index) => (
          <div
            key={index}
            className='flex items-center justify-between p-2 border-b border-neutral-900'
          >
            <span className='flex items-center space-x-2 text-white'>
              <span>{user.icon}</span> {user.name}
            </span>
            <span className='text-gray-400'>{user.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};
