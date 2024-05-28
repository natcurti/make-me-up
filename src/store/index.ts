import { configureStore } from "@reduxjs/toolkit";
import sliceItems from "src/store/reducers/items";
import sliceCategories from "src/store/reducers/categories";
import sliceCart from "src/store/reducers/cart";
import searchSlice from "src/store/reducers/search";
import sliceOffcanvasCart from "src/store/reducers/offcanvasCart";
import sliceUser from "src/store/reducers/user";
import { categoriesListener } from "./middlewares/categories";
import { productsListener } from "./middlewares/products";

const store = configureStore({
  reducer: {
    items: sliceItems,
    categories: sliceCategories,
    cart: sliceCart,
    offcanvasCart: sliceOffcanvasCart,
    search: searchSlice,
    user: sliceUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      categoriesListener.middleware,
      productsListener.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
