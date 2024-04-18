import { configureStore } from "@reduxjs/toolkit";
import sliceItems from "src/store/reducers/items";

const store = configureStore({
  reducer: {
    items: sliceItems,
  },
});

export default store;

export type IRootState = ReturnType<typeof store.getState>;
