import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../StateSlices/authSlice";
export const store = configureStore({
  reducer: {
    AuthValues: authSliceReducer,
  },
});
