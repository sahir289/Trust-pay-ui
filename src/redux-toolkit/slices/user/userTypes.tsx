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
  is_enabled: boolean;
  email: string;
  first_name: string;
  last_name: string;
  contact_no: string;
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
  loading: boolean;
  error: string | null;
}