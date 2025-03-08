import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculationsState } from "./calculationsTypes";

const initialState: CalculationsState = {
  calculations: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const calculationsSlice = createSlice({
  name: "calculations",
  initialState,
  reducers: {
    getCalculations: (state, action: PayloadAction<CalculationsState>) => {
      state.calculations = action.payload.calculations;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
  },
});

export const { getCalculations, onload } = calculationsSlice.actions;
export default calculationsSlice.reducer;
