import axios, { InternalAxiosRequestConfig } from "axios";
const endPoint = import.meta.env.VITE_API_BACKEND_URL;

const api = axios.create({
  baseURL: endPoint || "http://localhost:8090/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {

  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
});

export default api;
