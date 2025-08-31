import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  fontSize: localStorage.getItem("fontSize") || "16px",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
      localStorage.setItem("fontSize", action.payload);
    },
  },
});

export const { setTheme, setFontSize } = settingsSlice.actions;
export default settingsSlice.reducer;
