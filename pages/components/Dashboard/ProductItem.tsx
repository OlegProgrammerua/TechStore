import Image from 'next/image';
import { Star, AddCart } from './Icons/HeaderIcons';
import Link from 'next/link';
import { addToCart } from '../../../store/cartReducer';
import { useDispatch } from 'react-redux';

interface Props {
  id: number;
  title: string;
  category: string;
  author: string;
  img: string;
  price: number;
  sales: number;
  feedback: number;
  feedback_count: number;
}

const ProductItem = (product: Props) => {
  const dispatch = useDispatch();

  const addItemToCart = (id: number) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="relative w-1/4 max-[1000px]:w-1/3 max-[800px]:w-[45%] max-[550px]:w-3/4 max-[400px]:w-full  max-[800px]:mr-1  cursor-pointer flex-flex-col flex-start rounded-full mt-5  last:mr-0 mr-10  transition ease-in-out duration-700 transform hover:scale-110 hover:z-10 ">
      <div className="text-center">
        <Image src={`/Products/${product.img}.jpg`} width="356" height="200" />
      </div>
      <div className="flex flex-col w-full justify-center max-[1000px]:justify-start my-0 mx-auto text-base max-[1000px]:text-[16px] rounded-xl relative bg-gray-200 dark:bg-black pb-2 dark:text-gray-500">
        <AddCart addItemToCart={addItemToCart} id={product.id} />
        <div className="px-14 py-2 max-[1000px]:pr-8">
          <Link href={`/components/Dashboard/${product.id}`}>
            <div className="font-bold capitalize text-base max-[1000px]:text-[16px]  dark:text-white">
              {product.title}
            </div>
          </Link>
          <div className="mb-6 max-[1000px]:mb-3">{product.author}</div>
          <div className="text-yellow-500 font-bold">{product.price}</div>
          <div className="text-base flex">
            <div className="mr-5 max-[900px]:mr-2">{product.sales} sales</div>

            <div className="flex">
              <Star />
              <span>{product.feedback}</span>
              <div>({product.feedback_count})</div>
            </div>
          </div>
        </div>
        <img
          src="/User.png"
          width="25"
          height="25"
          className="absolute top-0 mt-4 bg-gray-400 rounded-full ml-5 left-0"
        />
      </div>
    </div>
  );
};

export default ProductItem;
