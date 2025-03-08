import api from '../../services/api'; // Assuming this is your axios instance
import { ApiResponse, bankDetails } from './bankDetailsTypes';

// Fetch all bank details
export const getAllBankDetailsApi = async (
  queryString: string,
): Promise<bankDetails[]> => {
  try {
    const response = await api.get<ApiResponse<bankDetails[]>>(
      `/bankDetails?${queryString}`,
    );
    console.log(response.data.data, 'data from bank');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch bank details:', error);
    throw error;
  }
};

// Create a new bank detail
export const addBankDetailsApi = async (bankData: {
  accountName: string;
  bankDetails: string;
  accountNumber: string;
  upiId: string;
  limits: string;
  balance: number;
  bankUsedFor: string;
  vendors: string;
  createdAt: string;
  lastScheduledAt: string;
  allowIntent: boolean;
  allowQR: boolean;
  allowPhonePay: boolean;
  showBank: boolean;
  status: string;
}): Promise<bankDetails> => {
  try {
    const response = await api.post<bankDetails>(
      '/bankDetails/create-bank',
      bankData,
    );
    return response.data;
  } catch (error) {
    console.error('Failed to create bank detail:', error);
    throw error;
  }
};

// Update an existing bank detail
export const updateBankDetailsApi = async (
  id: string,
  bankData: Partial<bankDetails>,
): Promise<bankDetails> => {
  try {
    const response = await api.put<bankDetails>(
      `/bankDetails/update-bank/${id}`,
      bankData,
    );
    return response.data;
  } catch (error) {
    console.error('Failed to update bank detail:', error);
    throw error;
  }
};

// Delete a bank detail (Fixed incorrect API endpoint)
export const deleteBankDetailsApi = async (id: string): Promise<void> => {
  try {
    await api.delete(`/bankDetails/delete-bank/${id}`); // Corrected DELETE endpoint
  } catch (error) {
    console.error('Failed to delete bank detail:', error);
    throw error;
  }
};
