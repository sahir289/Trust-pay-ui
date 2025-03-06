import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculationsState } from "./calculationsTypes";

const initialState: CalculationsState = {
  calculations: [],
  totalCount: 0,
};

const payoutSlice = createSlice({
  name: "calculations",
  initialState,
  reducers: {
    // Replace entire calculations list
    getCalculations: (state, action: PayloadAction<CalculationsState>) => {
      state.calculations = action.payload.calculations;
      state.totalCount = action.payload.totalCount;
    },
  },
});

// Export actions to use in components
export const { getCalculations } =
  payoutSlice.actions;

// Export reducer to use in store
export default payoutSlice.reducer;
