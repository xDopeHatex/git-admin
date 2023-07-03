import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    header: "PAX",
    models: ["Model #2", "Model #1"],
  },
  {
    id: 2,
    header: "SUNMI",
    models: ["Model #3", "Model #4"],
  },
];

export const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    createVendor: (state, payload) => {
      state.push(payload.payload);
    },
    editVendor: (state, payload) => {
      const index = state.findIndex((item) => item.id === payload.payload.id);

      state[index] = payload.payload;
    },
    deleteVendor: (state, payload) => {
      return state.filter((item) => {
        return item.id !== payload.payload;
      });
    },
  },
});

export const { createVendor, editVendor, deleteVendor } = vendorsSlice.actions;
