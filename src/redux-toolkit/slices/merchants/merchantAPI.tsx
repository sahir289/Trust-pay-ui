import api from '../../services/api'; // Assuming this is your axios instance
import { ApiResponse, Merchant } from './merchantTypes';

export const getAllMerchants = async (
  queryString: string,
): Promise<Merchant[]> => {
  try {
    const response = await api.get<ApiResponse<Merchant[]>>(
      `/merchants?${queryString}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const createMerchant = async (userData: {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  contact_no?: string;
  is_enabled?: boolean;
}): Promise<Merchant> => {
  try {
    const response = await api.post<Merchant>('/merchants/create-merchants', userData);
    return response.data;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
};

export const updateMerchant = async (
  id: string,
  userData: Partial<Merchant>,
): Promise<Merchant> => {
  try {
    const response = await api.put<Merchant>(`/merchants/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Failed to update user:', error);
    throw error;
  }
};
