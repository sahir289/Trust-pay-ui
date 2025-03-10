import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./userTypes";

const initialState: UserState = {
  token: null,
  isAuthenticated: false,
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    onload: (state) => {
      state.loading = true;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      state.loading = false;
      state.error = null;

    },
    updateUser: (state, action: PayloadAction<User>) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
      state.loading = false;
      state.error = null;
    },
  },
});

export const { getUsers, addUser, updateUser, onload} = userSlice.actions;
export default userSlice.reducer;
