// TODO: fix colorscheme
const subjectsData = [
  {
    name: 'Matemáticas',
    icon: '📦',
    color: 'bg-green-500'
  },
  {
    name: 'Castellano',
    icon: '📖',
    color: 'bg-yellow-400'
  },
  {
    name: 'Informática',
    icon: '⌘',
    color: 'bg-blue-400'
  },
  {
    name: 'Filosofía',
    icon: '🔗',
    color: 'bg-purple-400'
  },
  {
    name: 'Economía',
    icon: '$',
    color: 'bg-pink-500'
  },
  {
    name: 'Política',
    icon: '🔑',
    color: 'bg-orange-400'
  },
  {
    name: 'Humanidades',
    icon: '📜',
    color: 'bg-amber-600'
  }
];

export const Descubre = () => {
  return (
    <div className='border-b-1 border-neutral-900 pb-6'>
      <h2 className='text-white text-lg'>Descubre</h2>
      <div className='flex flex-col space-y-3 pt-7'>
        {subjectsData.map((subject, index) => (
          <button
            className={`flex justify-between w-full items-center px-15 font-extrabold
              py-2 rounded-full ${subject.color} text-black font-semibold`}
            key={index}
          >
            {subject.name} <span>{subject.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
