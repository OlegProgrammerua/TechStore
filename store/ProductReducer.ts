import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import products from './db.json';

interface product {
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

interface state {
  product_list: product[];
}
const product_array: product[] = products;

const initialState: state = {
  product_list: product_array,
};

const options = {
  name: 'products',
  initialState,
  reducers: {
    sortProduct: (state: any, action: PayloadAction<string>) => {
      const category = action.payload;
      console.log('done');
      const sorted_list = product_array.filter(
        (item: any) => item.category === category
      );
      state.product_list = sorted_list;
    },
    searchProduct: (state: any, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      const searched_list = product_array.filter((item: any) =>
        item.title.toLowerCase().includes(query)
      );
      state.product_list = searched_list;
    },
  },
};

export const prouductSlice = createSlice(options);

export default prouductSlice.reducer;
export const { sortProduct, searchProduct } = prouductSlice.actions;
