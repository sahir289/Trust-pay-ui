import api from "../../services/api";

interface LoginResponse {
  error?: {
    message: string;
    name: string;
    statusCode: number;
  };
  loading?: boolean;
  meta?: {
    message: string;
  };
  data?: {
    accessToken: string;
    sessionId: string;
  user?: {
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
  try {
    const response = await api.post("/auth/login", { username, password });
    return response.data;
  } catch (error) {
    console.error("Login API Error:", error);
return {
  error: {
    message: (error as Error).message || "An error occurred",
    name: (error as Error).name || "Error",
    statusCode: (error as { status?: number }).status || 500,
  }
};
  }
};

interface LogoutParams {
  session_id: string;
}

export const logOutUser = async ({ session_id }: LogoutParams) => {
  const response = await api.post("/auth/logout", { session_id });
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  window.sessionStorage.removeItem("userSession");
  return response.data;
};
