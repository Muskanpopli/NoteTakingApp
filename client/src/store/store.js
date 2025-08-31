import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import notesReducer from "./notesSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
    settings: settingsReducer,
  },
});
