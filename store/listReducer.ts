import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface item {
  id: number;
  title: string;
  current: boolean;
}

interface state {
  product_array: item[];
}

const initialState: state = {
  product_array: [
    {
      id: 0,
      title: 'Electronics',
      current: false,
    },
    {
      id: 1,
      title: 'Clothes',
      current: false,
    },
    {
      id: 2,
      title: 'Bags',
      current: false,
    },
    {
      id: 3,
      title: 'Food',
      current: false,
    },
  ],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    sortProductMenu(state: any, action: PayloadAction<number>) {
      const id = action.payload;
      state.product_array.map((item: item) => {
        if (item.id === id) {
          item.current = true;
        } else {
          item.current = false;
        }
      });
    },
  },
});

export const { sortProductMenu } = listSlice.actions;
export default listSlice.reducer;
