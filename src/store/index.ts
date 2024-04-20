import { configureStore } from "@reduxjs/toolkit";
import sliceItems from "src/store/reducers/items";
import sliceCategories from "src/store/reducers/categories";

const store = configureStore({
  reducer: {
    items: sliceItems,
    categories: sliceCategories,
  },
});

export default store;

export type IRootState = ReturnType<typeof store.getState>;
