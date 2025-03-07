/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from "@/redux-toolkit/services/api";

export const getAllBankResponses = async (queryString: string) => {
  try {
  const response = await api.get(`/bankResponse?${queryString}`);
  return response.data;
} catch (error) {
  console.error("Failed to fetch bankResponses:", error);
  throw error;
}
};

export const getAllCheckUtrHistories = async (queryString: string) => {
  try {
  const response = await api.get(`/checkUtrHistory?${queryString}`);
  return response.data;
} catch (error) {
  console.error("Failed to fetch checkUtrHistory:", error);
  throw error;
}
};