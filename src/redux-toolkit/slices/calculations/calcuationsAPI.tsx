/* eslint-disable @typescript-eslint/explicit-function-return-type */
import api from "@/redux-toolkit/services/api";

export const getAllCalculations = async (queryString: string) => {
  const response = await api.get(`/calculations?${queryString}`);
  return response.data;
};