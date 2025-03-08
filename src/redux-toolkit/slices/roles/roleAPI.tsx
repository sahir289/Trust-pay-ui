/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllRoles = async (queryString: string) => {
  try {
    const response = await api.get(`/roles?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch roles:', error);
    throw error;
  }
};
