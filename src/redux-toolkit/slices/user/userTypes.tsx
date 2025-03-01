export interface User {
  id: string;
  sno: number;
  code: string;
  vendor_commission: number;
  created_date: string;
  created_by: string;
  status: string;
  action: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}
export interface UserState {
  token: string | null;
  isAuthenticated: boolean;
  users: User[];
}