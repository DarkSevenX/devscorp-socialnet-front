const discussionsData = [
  {
    title: 'Meme Monday',
    comments: 36,
    icon: '🔗',
    bgColor: 'bg-purple-400',
  },
  {
    title: 'Why the Latest JS Frameworks...',
    comments: 89,
    icon: '⌘',
    bgColor: 'bg-blue-400',
  },
  {
    title: 'Hope Was Distant...',
    comments: 20,
    icon: '📜',
    bgColor: 'bg-amber-600',
  },
  {
    title: 'Why Most AI Teams Are Stuck',
    comments: 39,
    icon: '$',
    bgColor: 'bg-pink-500',
  },
  {
    title: 'De la mentira y la verdad...',
    comments: 500,
    icon: '📖',
    bgColor: 'bg-yellow-400',
  },
];

export const RightSidebar = () => {
  return (
    <aside className="hidden overflow-y-scroll scrollbar-hide lg:flex lg:w-85 flex-col bg-black border-l border-neutral-900 fixed right-0 top-0 h-screen p-5 space-y-6">
      <h2 className="text-lg font-bold text-white">Discusiones activas</h2>
      <div className="flex flex-col space-y-3 text-sm">
        {discussionsData.map((discussion, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 rounded-lg text-white"
          >
            <div>
              <p className="font-semibold text-xl">{discussion.title}</p>
              <p className="text-gray-400">{discussion.comments} Comentarios</p>
            </div>
            <span
              className={`w-10 flex items-center justify-center py-1 rounded text-black ${discussion.bgColor} h-full`}
            >
              {discussion.icon}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

