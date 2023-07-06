import ProductList from './Products';
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const barStatus = useSelector((state: any) => state.bar.setBar);

  return (
    <nav className={`flex w-1 `}>
      <ul className="flex flex-col max-[900px]:text-[14px]">
        <li
          className={` transition-all duration-100 ease-in-out mb-3 flex items-center hover:bg-gray-500 rounded-full p-0.5  ${
            barStatus ? 'w-[unset]' : 'w-8 text-center '
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 font-bold`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span
            className={`ml-5 max-[600px]:ml-2 transition-all duration-500 ease-in-out ${
              barStatus
                ? 'visible opacity-1 inline'
                : 'invisible opacity-0 hidden'
            }`}
          >
            <Link href="/components/Dashboard">Home</Link>
          </span>
        </li>
        <li
          onClick={handleClick}
          className={`mb-3 flex flex-col cursor-pointer hover:bg-gray-500 p-0.5 rounded-full ${
            barStatus ? 'w-[unset]' : 'w-8 text-center '
          }`}
        >
          <div className="flex items-center dark:text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${
                open ? 'text-yellow-500' : 'text-black dark:text-gray-400'
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <a
              href="#"
              className={`ml-5 max-[600px]:ml-2 transition-all duration-500 ease-in-out  ${
                open ? 'text-yellow-500' : 'text-black dark:text-gray-400'
              } ${
                barStatus
                  ? 'visible opacity-1 inline'
                  : 'invisible opacity-0 hidden'
              }`}
            >
              Discover
            </a>
          </div>
        </li>
        {open && <ProductList />}
        <li
          className={`mb-3 flex items-center hover:bg-gray-500 rounded-full p-0.5 ${
            barStatus ? 'w-[unset]' : 'w-8 text-center '
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>

          <span
            className={`ml-5 max-[600px]:ml-2 transition-all duration-500 ease-in-out ${
              barStatus
                ? 'visible opacity-1 inline'
                : 'invisible opacity-0 hidden'
            }`}
          >
            <Link href="/Contacts">Contacts</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
}
