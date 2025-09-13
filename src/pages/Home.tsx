import {MainContent} from "../components/MainContent";
import {LeftSidebar} from "../components/sidebar/left/LeftSidebar";
import {RightSidebar} from "../components/sidebar/right/RightSidebar";

export const Home = () => {
  return (
    <div className='flex h-screen'>
      <LeftSidebar/>
      <MainContent/>
      <RightSidebar/>
    </div>
  );
};
