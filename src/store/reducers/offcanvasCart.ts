import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const sliceOffcanvasCart = createSlice({
  name: "offcanvasCart",
  initialState,
  reducers: {
    openOrClose: (state) => {
      return !state;
    },
  },
});

export const { openOrClose } = sliceOffcanvasCart.actions;

export default sliceOffcanvasCart.reducer;
