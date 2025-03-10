/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as yup from 'yup';

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
    {
      label: 'Amount',
      key: 'bank_res_details',
      type: 'object',
      objectKey: 'amount' as const,
    },
    { label: 'Requested Amount', key: 'amount', type: 'text' as const },
    { label: 'Status', key: 'status', type: 'status' as const },
    {
      label: 'Merchant',
      key: 'merchant_details',
      type: 'object',
      objectKey: 'merchant_code' as const,
    },
    { label: 'Vendor', key: 'vendor_code', type: 'text' as const },
    {
      label: 'User Submitted UTR',
      key: 'user_submitted_utr',
      type: 'text' as const,
    },
    {
      label: 'UTR',
      key: 'bank_res_details',
      type: 'object',
      objectKey: 'utr' as const,
    },
    { label: 'Image', key: 'user_submitted_image', type: 'image' as const },
    { label: 'Actions', key: 'actions', type: 'actions' as const },
  ],
  USERS: [
    { label: 'Name', key: 'first_name', type: 'text' as const },
    { label: 'User Name', key: 'user_name', type: 'text' as const },
    { label: 'Created At', key: 'created_at', type: 'text' as const },
    { label: 'Created By', key: 'created_by', type: 'text' as const },
    { label: 'Is Enable', key: 'is_enabled', type: 'toggle' as const },
  ],
  MERCHANTS: [
    {
      label: 'Sub Merchants',
      key: 'sub_merchants',
      type: 'expand' as const,
    },
    { label: 'Code', key: 'code', type: 'text' as const },
    { label: 'Balance', key: 'balance', type: 'text' as const },
    { label: 'PayIn Range', key: 'payin_range', type: 'text' as const },
    {
      label: 'PayIn Commission',
      key: 'payin_commission',
      type: 'range' as const,
    },
    { label: 'PayOut Range', key: 'payout_range', type: 'text' as const },
    {
      label: 'PayOut Commission',
      key: 'payout_commission',
      type: 'range' as const,
    },
    { label: 'Test Mode', key: 'test_mode', type: 'toggle' as const },
    { label: 'Allow Intent', key: 'allow_intent', type: 'toggle' as const },
    { label: 'Enabled', key: 'is_enabled', type: 'toggle' as const },
    { label: 'Actions', key: 'actions', type: 'actions' as const },
  ],
  PAYOUT: [
    { label: 'SNO.', key: 'sno', type: 'text' as const },
    { label: 'Amount', key: 'amount', type: 'text' as const },
    { label: 'Status', key: 'status', type: 'status' as const },
    {
      label: 'Merchant',
      key: 'merchant_details',
      type: 'object',
      objectKey: 'merchant_code' as const,
    },
    { label: 'Vendor', key: 'vendor_code', type: 'text' as const },
    {
      label: 'Bank Details',
      key: 'user_bank_details',
      type: 'object',
      objectKey: ['account_no', 'account_holder_name', 'ifsc_code', 'bank_name'],
    },
    { label: 'Actions', key: 'actions', type: 'actions' as const },
  ],
  BANK_RESPONSE: [
    { label: 'SNO.', key: 'sno', type: 'text' as const },
    { label: 'Status', key: 'status', type: 'text' as const },
    { label: 'Amount', key: 'amount', type: 'text' as const },
    { label: 'Amount Code', key: 'amount_code', type: 'text' as const },
    { label: 'UTR', key: 'utr', type: 'text' as const },
    { label: 'Bank Name', key: 'nick_name', type: 'text' as const },
    { label: 'Is Used', key: 'is_used', type: 'toggle' as const },
    { label: 'Updated Date', key: 'updated_at', type: 'text' as const },
    { label: 'Updated By', key: 'updated_by', type: 'text' as const },
    { label: 'Actions', key: 'actions', type: 'actions' as const },
  ],
};

interface Option {
  value: string;
  label: string;
}

export const getTransactionFormFields = (
  merchantOptions: Option[]
) => ({
  PAYIN: {
    Payin_Request: [
      {
        name: 'code',
        label: 'Merchant',
        type: 'select',
        options: merchantOptions,
        validation: yup.string().required('Merchant is required'),
      },
      {
        name: 'user',
        label: 'User',
        type: 'text',
        placeholder: 'Enter User',
        validation: yup.string().required('User is required'),
      },
      {
        name: 'amount',
        label: 'Amount',
        type: 'number',
        placeholder: 'Enter Amount',
        validation: yup.number(),
      },
      {
        name: 'ot',
        label: 'One Time',
        type: 'switch',
        validation: yup.boolean(),
      },
    ],
  },
  PAYOUT: {
    Payout_Request: [
      {
        name: 'code',
        label: 'Merchant',
        type: 'select',
        options: merchantOptions,
        validation: yup.string().required('Merchant is required'),
      },
      {
        name: 'user',
        label: 'User',
        type: 'text',
        placeholder: 'Enter User',
        validation: yup.string().required('User is required'),
      },
      {
        name: 'amount',
        label: 'Amount',
        type: 'number',
        placeholder: 'Enter Amount',
        validation: yup.number().required('Amount is required'),
      },
      {
        name: 'bank_name',
        label: 'Bank Name',
        type: 'text',
        placeholder: 'Enter Bank Name',
        validation: yup.string().required('Bank Name is required'),
      },
      {
        name: 'acc_no',
        label: 'Account Number',
        type: 'text',
        placeholder: 'Enter Account Number',
        validation: yup.string().required('Account Number is required'),
      },
      {
        name: 'acc_holder_name',
        label: 'Account Holder Name',
        type: 'text',
        placeholder: 'Enter Account Holder Name',
        validation: yup.string().required('Account Holder Name is required'),
      },
      {
        name: 'ifsc_code',
        label: 'IFSC Code',
        type: 'text',
        placeholder: 'Enter IFSC Code',
        validation: yup.string().required('IFSC Code is required'),
      },
    ],
  },
});

export const getDataEntriesFormFields = (
  bankOptions: Option[]
) => ({
  BANK_RESPONSE: {
    Bank_Response: [
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        options: [
          { value: '/success', label: 'Success' },
        ],
        validation: yup.string().required('Status is required'),
      },
      {
        name: 'bank_id',
        label: 'Bank',
        type: 'select',
        options: bankOptions,
        validation: yup.string().required('Status is required'),
      },
      {
        name: 'amount',
        label: 'Amount',
        type: 'number',
        placeholder: 'Enter Amount',
        validation: yup.number().required('Amount is required'),
      },
      {
        name: 'upi_short_code',
        label: 'Amount Code',
        type: 'text',
        placeholder: 'Enter Amount Code',
        validation: yup.string(),
      },
      {
        name: 'utr',
        label: 'UTR',
        type: 'text',
        placeholder: 'Enter UTR',
        validation: yup.string().required('UTR is required'),
      },
    ],
  },
});

export const getUserFormFields = (
  designationOptions: Option[],
  roleOptions: Option[],
) => ({
  User_Details: [
    {
      name: 'first_name',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter First Name',
      validation: yup.string().required('First Name is required'),
    },
    {
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter Last Name',
      validation: yup.string().required('Last Name is required'),
    },
    {
      name: 'user_name',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter Username',
      validation: yup.string().required('Username is required'),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter Email',
      validation: yup
        .string()
        .email('Invalid Email')
        .required('Email is required'),
    },
    {
      name: 'contact_no',
      label: 'Contact Number',
      type: 'text',
      placeholder: 'Enter Contact Number',
      validation: yup
        .string()
        .matches(/^\d+$/, 'Must be a valid number')
        .required('Contact number is required'),
    },
  ],
  User_Info: [
    {
      name: 'designation',
      label: 'Designation',
      type: 'select',
      options: designationOptions,
      placeholder: 'Enter Designation',
      validation: yup.string().required('Designation is required'),
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: roleOptions,
      placeholder: 'Enter Role',
      validation: yup.string().required('Role is required'),
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter Password',
      validation: yup
        .string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required'),
    },
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      placeholder: 'Enter Code',
      validation: yup.string().required('Code is required'),
    },
    {
      name: 'is_enabled',
      label: 'Is Enabled?',
      type: 'switch',
      validation: yup.boolean(),
    },
  ],
});
