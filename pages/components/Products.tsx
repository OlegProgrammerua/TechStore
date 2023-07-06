import { useDispatch, useSelector } from 'react-redux';
import { sortProductMenu } from '../../store/listReducer';
import { sortProduct } from '../../store/ProductReducer';

interface Item {
  id: number;
  title: string;
  current: boolean;
}

export default function ProducList() {
  const dispatch = useDispatch();

  const handleClick = (index: any, category: string) => {
    dispatch(sortProduct(category));
    dispatch(sortProductMenu(index));
  };

  const product_list: Item[] = useSelector(
    (state: any) => state.list.product_array || []
  );
  return (
    <div className="flex justify-end">
      <ul className="my-5">
        {product_list.map((item) => (
          <li
            onClick={() => handleClick(item.id, item.title)}
            className={`border-l-2  py-5 pl-10 cursor-pointer ${
              item.current
                ? 'border-yellow-500'
                : 'border-grey-950 dark:border-gray-500'
            }`}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
