import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  username: "", 
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userName = "";
    },
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});


export const { login, logout, updateName  } = userSlice.actions;
export const getUsername = (state) => state.user.username;

export default userSlice.reducer;


