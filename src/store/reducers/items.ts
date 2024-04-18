import data from "src/data/products.json";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "src/types/IProduct";

const initialState: IProduct[] = data.products;

const sliceItems = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export default sliceItems.reducer;
