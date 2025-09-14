
export const Nav = () => {
  return (
    <nav className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black border-1 border-neutral-900
    text-white rounded-full shadow-lg px-10 py-3 flex items-center justify-between space-x-8 w-[98%] max-w-lg'>
      <button className='text-xl hover:text-blue-400'>🏠</button>
      <button className='text-xl hover:text-blue-400'>🔍</button>
      <button className='text-white rounded-full text-2xl shadow'>
        ＋
      </button>
      <button className='relative text-xl hover:text-blue-400'>
        🔔
        <span className='absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full px-1'>
          3
        </span>
      </button>
      <button className='text-xl hover:text-blue-400'>👤</button>
    </nav>
  );
};
