import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "src/types/ICart";

const initialState: ICart[] = [];

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      const isProductOnCart = state.some((item) => item.id === payload);
      if (!isProductOnCart) {
        state.push({
          id: payload,
          quantity: 1,
        });
      } else {
        const productIndexOnCart = state.findIndex(
          (item) => item.id === payload
        );
        state[productIndexOnCart].quantity += 1;
      }
    },
    updateQuantity: (state, { payload }) => {
      const index = state.findIndex((product) => product.id === payload.id);
      state[index].quantity += payload.quantity;
    },
    deleteItem: (state, { payload }) => {
      const index = state.findIndex((product) => product.id === payload);
      state.splice(index, 1);
    },
    resetCart: () => initialState,
  },
});

export const { addProductToCart, updateQuantity, deleteItem, resetCart } =
  sliceCart.actions;

export default sliceCart.reducer;
