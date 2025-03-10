/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from '@/redux-toolkit/services/api';

export const getAllPayOuts = async (queryString: string) => {
  try {
    const response = await api.get(`/payout?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch payouts:', error);
    throw error;
  }
};

export const createPayOut = async (data: any = {}, api_key: string) => {
  try {
    const response = await api.post(`/payout/create-payout`, data, {
      headers: {
        'x-api-key': api_key,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to create PayOut:', error);
    throw error;
  }
};
