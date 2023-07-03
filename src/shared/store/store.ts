import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "../../features/requireAuth/authSlice";
import { clientsSlice } from "../../features/clients/clientsSlice";
import { vendorsSlice } from "../../features/vendors/vendorsSlice";

const reducer = combineReducers({
  auth: authSlice.reducer,
  clients: clientsSlice.reducer,
  vendors: vendorsSlice.reducer,
});
export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
