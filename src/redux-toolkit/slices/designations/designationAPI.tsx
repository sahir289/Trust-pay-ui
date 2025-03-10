/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllDesignations = async (queryString: string) => {
  try {
    const response = await api.get(`/designation?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch designations:', error);
    throw error;
  }
};