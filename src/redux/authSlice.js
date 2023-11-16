import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    authToken: null,
    id: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.authToken = action.payload.token;
      state.id = action.payload.id;
    },
    setLogout: (state) => {
      state.authToken = null;
    },
  },
});
export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
