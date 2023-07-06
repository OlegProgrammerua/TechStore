import { useSelector } from 'react-redux';

interface Item {
  id: number;
  title: string;
  author: string;
  img: string;
  price: number;
  quantity: number;
}

export default function TotalCouter(): number {
  const items = useSelector((state: any) => state.cart.cart_array);
  return items.reduce((accumulator: number, element: Item) => {
    return accumulator + element.price * element.quantity;
  }, 0 as number);
}
