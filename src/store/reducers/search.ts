import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  itemsToSearch: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateInputField: (state, { payload }) => {
      state.inputValue = payload;
    },
    setSearch: (state) => {
      state.itemsToSearch = state.inputValue;
    },
    resetInput: (state) => {
      state.inputValue = "";
    },
  },
});

export const { updateInputField, setSearch, resetInput } = searchSlice.actions;

export default searchSlice.reducer;
