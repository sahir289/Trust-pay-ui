/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllPayIns = async (queryString: string) => {
  try {
    const response = await api.get(`/payIn?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch payIns:', error);
    throw error;
  }
};

export const updatePayIns = async (url: string, data: any = {}) => {
  try {
    const response = await api.put(`/payIn/${url}`, data);
    return response.data;
  } catch (error) {
    console.error('Failed to update payIn:', error);
    throw error;
  }
};

export const createPayIn = async (queryString: string) => {
  try {
    const response = await api.get(`/payIn/generate-payin?${queryString}`,);
    return response.data;
  } catch (error) {
    console.error('Failed to create payIn:', error);
    throw error;
  }
};
