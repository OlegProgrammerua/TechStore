import { useSelector } from 'react-redux';

const Footer: React.FC = () => {
  const statusBar = useSelector((state: any) => state.bar.setBar);

  return (
    <footer className="absolute z-1 transition-all duration-300 max-[500px]:bottom-5 bottom-0 pb-5 max-[768px]:pb-0">
      <div
        className={`flex items-center  px-0.5 pb-2 hover:text-white  ${
          statusBar
            ? 'w-1/2 p-[2px] hover:bg-gray-400 rounded-xl mb-4 '
            : 'w-8 text-center hover:bg-gray-400 rounded-xl pb-0 '
        }    `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" text-gray-500 w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <span
          className={`ml-5 max-[1000px]:ml-2 cursor-pointer   ${
            statusBar
              ? 'visible opacity-1 inline'
              : 'invisible opacity-0 hidden'
          }`}
        >
          Help
        </span>
      </div>
      <div
        className={`w-2/3 transition-all ease-in-out duration-500 ${
          statusBar ? 'border-gray-475 border-t-2' : 'border-none'
        } dark:border-gray-500  ${
          statusBar ? 'visible opacity-1' : 'invisible opacity-0'
        }`}
      >
        <ul className="w-full flex flex-row flex-wrap justify-between transition-all duration-500 max-[900px]:text-[14px] max-[500px]:text-[12px]  max-[500px]:flex-col">
          <li className="cursor-pointer hover:underline">Terms</li>
          <li className="cursor-pointer hover:underline">Privacy</li>
          <li className="cursor-pointer hover:underline">Help</li>
          <li className="mt-2">Copyright 2022 by Hulevych</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
