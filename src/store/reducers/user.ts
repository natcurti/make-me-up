import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "src/types/IUser";

const initialState: IUser | null = JSON.parse(
  localStorage.getItem("user-info") || "{}"
);

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { setUserInfo } = sliceUser.actions;

export default sliceUser.reducer;
