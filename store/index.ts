import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listReducer';
import productReducer from './ProductReducer';
import cartReducer from './cartReducer';
import barReducer from './sideBarReducer';

const store = configureStore({
  reducer: {
    list: listReducer,
    products: productReducer,
    cart: cartReducer,
    bar: barReducer,
  },
});

export default store;
