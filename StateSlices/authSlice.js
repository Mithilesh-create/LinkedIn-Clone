import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};
export const authSlice = createSlice({
  name: "AuthValues",
  initialState,
  reducers: {
  },
});
// export const authSliceState = (state) => state.AuthValues.auth;

// export const { actionLogin, actionLogout } = authSlice.actions;
export default authSlice.reducer;
