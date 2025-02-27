import { RootState } from "../../store/store";
import { User } from "./userTypes";

export const selectAllUsers = (state: RootState): User[] => { const dataa = state.user
    console.log(dataa, "data")
    // return dataa
};
export const selectUserById = (state: RootState, userId: string): User | undefined =>
  state.user.users.find((user) => user.id === userId);
export const selectUsersCount = (state: RootState): number => state.user.users.length;