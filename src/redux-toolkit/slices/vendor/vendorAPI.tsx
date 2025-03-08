/* eslint-disable no-unused-vars */
import api from '../../services/api';
import { ApiVendorResponse, Vendor } from './vendorTypes';

export const getAllVendor = async (_p0?: string): Promise<Vendor[]> => {
  try {
    const response = await api.get<ApiVendorResponse<Vendor[]>>(`/vendors`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};
export const getVendorCode = async (_p0?: string): Promise<Vendor[]> => {
  try {
    const response = await api.get<ApiVendorResponse<Vendor[]>>(`/vendors/codes`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};
// export const createUser = async (userData: {
//   email: string;
//   password: string;
//   first_name?: string;
//   last_name?: string;
//   contact_no?: string;
//   is_enabled?: boolean;
// }): Promise<User> => {
//   try {
//     const response = await api.post<User>("/users", userData);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to create user:", error);
//     throw error;
//   }
// };
