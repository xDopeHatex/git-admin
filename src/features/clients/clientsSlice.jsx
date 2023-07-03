import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    header: "Arca",
    softwareVersion: "SK Pay - Pro",
    quantity: "50",
    model: "Model #2",
    expiryDate: "2 year",
  },
  {
    id: 2,
    header: "UZCard",
    softwareVersion: "SK Pay - Vend",
    quantity: "40",
    model: "Model #3",
    expiryDate: "3 year",
  },
];

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    createClient: (state, payload) => {
      state.push(payload.payload);
    },
    editClient: (state, payload) => {
      const index = state.findIndex((item) => item.id === payload.payload.id);

      state[index] = payload.payload;
    },
    deleteClient: (state, payload) => {
      return state.filter((item) => {
        return item.id !== payload.payload;
      });
    },
  },
});

export const { createClient, editClient, deleteClient } = clientsSlice.actions;
