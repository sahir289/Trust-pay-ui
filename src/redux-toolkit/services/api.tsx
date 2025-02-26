import axios from "axios";
const endPoint = import.meta.env.VITE_API_BACKEND_URL;

const api = axios.create({
  baseURL: endPoint || "http://localhost:8090/v1"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("x-auth-token");
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;
