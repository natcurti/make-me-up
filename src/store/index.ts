import { configureStore } from "@reduxjs/toolkit";
import sliceItems from "src/store/reducers/items";
import sliceCategories from "src/store/reducers/categories";
import sliceCart from "src/store/reducers/cart";
import sliceOffcanvasCart from "src/store/reducers/offcanvasCart";

const store = configureStore({
  reducer: {
    items: sliceItems,
    categories: sliceCategories,
    cart: sliceCart,
    offcanvasCart: sliceOffcanvasCart,
  },
});

export default store;

export type IRootState = ReturnType<typeof store.getState>;
