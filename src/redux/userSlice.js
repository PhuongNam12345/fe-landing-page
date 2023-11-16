import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: {},
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
