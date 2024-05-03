import { createAction, createSlice } from "@reduxjs/toolkit";
import { ICategories } from "src/types/ICategories";

export const getCategories = createAction("categories/getCategories");

const initialState: ICategories = {
  face: [],
  eyes: [],
  mouth: [],
};

const sliceCategories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      state.face.push(...payload.face);
      state.eyes.push(...payload.eyes);
      state.mouth.push(...payload.mouth);
    },
  },
});

export const { addCategories } = sliceCategories.actions;

export default sliceCategories.reducer;
