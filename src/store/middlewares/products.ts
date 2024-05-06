import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addProducts, getItems } from "../reducers/items";
import serviceProducts from "src/services/serviceProducts";

export const productsListener = createListenerMiddleware();

productsListener.startListening({
  actionCreator: getItems,
  effect: async (_action, { dispatch, fork, unsubscribe }) => {
    const task = fork(async (api) => {
      await api.delay(2000);

      return await serviceProducts.getProducts();
    });

    const response = await task.result;
    if (response.status === "ok") {
      dispatch(addProducts(response.value.products));
      unsubscribe();
    }
  },
});
