import { createSlice } from "@reduxjs/toolkit";

const sliceIsLoggedIn = createSlice({
  name: "isLoggedIn",
  initialState: false,
  reducers: {
    setIsLoggedIn: (state) => !state,
  },
});

export const { setIsLoggedIn } = sliceIsLoggedIn.actions;

export default sliceIsLoggedIn.reducer;
