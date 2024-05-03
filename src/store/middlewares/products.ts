import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addProducts, getItems } from "../reducers/items";
import serviceProducts from "src/services/serviceProducts";

export const productsListener = createListenerMiddleware();

productsListener.startListening({
  actionCreator: getItems,
  effect: async (_action, { dispatch, fork }) => {
    const task = fork(async () => {
      return await serviceProducts.getProducts();
    });

    const response = await task.result;
    if (response.status === "ok") {
      dispatch(addProducts(response.value.products));
    }
  },
});
