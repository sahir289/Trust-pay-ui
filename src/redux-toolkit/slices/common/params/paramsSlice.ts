import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParamsState } from "./paramsTypes";

const initialState: ParamsState = {
  params: {
    page: "1",
    limit: "10",
  }
};

const paramsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    // Replace entire params list
    setPagination: (state, action: PayloadAction<ParamsState>) => {
      state.params = action.payload.params;
    },
  },
});

// Export actions to use in components
export const { setPagination } =
  paramsSlice.actions;

// Export reducer to use in store
export default paramsSlice.reducer;
