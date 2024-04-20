import data from "src/data/categories.json";
import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "src/types/ICategory";

const initialState: ICategory[] = data.categories;

const sliceCategories = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default sliceCategories.reducer;
