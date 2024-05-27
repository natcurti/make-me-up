import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  name: "",
  lastname: "",
  email: "",
  cpf: "",
  cellphone: "",
  password: "",
};

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
