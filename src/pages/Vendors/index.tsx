/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Lucide from "@/components/Base/Lucide";
import { FormInput, } from "@/components/Base/Form";
// import users from "@/fakers/users";
import CustomTable from "@/components/TableComponent/CommonTable";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { addVendor, getVendorsSlice, updateVendorSlice } from "@/redux-toolkit/slices/vendor/vendorSlice";
import { selectVendors } from "@/redux-toolkit/slices/vendor/vendorSelectors";
import { createVendor, getAllVendor, updateVendor } from "@/redux-toolkit/slices/vendor/vendorAPI";
import Modal from "../Modal/modals";
import { columns, vendorColumns } from "@/constants";
export interface Vendor {
  sno: number;
  code: string;
  vendor_commission: number;
  created_date: string;
  created_by: string;
  status: string;
  action: string;
  id: string;
  updated_at: string;
}

function Main() {
  const [formData, setFormData] = useState(null);
  const [newVendorModal, setNewVendorModal] = useState(false);
  const [title] = useState('Vendor');
  const roleIs = localStorage.getItem("userData")
  const role = roleIs ? JSON.parse(roleIs).role : null;
  const dispatch = useAppDispatch();
  const allvendor = useAppSelector(selectVendors);
  const fetchVendor = useCallback(async () => {
    const vendor = await getAllVendor("");
    dispatch(getVendorsSlice(vendor));
  }, [dispatch]);
  const vendorModal = () => {
    setNewVendorModal((prev) => !prev)
  }
  useEffect(() => {
    fetchVendor();
  }, [fetchVendor]);
  const handleEditModal = (data: any) => {
    setFormData(data);
    // setTitle(title);
    vendorModal();
  };
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
  const handleSubmitData = async (data: any, isEditMode?: boolean) => {
    if (isEditMode) {
      let prevData = formData;
      const newData = getUpdatedFields(prevData, data)
      const editVendor = await updateVendor(data.id, newData);
      dispatch(updateVendorSlice(editVendor));
      
    } else {
      const newVendor = await createVendor(data);
      dispatch(addVendor(newVendor));
    }
  };
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Vendors
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Modal
              title={title}
              forOpen={newVendorModal}
              formFields={{
                "Personal Info": [
                  {
                    name: "balance",
                    label: "Balance",
                    type: "number",
                    placeholder: "Enter your Balance",
                  },
                ],
                Commissions: [
                  {
                    name: "payin_commission",
                    label: "Pay in Commission",
                    type: "text",
                    placeholder: "Pay in Commission",
                  },
                  {
                    name: "payout_commission",
                    label: "Pay out Commission",
                    type: "text",
                    placeholder: "Pay out Commission",
                  },
                ],
              }}
              // handleModal={() => setAddVendor}
              existingData={formData}
              handleSubmitData={handleSubmitData}
              handleModal={vendorModal}
            />

          </div>
        </div>
        {/* handleModal,
  sendButtonRef, */}

        {/* existingData, */}
        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col p-5 box box--stacked">
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Registered Vendors</div>
                <div className="mt-1.5 text-2xl font-medium">204</div>
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
                <div className="text-base text-slate-500">Active Vendors</div>
                <div className="mt-1.5 text-2xl font-medium">721</div>
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
                <div className="text-base text-slate-500">New Vendors</div>
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
                <div className="text-base text-slate-500">Login Activity</div>
                <div className="mt-1.5 text-2xl font-mediumm">25</div>
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
          </div>
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
                    placeholder="Search vendors..."
                    className="pl-9 sm:w-64 rounded-[0.5rem]"
                  />
                </div>
              </div>
            </div>
            <CustomTable
              columns={(role === 'ADMIN' ? columns : vendorColumns).VENDOR}
              data={{ rows: allvendor, totalCount: 100 }}
              handleEditModal={handleEditModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
