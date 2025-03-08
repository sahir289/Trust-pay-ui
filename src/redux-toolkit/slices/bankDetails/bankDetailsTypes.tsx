export interface bankDetails {
    id: string;
  accountName: string;
  bankDetails: string;
  accountNumber: string;
  upiId: string;
  limits: string;
  balance: number;
  bankUsedFor: string;
  vendors: string;
  createdAt: string;
  lastScheduledAt: string;
  allowIntent: boolean;
  allowQR: boolean;
  allowPhonePay: boolean;
  showBank: boolean;
  status: string;
}

export interface bankDetailsState {
  users: bankDetails[];
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
