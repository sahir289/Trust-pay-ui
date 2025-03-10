/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';
import { Settlement } from './settlementTypes';

export const getAllSettlements = async (queryString: string) => {
  try {
    const response = await api.get(`/settlement?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch settlements:', error);
    throw error;
  }
};


export const createSettlement = async (settlementData: {
  id?: string;
  amount?: string;
  status?: number;
}): Promise<Settlement> => {
  try {
    const response = await api.post<Settlement>(`/settlement/create-settlement`, settlementData);
    return response.data;
  } catch (error) {
    console.error("Failed to create vendor:", error);
    throw error;
  }
};
export const updateSettlement = async (
  id: string, 
  settlementData: {
    user_id: string;
    amount: number;
    method: string;
    updated_by: string;
    status: string;
    config: {
      reference_id?: string;
    };
  }
): Promise<Settlement> => {
  try {
    const response = await api.put<Settlement>(
      `/settlement/update-settlement/${id}`, 
      settlementData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update settlement:", error);
    throw error;
  }
};

export const deleteSettlement = async(id:string):  Promise<Settlement>=>{
  try {
    const response = await api.delete<Settlement>(`/settlement/delete-settlement/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to create vendor:", error);
    throw error;
  }
}
