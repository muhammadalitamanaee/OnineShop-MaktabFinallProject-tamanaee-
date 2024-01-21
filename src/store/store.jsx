import { configureStore, createSlice } from "@reduxjs/toolkit";
import loginState from "./token-slice";
import cartSlice from "./cart-store";
const store = configureStore({
  reducer: { login: loginState.reducer, cart: cartSlice.reducer },
});
export default store;
