import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputField: "",
  searchedItems: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateInputField: (state, { payload }) => {
      state.inputField = payload;
    },
    setSearch: (state) => {
      state.searchedItems = state.inputField;
    },
    resetInput: (state) => {
      state.inputField = "";
    },
  },
});

export const { updateInputField, setSearch, resetInput } = searchSlice.actions;

export default searchSlice.reducer;
