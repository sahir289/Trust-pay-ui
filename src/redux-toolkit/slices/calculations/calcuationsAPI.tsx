/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllCalculations = async (queryString: string) => {
  try {
    const response = await api.get(`/calculations?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch calculations:', error);
    throw error;
  }
};
