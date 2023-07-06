import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import products from './db.json';

interface Item {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  quantity: number;
}

interface state {
  cart_array: Item[];
  isInArray: boolean;
  total: number;
}

interface payloadType {
  id: number;
  quantity: number;
}

const initialState: state = {
  cart_array: [],
  isInArray: false,
  total: 0,
};

const options = {
  name: 'Cart',
  initialState,
  reducers: {
    addToCart(state: any, action: PayloadAction<number>) {
      const id = action.payload;
      const condition = state.cart_array.some((item: any) => item.id === id);
      if (!condition) {
        const product = products.find((element: any) => element.id === id);

        if (product) {
          const newObj: Item = {
            id: product.id,
            title: product.title,
            author: product.author,
            price: product.price,
            img: product.img,
            quantity: 1,
          };
          state.cart_array.push(newObj);
          state.isInArray = false;
          localStorage.setItem('cart_array', JSON.stringify(state.cart_array));
          console.log(condition);
        }
      } else {
        state.isInArray = true;
      }
    },
    deleteItem(state: any, action: PayloadAction<number>) {
      const id = action.payload;
      const newArray = state.cart_array.filter(
        (element: Item) => element.id !== id
      );
      state.cart_array = newArray;
      localStorage.setItem('cart_array', JSON.stringify(state.cart_array));
    },
    changeQuantity(state: any, action: PayloadAction<payloadType>) {
      const { id, quantity } = action.payload;
      const itemToUpdate: Item = state.cart_array.find(
        (element: Item) => element.id === id
      );
      itemToUpdate['quantity'] = quantity;
    },
  },
};

export const cartSlice = createSlice(options);
export default cartSlice.reducer;
export const { addToCart, deleteItem, changeQuantity } = cartSlice.actions;
