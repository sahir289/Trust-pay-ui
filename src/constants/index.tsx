/* eslint-disable no-unused-vars */
import * as yup from 'yup';
import { debouncedValidateIfscCode } from '@/redux-toolkit/hooks/ifscValidation';

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
    { label: 'Image', key: 'user_submitted_image', type: 'text' as const },
    { label: 'Action', key: 'action', type: 'action' as const },
  ],
  BankDetails: [
    { label: 'SNO.', key: 'sno', type: 'text' as const },
    { label: 'Bank Name', key: 'bank_name', type: 'text' as const },
    { label: 'UPI ID', key: 'upi_id', type: 'text' as const },
    { label: 'ifsc', key: 'ifsc', type: 'text' as const },
    { label: 'Limits', key: 'limits', type: 'limits' as const },
    { label: 'Balance', key: 'balance', type: 'text' as const },
    { label: 'Bank Used For', key: 'bank_used_for', type: 'text' as const },
    { label: 'Vendors', key: 'vendor', type: 'text' as const },
    { label: 'Allow Intent?', key: 'allow_intent', type: 'toggle' as const },
    { label: 'Allow QR?', key: 'allow_qr', type: 'toggle' as const },
    { label: 'Allow PhonePay', key: 'allow_phonepay', type: 'toggle' as const },
    { label: 'Show Bank', key: 'show_bank', type: 'toggle' as const },
    { label: 'Status', key: 'status', type: 'toggle' as const },
    { label: 'Action', key: 'actions', type: 'actions' as const },
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
      objectKey: ['acc_no', 'acc_holder_name', 'ifsc_code', 'bank_name'],
    },
    { label: 'Action', key: 'action', type: 'action' as const },
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
    { label: 'Action', key: 'action', type: 'action' as const },
  ],
};

export const formFields = {
  USER: {
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
        name: 'designation_id',
        label: 'Designation ID',
        type: 'text',
        placeholder: 'Enter Designation ID',
        validation: yup.string().required('Designation ID is required'),
      },
      {
        name: 'role_id',
        label: 'Role ID',
        type: 'text',
        placeholder: 'Enter Role ID',
        validation: yup.string().required('Role ID is required'),
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
  },
  PAYIN: {
    Payin_Request: [
      {
        name: 'merchant_code',
        label: 'Merchant',
        type: 'select',
        options: [
          { value: '', label: 'Select Merchant' },
          { value: '1', label: 'Merchant One' },
          { value: '2', label: 'Merchant Two' },
          { value: '3', label: 'Merchant Three' },
        ],
        validation: yup.number().required('Merchant is required'),
      },
      {
        name: 'user',
        label: 'User',
        type: 'text',
        placeholder: 'Enter User',
        validation: yup.number().required('User is required'),
      },
      {
        name: 'amount',
        label: 'Amount',
        type: 'number',
        placeholder: 'Enter Amount',
        validation: yup.number().required('Amount is required'),
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
        name: 'merchant_code',
        label: 'Merchant',
        type: 'select',
        options: [
          { value: '', label: 'Select Merchant' },
          { value: '1', label: 'Merchant One' },
          { value: '2', label: 'Merchant Two' },
          { value: '3', label: 'Merchant Three' },
        ],
        validation: yup.number().required('Merchant is required'),
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
        type: 'number',
        placeholder: 'Enter Account Number',
        validation: yup.number().required('Account Number is required'),
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
};

interface Option {
  value: string;
  label: string;
}

export const BankDetailsFormFields = (userOptions: Option[]) => ({
  Details: [
    {
      name: 'nick_name',
      label: 'Nick Name',
      type: 'text',
      placeholder: 'Enter Bank Nickname',
      validation: yup.string().required('Nickname is required'),
    },
    {
      name: 'bank_name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter Bank Name',
      validation: yup.string().required('Bank Name is required'),
    },
    {
      name: 'acc_holder_name',
      label: 'Holder Name',
      type: 'text',
      placeholder: 'Acc Holder Name',
      validation: yup.string().required('Account Holder Name is required'),
    },
    {
      name: 'upi_id',
      label: 'UPI ID',
      type: 'text',
      placeholder: 'Enter UPI ID',
      validation: yup.string(),
    },
    {
      name: 'acc_no',
      label: 'Number',
      type: 'number',
      placeholder: 'Enter Account Number',
      validation: yup
        .number()
        .typeError('Must be a number')
        .required('Account Number is required'),
    },
    {
      name: 'ifsc',
      label: 'IFSC',
      type: 'text',
      placeholder: 'Enter IFSC Code',
      validation: yup
        .string()
        .required('IFSC Code is required')
        .test('valid-ifsc', 'Invalid IFSC Code', async (value) => {
          if (!value) return false; // IFSC Code is empty, return false immediately
          try {
            // Await the async validation function
            await debouncedValidateIfscCode(value);
            return true; // IFSC is valid
          } catch  {
            return false; // If validation fails, triggers "Invalid IFSC Code"
          }
        }),
    },
    {
      name: 'bank_used_for',
      label: 'PayIn/PayOut',
      type: 'select',
      options: [
        { value: '', label: 'Select' },
        { value: 'PayIn', label: 'PayIn' },
        { value: 'PayOut', label: 'PayOut' },
      ],
      validation: yup.string().required('Transaction Type is required'),
    },
    {
      name: 'user_id',
      label: 'User',
      type: 'select',
      options: userOptions,
      validation: yup.string().required('User selection is required'),
    },
  ],
  Limits: [
    {
      name: 'min_payin',
      label: 'Min',
      type: 'number',
      placeholder: 'Enter Min limit',
      validation: yup.number().min(0).required('Min PayIn is required'),
    },
    {
      name: 'max_payin',
      label: 'Max',
      type: 'number',
      placeholder: 'Enter Max limit',
      validation: yup.number().min(0).required('Max PayIn is required'),
    },
  ],
  Options: [
    {
      name: 'enabled',
      label: 'Enabled',
      type: 'switch',
      validation: yup.boolean(),
    },
    {
      name: 'qr',
      label: 'QR?',
      type: 'switch',
      validation: yup.boolean(),
    },
    {
      name: 'bank',
      label: 'Bank?',
      type: 'switch',
      validation: yup.boolean(),
    },
    {
      name: 'phonepay',
      label: 'PhonePay?',
      type: 'switch',
      validation: yup.boolean(),
    },
  ],
});
export const getUserFormFields = (designationOptions: Option[], roleOptions: Option[]) => ({   
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
export const MerchantformFields = {
    Code: [
      {
        name: 'code',
        label: '',
        type: 'text',
        placeholder: 'Enter Merchant Code',
        validation: yup.string().required('Code is required'),
        width: '12',
      },
    ],
    URLs: [
      {
        name: 'site',
        label: 'Site',
        type: 'text',
        placeholder: 'Enter Site URL',
        validation: yup
          .string()
          .url('Invalid URL')
          .required('Site URL is required'),
      },
      {
        name: 'return_url',
        label: 'Return',
        type: 'text',
        placeholder: 'Enter Return URL',
        validation: yup
          .string()
          .url('Invalid URL')
          .required('Return URL is required'),
      },
      {
        name: 'payin_notify',
        label: 'Callback',
        type: 'text',
        placeholder: 'Enter Callback URL',
        validation: yup
          .string()
          .url('Invalid URL')
          .required('Callback URL is required'),
      },
      {
        name: 'payout_notify',
        label: 'PayOut Callback',
        type: 'text',
        placeholder: 'Enter PayOut Callback URL',
        validation: yup
          .string()
          .url('Invalid URL')
          .required('PayOut Callback URL is required'),
      },
    ],
    PayIn: [
      {
        name: 'min_payin',
        label: 'Min',
        type: 'number',
        placeholder: 'Enter Min PayIn',
        validation: yup
          .number()
          .min(0, 'Must be a positive number')
          .required('Min PayIn is required'),
      },
      {
        name: 'max_payin',
        label: 'Max',
        type: 'number',
        placeholder: 'Enter Max PayIn',
        validation: yup
          .number()
          .min(0, 'Must be a positive number')
          .required('Max PayIn is required'),
      },
      {
        name: 'payin_commission',
        label: 'Commission',
        type: 'number',
        placeholder: 'Enter PayIn Commission',
        validation: yup
          .number()
          .min(0, 'Must be a positive number')
          .required('PayIn Commission is required'),
        width: '12',
      },
    ],
    PayOut: [
      {
        name: 'min_payout',
        label: 'Min',
        type: 'number',
        placeholder: 'Enter Min PayOut',
        validation: yup
          .number()
          .min(0, 'Must be a positive number')
          .required('Min PayOut is required'),
      },
      {
        name: 'max_payout',
        label: 'Max',
        type: 'number',
        placeholder: 'Enter Max PayOut',
        validation: yup
          .number()
          .min(0, 'Must be a positive number')
          .required('Max PayOut is required'),
      },
      {
        name: 'payout_commission',
        label: 'Commission',
        type: 'number',
        placeholder: 'Enter PayOut Commission',
        validation: yup
          .number()
          .min(0, 'Must be a positive number')
          .required('PayOut Commission is required'),
        width: '12',
      },
    ],
    '': [
      {
        name: 'is_test_mode',
        label: 'Test Mode',
        type: 'switch',
        validation: yup.boolean(),
      },
      {
        name: 'allow_intent',
        label: 'Allow Intent',
        type: 'switch',
        validation: yup.boolean(),
      },
    ],
  };