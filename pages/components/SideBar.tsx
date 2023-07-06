import Image from 'next/image';
import Navbar from './NavBar';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseBar } from '../../store/sideBarReducer';

export default function SideBar() {
  const dispatch = useDispatch();
  const statusBar = useSelector((state: any) => state.bar.setBar);

  const handleBar = () => {
    dispatch(openCloseBar());
    console.log('Hello');
  };

  return (
    <div
      className={`${
        statusBar ? 'w-1/5' : 'w-1/12'
      } p-5 left-0 pl-0 min-h-40px min-h-screen pl-6 flex max-[600px]:pl-3 relative z-50  dark:text-gray-400 `}
    >
      <div
        className={`${
          statusBar ? 'w-1/5' : 'w-1/12'
        } transition-all duration-500 ease-in-out pl-0  min-h-40px min-h-screen max-[400px]:h-full  fixed mr-3`}
      >
        <div className={`mb-10`}>
          <Image
            src={'/logo.svg'}
            width="40"
            height="40"
            alt="logo"
            onClick={handleBar}
            className="max-[600px]:w-full"
          />
        </div>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}
