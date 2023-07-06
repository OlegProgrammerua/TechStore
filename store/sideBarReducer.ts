import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface state {
  setBar: boolean;
}

const initialState = {
  setBar: true,
};

const options = {
  name: 'openBar',
  initialState,
  reducers: {
    openCloseBar(state: any) {
      state.setBar = !state.setBar;
    },
  },
};

export const barSlice = createSlice(options);

export default barSlice.reducer;
export const { openCloseBar } = barSlice.actions;
