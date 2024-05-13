import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const slicePasswordShow = createSlice({
  name: "passwordShow",
  initialState,
  reducers: {
    setIsShow: (state) => {
      return !state;
    },
  },
});

export const { setIsShow } = slicePasswordShow.actions;

export default slicePasswordShow.reducer;
