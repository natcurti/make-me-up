import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "src/types/IUser";

const initialState: IUser = JSON.parse(
  localStorage.getItem("user-make-me-up") || "{}"
);

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (_state, { payload }) => {
      return payload;
    },
  },
});

export const { setUserInfo } = sliceUser.actions;

export default sliceUser.reducer;
