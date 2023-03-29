import { createSlice } from "@reduxjs/toolkit";

const AdminLoginState = {
  isAuthorized: false,
  accessToken: "",
  refreshToken: "",
};
const loginState = createSlice({
  name: "loginState",
  initialState: AdminLoginState,
  reducers: {
    tokenHandler(state, action) {
      const access = localStorage.getItem("access_token");
      state.accessToken = access;
    },
    authorizeHandler(state) {
      state.isAuthorized = true;
    },
    tokenErrorHandler(state, action) {
      console.log("error");
    },
  },
});
export const loginAction = loginState.actions;
export default loginState;
