import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import CartComponent from './Cart/Cart';

type setOpenCart = React.Dispatch<React.SetStateAction<boolean>>;

type Props = {
  open: boolean;
  setOpenCart: setOpenCart;
};

const ProductBoard: React.FC<Props> = ({ open, setOpenCart }) => {
  const product_list: any = useSelector(
    (state: any) => state.products.product_list || []
  );

  return (
    <main className=" w-full flex py-5 flex-col ">
      <CartComponent open={open} setOpenCart={setOpenCart} />
      <h4 className="font-bold text-gray-500 capitalize text-xl max-[800px]:text-base max-[700px]:ml-4 max-[400px]:text-sm">
        Best selling Electornic Products - Weekly Update
      </h4>
      <div className="flex flex-row w-full flex-wrap pt-5  justify-center max-[300px]:ml-8  max-[768px]:pl-5">
        {/* <ProductItem /> */}
        {product_list.map((product: any) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
};

export default ProductBoard;
