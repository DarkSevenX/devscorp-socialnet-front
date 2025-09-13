export const Ranking = () => {
  return (
    <div>
      <h2 className='text-lg font-bold mb-4 text-white'>Ranking</h2>
      <div className='flex flex-col space-y-2 text-sm'>
        <div className='flex items-center justify-between p-2 border-b-1 border-gray-900'>
          <span className='flex items-center space-x-2 text-white'>
            <span>🏆</span> Guillermo
          </span>
          <span className='text-gray-400'>390 pts</span>
        </div>
        <div className='flex items-center justify-between p-2 border-b-1 border-gray-900'>
          <span className='flex items-center space-x-2 text-white'>
            <span>🥈</span> Amílkar
          </span>
          <span className='text-gray-400'>380 pts</span>
        </div>
        <div className='flex items-center justify-between p-2 border-b-1 border-gray-900'>
          <span className='flex items-center space-x-2 text-white'>
            <span>🥉</span> Greycl
          </span>
          <span className='text-gray-400'>350 pts</span>
        </div>
        <div className='flex items-center justify-between border-b-1 border-gray-900'>
          <span className='flex items-center space-x-2 text-white'>
            <span>👤</span> Samuel
          </span>
          <span className='text-gray-400'>320 pts</span>
        </div>
        <div className='flex items-center justify-between p-2 border-b-1 border-gray-900'>
          <span className='flex items-center space-x-2 text-white'>
            <span>🐒</span> Macaco
          </span>
          <span className='text-gray-400'>300 pts</span>
        </div>
      </div>
    </div>
  );
};
