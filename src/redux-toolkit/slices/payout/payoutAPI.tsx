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
