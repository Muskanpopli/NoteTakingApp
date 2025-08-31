import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null, // {name, email}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    loadUserFromStorage(state) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        state.isLoggedIn = true;
        state.user = JSON.parse(storedUser);
      }
    },
  },
});

export const { login, logout, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
