/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllSettlements = async (queryString: string) => {
  try {
    const response = await api.get(`/settlement?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch settlements:', error);
    throw error;
  }
};
