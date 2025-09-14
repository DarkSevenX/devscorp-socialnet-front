import { Descubre } from './Descubre';
import { Ranking } from './Ranking';

export const LeftSidebar = () => {
  return (
    <aside className='hidden md:flex md:w-85 flex-col bg-black border-r 
    border-neutral-900 fixed left-0 top-0 h-screen p-10 space-y-8
    overflow-y-scroll scrollbar-hide
    '>
      <Descubre />
      <Ranking />
    </aside>
  );
};
