/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import Lucide from '@/components/Base/Lucide';
import { FormInput } from '@/components/Base/Form';
// import bankaccounts from "@/fakers/bankaccount";
import { useState, JSX } from 'react';
import { Columns } from '@/constants';
import CommonTable from '@/components/TableComponent/CommonTable';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { selectAllBankDetails } from '@/redux-toolkit/slices/bankDetails/bankDetailsSelectors';
import {
  getBankDetailsSlice,
  updateBankDetailSlice,
  addBankDetailSlice,
} from '@/redux-toolkit/slices/bankDetails/bankDetailsSlice';
import { getVendorCode } from '@/redux-toolkit/slices/vendor/vendorAPI';
import {
  updateBankDetailsApi,
  addBankDetailsApi,
  getAllBankDetailsApi,
} from '@/redux-toolkit/slices/bankDetails/bankDetailsAPI';
import Modal from '@/components/Modal/modals';
import * as yup from 'yup';
interface Vendor {
  user_id: string;
  code: string;
}
function Main(): JSX.Element {
  const [newUserModal, setNewUserModal] = useState<boolean>(false);
  // const [editModal, setEditModal] = useState<string>("");
  const [formData, setFormData] = useState({});
  const [vendor, setVendor] = useState<Vendor[]>([]); // Ensure state is an array of Vendor objects

  const [title] = useState<string>('Bank Account');
  // const userModal = (): void => {
  //   setNewUserModal((prev) => !prev);
  // };
  const bankModal = (): void => {
    setNewUserModal((prev) => !prev);
  };
  const dispatch = useAppDispatch();
  const allBankDetails = useAppSelector(selectAllBankDetails);
  // console.log(allBankDetails, 'bank details');
  const fetchBankDetails = useCallback(async () => {
    // tempory disabled this functionality
    // const queryString = new URLSearchParams(params).toString();
    const merchantList = await getAllBankDetailsApi('');
    //   console.log(merchantList,"merchant data");
    dispatch(getBankDetailsSlice(merchantList));
  }, [dispatch]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditModal = (data: any) => {
    setFormData(data);
    bankModal();
  };
  const handleSubmitData = async (data: any, isEditMode?: boolean) => {
    if (isEditMode) {
      let prevData = formData;
      const newData = getUpdatedFields(prevData, data);
      const updatedMerchant = await updateBankDetailsApi(data.id, newData);
      // console.log(updateMercHant,"hiii from updated merchant")
      dispatch(updateBankDetailSlice(updatedMerchant));
      setFormData(null);
    } else {
      const addedMerchant = await addBankDetailsApi(data);
      console.log(addedMerchant,"hii from the added how to get")
      dispatch(addBankDetailSlice(addedMerchant));
    }
  };
  //getting vendor code for add bankaccount

  const getVendor = async () => {
    const vendorData: Vendor[] = await getVendorCode(); // Assuming getVendorCode() returns Vendor[]
    setVendor(vendorData);
  };



  const userOptions = vendor.map((user) => ({
    value: user.user_id, // Corrected user_id reference
    label: user.code, // Corrected code reference
  }));
  useEffect(() => {
    if (!newUserModal) {
      setFormData(null);
    }
  }, [newUserModal]);
  useEffect(() => {
    fetchBankDetails();
    getVendor();
  }, [fetchBankDetails]);

  //updated data for edit modal
  function getUpdatedFields(
    originalData: any,
    updatedData: any,
  ): { [key: string]: any } {
    const updatedFields: { [key: string]: any } = {};
    Object.keys(updatedData).forEach((key) => {
      if (typeof updatedData[key] === 'object' && updatedData[key] !== null) {
        // Handle nested objects like `config`
        const nestedUpdates = getUpdatedFields(
          originalData[key] || {},
          updatedData[key],
        );

        // If there are nested updates, add them to updatedFields
        if (Object.keys(nestedUpdates).length > 0) {
          updatedFields[key] = nestedUpdates;
        }
      } else {
        // Check if the value is different from the original
        if (updatedData[key] !== originalData[key]) {
          updatedFields[key] = updatedData[key];
        }
      }
    });

    return updatedFields;
  }
  const formFields = {
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
        validation: yup.string().required('IFSC Code is required'),
      },

      {
        name: 'bank_used_for',
        label: 'PayIn/PayOut',
        type: 'select',
        options: [
          { value: 'PayIn', label: 'PayIn' },
          { value: 'PayOut', label: 'PayOut' },
        ],
        validation: yup.string().required('Transaction Type is required'),
      },
      {
        name: 'user_id',
        label: 'User',
        type: 'select',
        options: userOptions, // Dynamically generated options
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
  };
//  PayOut: [
//    {
//      name: 'min_payout',
//      label: 'Min',
//      type: 'number',
//      placeholder: 'Enter Min PayOut',
//      validation: yup.number().min(0).required('Min PayOut is required'),
//    },
//    {
//      name: 'max_payout',
//      label: 'Max',
//      type: 'number',
//      placeholder: 'Enter Max PayOut',
//      validation: yup.number().min(0).required('Max PayOut is required'),
//    },
//  ];
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Bank Accounts
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            {/* <Modal
              handleModal={userModal}
              sendButtonRef={userRef}
              forOpen={newUserModal}
              title={title}
            /> */}
            <Modal
              handleModal={bankModal}
              forOpen={newUserModal}
              title={title}
              formFields={formFields}
              existingData={formData}
              setEditData={setFormData}
              handleSubmitData={handleSubmitData}
              // dummyfunction={sdadasa}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-3.5">
          {/* <div className="flex flex-col p-5 box box--stacked">
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Registered Banks</div>
                <div className="mt-1.5 text-2xl font-medium">4,204</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                    3%
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Active Banks</div>
                <div className="mt-1.5 text-2xl font-medium">1,721</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                    2%
                    <Lucide
                      icon="ChevronUp"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">New Banks</div>
                <div className="mt-1.5 text-2xl font-mediumm">223</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                    3%
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">
                  Transactions Activity
                </div>
                <div className="mt-1.5 text-2xl font-mediumm">259</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                    8%
                    <Lucide
                      icon="ChevronUp"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search Banks..."
                    className="pl-9 sm:w-64 rounded-[0.5rem]"
                  />
                </div>
              </div>
            </div>
            <CommonTable
              columns={Columns.BankDetails}
              data={{
                rows: allBankDetails,
                totalCount: allBankDetails.length,
              }}
              handleEditModal={handleEditModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
