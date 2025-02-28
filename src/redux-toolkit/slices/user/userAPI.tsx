import api from "../../services/api"; // Assuming this is your axios instance
import { ApiResponse, User } from "./userTypes";

export const getAllUsers = async (queryString: string): Promise<User[]> => {
  try {
    const response = await api.get<ApiResponse<User[]>> (`/users?${queryString}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const createUser = async (userData: {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  contact_no?: string;
  is_enabled?: boolean;
}): Promise<User> => {
  try {
    const response = await api.post<User>("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

export const updateUser = async (
  id: string,
  userData: Partial<User>
): Promise<User> => {
  try {
    const response = await api.put<User>(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
};