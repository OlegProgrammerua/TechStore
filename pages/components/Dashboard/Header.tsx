import SearchIcon from './Icons/SearchIcon';
import { Moon, Cart, User } from './Icons/HeaderIcons';
import { searchProduct } from '../../../store/ProductReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';

type setOpenCart = React.Dispatch<React.SetStateAction<boolean>>;

type headerProps = {
  open: boolean;
  setOpenCart: setOpenCart;
};

const Header: React.FC<headerProps> = ({ open, setOpenCart }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const countCart = useSelector((state: any) => state.cart.cart_array.length);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    dispatch(searchProduct(value));
  };

  return (
    <header className="flex w-full justify-between items-center">
      <div className="">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-200 rounded-full w-60 p-0.5 px-10 focus:outline-none dark:bg-black"
            placeholder="Search"
            value={query}
            onChange={handleChange}
          />
          <SearchIcon />
        </div>
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li className="cursor-pointer mr-5 h-5">
            <Moon />
          </li>
          <li className="cursor-pointer mr-5 h-5">
            <Cart open={open} setOpenCart={setOpenCart} />

            {countCart > 0 && (
              <div className="absoulte bottom-0 right-0 transform -translate-y-3/4 translate-x-1/4 bg-red-500 p-0.5  max-[500px]:text-[8px] rounded-full text-[12px] text-center text-white z-50">
                {countCart}
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
