import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTrue: (state) => {
      state.auth = true;
    },
    setAuthFalse: (state) => {
      state.auth = false;
    },
  },
});

export const { setAuthTrue, setAuthFalse } = authSlice.actions;
