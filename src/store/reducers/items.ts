import data from "src/data/products.json";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "src/types/IProduct";

const initialState: IProduct[] = data.products;

const sliceItems = createSlice({
  name: "items",
  initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) {
          item.favorite = !item.favorite;
        }
        return item;
      });
    },
  },
});

export const { changeFavorite } = sliceItems.actions;

export default sliceItems.reducer;
