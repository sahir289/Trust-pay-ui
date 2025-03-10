/* eslint-disable no-undef */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

interface DarkModeState {
  value: boolean;
}

const initialState: DarkModeState = {
  value: localStorage.getItem("darkMode") === "true",
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem("darkMode", action.payload.toString());
      state.value = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => {
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");
  }

  return state.darkMode.value;
};

export default darkModeSlice.reducer;
