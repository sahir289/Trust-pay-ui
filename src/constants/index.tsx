export const Role = {
  ADMIN: 'ADMIN',
  TRANSACTIONS: 'TRANSACTIONS',
  OPERATIONS: 'OPERATIONS',
  MERCHANT_ADMIN: 'MERCHANT_ADMIN',
  MERCHANT: 'MERCHANT',
  SUB_MERCHANT: 'SUB_MERCHANT',
  MERCHANT_OPERATIONS: 'MERCHANT_OPERATIONS',
  VENDOR: 'VENDOR',
  VENDOR_OPERATIONS: 'VENDOR_OPERATIONS',
};

export const Status = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  PENDING: 'PENDING',
  DUPLICATE: 'DUPLICATE',
  DISPUTE: 'DISPUTE',
  BANK_MISMATCH: 'BANK_MISMATCH',
  IMAGE_PENDING: 'IMAGE_PENDING',
  ASSIGNED: 'ASSIGNED',
  INITIATED: 'INITIATED',
  DROPPED: 'DROPPED',
  FAILED: 'FAILED',
  REJECTED: 'REJECTED',
  APPROVED: 'APPROVED',
};

export const Columns = {
  PAYIN: [
    { label: 'SNO', key: 'sno', type: 'text' as const },
    { label: 'UTR', key: 'bank_res_details', type: 'object', objectKey: 'amount' as const },
    { label: 'Requested Amount', key: 'amount', type: 'text' as const },
    { label: 'Status', key: 'status', type: 'status' as const },
    { label: 'Merchant', key: 'merchant_details', type: 'object', objectKey: 'merchant_code' as const },
    { label: 'Vendor', key: 'vendor_code', type: 'text' as const },
    {
      label: 'User Submitted UTR',
      key: 'user_submitted_utr',
      type: 'text' as const,
    },
    { label: 'UTR', key: 'bank_res_details', type: 'object', objectKey: 'utr' as const },
    { label: 'Image', key: 'user_submitted_image', type: 'text' as const },
    { label: 'Action', key: 'action', type: 'action' as const },
  ],
  USERS: [
    { label: 'Name', key: 'first_name', type: 'text' as const },
    { label: 'User Name', key: 'user_name', type: 'text' as const },
    { label: 'Created At', key: 'created_at', type: 'text' as const },
    { label: 'Created By', key: 'created_by', type: 'text' as const },
    { label: 'Is Enable', key: 'is_enabled', type: 'toggle' as const },
  ],
};
