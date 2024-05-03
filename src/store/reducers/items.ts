import { createAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "src/types/IProduct";

export const getItems = createAction("items/getItems");

const initialState: IProduct[] = [];

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
    addProducts: (state, { payload }) => {
      state.push(...payload);
    },
  },
});

export const { changeFavorite, addProducts } = sliceItems.actions;

export default sliceItems.reducer;
