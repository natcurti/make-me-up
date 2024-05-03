import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addCategories, getCategories } from "../reducers/categories";
import serviceCategories from "src/services/serviceCategories";

export const categoriesListener = createListenerMiddleware();

categoriesListener.startListening({
  actionCreator: getCategories,
  effect: async (_action, { dispatch, fork, unsubscribe }) => {
    const task = fork(async () => {
      return await serviceCategories.getCategories();
    });

    const response = await task.result;
    if (response.status === "ok") {
      dispatch(addCategories(response.value.categories));
      unsubscribe();
    }
  },
});
