/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllBankResponses = async (queryString: string) => {
  try {
    const response = await api.get(`/bankResponse?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch bankResponses:', error);
    throw error;
  }
};

export const getAllCheckUtrHistories = async (queryString: string) => {
  try {
    const response = await api.get(`/checkutr?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch checkUtrHistory:', error);
    throw error;
  }
};

export const createBankResponses = async (queryString: string) => {
  try {
    const response = await api.get(`/bankResponse/create-message?${queryString}`,);
    return response.data;
  } catch (error) {
    console.error('Failed to create payIn:', error);
    throw error;
  }
};

export const createCheckUTR = async (data: any = {}) => {
  try {
    const response = await api.get(`/checkutr/create-CheckUtr`,data);
    return response.data;
  } catch (error) {
    console.error('Failed to create payIn:', error);
    throw error;
  }
};

export const updateBankResponse = async (id: string) => {
  try {
    const response = await api.put(`/bankResponse/reset-message/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to update payIn:', error);
    throw error;
  }
};
