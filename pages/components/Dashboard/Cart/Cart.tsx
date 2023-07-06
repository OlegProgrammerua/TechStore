import { Close } from '../Icons/HeaderIcons';
import CartItem from './CartItem';
import Total from './Total';
import { AnyIfEmpty, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addToCart } from '../../../../store/cartReducer';

type setOpenCart = React.Dispatch<React.SetStateAction<boolean>>;

interface Item {
  id: number;
  title: string;
  author: string;
  img: string;
  price: number;
  quantity: number;
}

type CartProps = {
  open: boolean;
  setOpenCart: setOpenCart;
};

const CartComponent: React.FC<CartProps> = ({ open, setOpenCart }) => {
  const dispatch = useDispatch();

  const items = useSelector((state: any) => state.cart.cart_array);
  useEffect(() => {
    const localCart = localStorage.getItem('cart_array');
    if (localCart) {
      const parsedLocalCart: Item[] = JSON.parse(localCart);
      parsedLocalCart.forEach((item: Item) => {
        dispatch(addToCart(item.id));
      });
    }
  }, []);
  return (
    <div
      style={{ right: open ? '0' : '-120%' }}
      className={`dark:bg-black dark:text-gray-500 fixed w-3/12 z-50 h-1/4 min-h-screen w-full h-1/4 bg-white max-w-[500px] max-[500px]:h-full top-0 transition-all duration-500 ease-in-out rounded-l-3xl drop-shadow-2xl p-5 overflow-y-scroll scrollbar-none`}
    >
      <div className="flex w-full justify-between">
        <h2 className="font-bold text-3xl max-[768px]:text-xl">Cart</h2>
        <Close open={open} setOpenCart={setOpenCart} />
      </div>
      <div className="w-full flex-col mt-5 ">
        {items?.map((item: Item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <Total />
    </div>
  );
};

export default CartComponent;
