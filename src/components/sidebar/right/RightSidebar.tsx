export const RightSidebar = () => {
   return (
    // Discusiones activas
    <aside className='hidden lg:flex lg:w-85 flex-col bg-black border-l border-gray-800 fixed right-0 top-0 h-screen p-5 space-y-6'>
      <h2 className='text-lg font-bold text-white'>Discusiones activas</h2>
      <div className='flex flex-col space-y-3 text-sm'>
        <div className='flex justify-between items-center p-3 rounded-lg text-white'>
          <div>
            <p className='font-semibold text-xl'>Meme Monday</p>
            <p className='text-gray-400'>36 Comentarios</p>
          </div>
          <span className='px-2 py-1 rounded bg-purple-400 text-black'>🔗</span>
        </div>
        <div className='flex justify-between items-center  p-3 rounded-lg text-white'>
          <div>
            <p className='font-semibold text-xl'>Why the Latest JS Frameworks...</p>
            <p className='text-gray-400'>89 Comentarios</p>
          </div>
          <span className='px-2 py-1 rounded bg-blue-400 text-black'>⌘</span>
        </div>
        <div className='flex justify-between items-center p-3 rounded-lg text-white'>
          <div>
            <p className='font-semibold text-xl'>Hope Was Distant...</p>
            <p className='text-gray-400'>20 Comentarios</p>
          </div>
          <span className='px-2 py-1 rounded bg-amber-600 text-black'>📜</span>
        </div>
        <div className='flex justify-between items-center p-3 rounded-lg text-white'>
          <div>
            <p className='font-semibold text-xl'>Why Most AI Teams Are Stuck</p>
            <p className='text-gray-400'>39 Comentarios</p>
          </div>
          <span className='px-2 py-1 rounded bg-pink-500 text-black'>$</span>
        </div>
        <div className='flex justify-between items-center p-3 rounded-lg text-white'>
          <div>
            <p className='font-semibold text-xl'>De la mentira y la verdad...</p>
            <p className='text-gray-400'>500 Comentarios</p>
          </div>
          <span className='px-2 py-1 rounded bg-yellow-400 text-black'>📖</span>
        </div>
      </div>
    </aside>
  );
};
