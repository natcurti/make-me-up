import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoggedInEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});

export const { setUserLoggedInEmail } = sliceUser.actions;

export default sliceUser.reducer;
