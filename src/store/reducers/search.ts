import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    changeSearch: (_state, { payload }) => {
      return payload;
    },
    resetSearch: () => "",
  },
});

export const { changeSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
