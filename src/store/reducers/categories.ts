import data from "src/data/categories.json";
import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "src/types/ICategories";

const initialState: ICategories = data.categories;

const sliceCategories = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default sliceCategories.reducer;
