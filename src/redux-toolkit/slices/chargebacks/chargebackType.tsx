export interface Chargeback {
    id: string;
    sno: number;
    merchant_user_id: string;
    vendor_user_id: string;
    payin_id: string;
    bank_acc_id: string;
    amount: number;
    when: string;
    created_by: string;
    updated_by : string;
    config: object;
    created_at: string;
    updated_at : string;
    designation_id : string;
    designation_name: string;
  }
  
  export interface ApiChargebackResponse<T> {
    data: T;
    message?: string;
    status?: string;
  }
  export interface ChargebackState {
    chargeback: Chargeback[];
  }