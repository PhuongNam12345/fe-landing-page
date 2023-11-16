import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import useReducer from "./userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    info: useReducer,
  },
});

export default store;
