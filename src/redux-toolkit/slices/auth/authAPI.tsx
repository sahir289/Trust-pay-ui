import api from "../../services/api";
import { setPageLoader } from "@/redux-toolkit/slices/common/pageLoader/pageLoaderSlice";


interface LoginResponse {
  error: {
    message: string;
    name: string;
    statusCode: number;
  };
  loading: boolean;
  meta: {
    message: string;
  };
  data: {
    accessToken: string;
    sessionId: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
  };
}

interface LoginParams {
  username: string;
  password: string;
}

export const loginUser = async ({ username, password }: LoginParams): Promise<LoginResponse> => {
  setPageLoader(true);
  const response = await api.post("/auth/login", { username, password });
  console.log(response.data, "response.data");
  setPageLoader(false);
  return response.data;
};

export const logOutUser = async () => {
  const response = await api.post("/auth/logout");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  // sessionStorage.removeItem("userSession");
  return response.data;
};
