import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, changeQuantity } from '../../../../store/cartReducer';

interface Props {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  quantity: number;
}

const CartItem: React.FC<Props> = (item) => {
  const dispatch = useDispatch();

  const handleIncremnt = () => {
    dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }));

    console.log(item);
  };

  const handleDecrement = () => {
    if (item.quantity <= 1) {
      dispatch(deleteItem(item.id));
    } else {
      dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }));

      console.log(item);
    }
  };

  return (
    <div className="w-full dark:bg-slate-950 h-28 flex drop-shadow-2xl justify-between bg-white py-2 pr-8 rounded-3xl overflow-hidden mb-2 ">
      <div className="1/2 flex justify-between">
        <div className="text-center scale-150">
          <Image
            src={`/Products/${item.img}.jpg`}
            width="100"
            height="100"
            alt="cart_image"
          />
        </div>
        <div className="ml-10 flex flex-col font-bold">
          <h4 className="capitalize">{item.title}</h4>
          <span className="text-yellow-500">${item.price}</span>
          <span>{item.author}</span>
        </div>
      </div>
      <div className="flex w-1/8 flex-col items-center pt-2 dark:text-white">
        <button
          onClick={handleIncremnt}
          className="w-[20px]  text-xl bg-gray-100 text-sm rounded-t-xl hover:bg-gray-500 font-bold dark:bg-slate-600"
        >
          +
        </button>
        <span className="w-[20px] bg-gray-100 text-xl drop-shadow-2xl shadow-2xl text-center rounded-xs cursor-default dark:bg-slate-600">
          {item.quantity}
        </span>
        <button
          onClick={handleDecrement}
          className="w-[20px] text-xl bg-gray-100 text-sm rounded-b-xl hover:bg-gray-500 font-bold dark:bg-slate-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
