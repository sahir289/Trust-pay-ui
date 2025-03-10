/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
// import TomSelect from "@/components/Base/TomSelect";
import { FormInput, FormSelect } from "@/components/Base/Form";
// import transactions from "@/fakers/transactions";
import users from "@/fakers/users";
import transactionStatus from "@/fakers/transaction-status";
import Button from "@/components/Base/Button";
import { useCallback, useEffect, useState } from "react";
import { createSettlement, getAllSettlements, updateSettlement } from "@/redux-toolkit/slices/settlement/settlementAPI";
import { addSettlement, getSettlements, updateUTR } from "@/redux-toolkit/slices/settlement/settlementSlice";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { Columns } from "@/constants";
import * as yup from 'yup';
import CustomTable from "@/components/TableComponent/CommonTable";
import { getAllSettlementData } from "@/redux-toolkit/slices/settlement/settlementSelectors";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import Modal from "@/components/Modal/modals";
import DynamicForm from "@/components/CommonForm";

function MerchantSettlement() {
  const [newSettlementModal, setNewSettlementModal] = useState(false);
  const [newdeleteModal, setNewdeleteModal] = useState(false);

  const [formData, setFormData] = useState(null);
  const dispatch = useAppDispatch();
  const allSettlement = useAppSelector(getAllSettlementData) || [];
  const fetchSettlements = useCallback(async () => {
    const response = await getAllSettlements("role_name=ADMIN");
    if (response?.data) {
      dispatch(getSettlements(response.data));
    } else {
      console.error("Error fetching settlements:", response.error);
    }
  }, [dispatch]);

  const handleEditModal = (data: any) => {
    setFormData(data);
    // setTitle(title);
    settlementModal();
  };
  const handleDeleteModal = (data: any) => {
    setFormData(data);
    // setTitle(title);
    deleteModal();
  };
  useEffect(() => {
    fetchSettlements();
  }, [fetchSettlements]);

  function getUpdatedFields(
    originalData: any,
    updatedData: any
  ): { [key: string]: any } {
    const updatedFields: { [key: string]: any } = {};

    Object.keys(updatedData).forEach((key) => {
      if (typeof updatedData[key] === 'object' && updatedData[key] !== null) {
        const nestedUpdates = getUpdatedFields(originalData[key] || {}, updatedData[key]);

        if (Object.keys(nestedUpdates).length > 0) {
          updatedFields[key] = nestedUpdates;
        }
      } else {
        if (updatedData[key] !== originalData[key]) {
          updatedFields[key] = updatedData[key];
        }
      }
    });
    return updatedFields; // Return the updated fields object
  }


  const settlementModal = () => {
    setNewSettlementModal((prev) => !prev)
  }

  const handleSubmitData = async (data: any, isEditMode?: boolean) => {
    if (isEditMode) {
      let prevData = formData;
      const newData = getUpdatedFields(prevData, data);
      const settlementData = { ...newData, ...data }
      const {
        reference_id, user_id, amount, method, updated_by, status } = settlementData;
      const result = {
        user_id,
        amount,
        method,
        updated_by,
        status,
        config: {
          reference_id
        }
      };

      const updatedSettlement = await updateSettlement(data?.id, result);
      dispatch(updateUTR({
        id: updatedSettlement?.id ?? "",
        reference_id: updatedSettlement?.config?.reference_id ?? ""
      }));
      setFormData(null);
    } else {
      const addedVendor = await createSettlement(data);
      dispatch(addSettlement(addedVendor));
    }
  };
  const handleDeleteSettlement = async (data: any) => {
      let prevData = formData;
      const newData = getUpdatedFields(prevData, data);
      const settlementData = { ...newData, ...data }
      const {
        reference_id, user_id, amount, method, updated_by, status } = settlementData;
      const result = {
        user_id,
        amount,
        method,
        updated_by,
        status,
        config: {
          reference_id
        }
      };

      const updatedSettlement = await updateSettlement(data?.id, result);
      console.log(updatedSettlement, "updatedSettlement")
      dispatch(updateUTR({
        id: updatedSettlement?.id ?? "",
        reference_id: updatedSettlement?.config?.reference_id ?? ""
      }));
      setFormData(null);
   
  };
  const formFields = {
    "Update Settlement": [
      {
        name: "reference_id",
        label: "UTR Number",
        type: "text",
        placeholder: "Enter your UTR",
        validation: yup.string().required('UTR is required'),
         width: '12'
      },
    ],

  };
  const deleteFields = {
    "Reject Settlement": [
      {
        name: "reject_reason",
        label: "",
        type: "select",
        placeholder: "Select Rejecting Reason",
        validation: yup.string().required('Reject Reason is required'),
        options: [
          { value: 'insufficiant', label: 'Insufficient Funds' },
          { value: 'reason2', label: 'Invalid Bank Details' },
          { value: 'other', label: 'Other' },
          // Add more options as needed
        ],
         width: '12',
        //  height: '12'
      },
    ],

  };
  const deleteModal = () => {
    setNewdeleteModal((prev) => !prev)
  }
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
        <Modal
          handleModal={settlementModal}
          forOpen={newSettlementModal}
          title={ ""}
        >
          <DynamicForm
            sections={formFields}
            onSubmit={handleSubmitData}
            defaultValues={formData || {}}
            isEditMode={formData ? true : false}
            handleCancel={settlementModal}
          />
        </Modal>

        <Modal
          handleModal={deleteModal}
          forOpen={newdeleteModal}
          title=""
        >
          <DynamicForm
            sections={deleteFields}
            onSubmit={handleDeleteSettlement}
            defaultValues={formData||{}}
            isEditMode={false}
            handleCancel={deleteModal}
          />
        </Modal>
      </div>
      <div className="col-span-12">
        <div className="mt-3.5">
          <div className="flex flex-col ">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search transactions..."
                    className="pl-9 sm:w-64 rounded-[0.5rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="outline-secondary"
                    className="w-full sm:w-auto"
                  >
                    <Lucide
                      icon="Download"
                      className="stroke-[1.3] w-4 h-4 mr-2"
                    />
                    Export
                    <Lucide
                      icon="ChevronDown"
                      className="stroke-[1.3] w-4 h-4 ml-2"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />{" "}
                      PDF
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />
                      CSV
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <Popover className="inline-block">
                  {({ close }: { close: () => void }) => (
                    <>
                      <Popover.Button
                        as={Button}
                        variant="outline-secondary"
                        className="w-full sm:w-auto"
                      >
                        <Lucide
                          icon="ArrowDownWideNarrow"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />
                        Filter
                        <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100 dark:bg-darkmode-400">
                          3
                        </div>
                      </Popover.Button>
                      <Popover.Panel placement="bottom-end">
                        <div className="p-2">
                          <div>
                            <div className="text-left text-slate-500">User</div>
                            <FormSelect className="flex-1 mt-2">
                              {users.fakeUsers().map((faker, fakerKey) => (
                                <option key={fakerKey} value={fakerKey}>
                                  {faker.name}
                                </option>
                              ))}
                            </FormSelect>
                          </div>
                          <div className="mt-3">
                            <div className="text-left text-slate-500">
                              Status
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {transactionStatus
                                .fakeTransactionStatus()
                                .map((faker, fakerKey) => (
                                  <option key={fakerKey} value={fakerKey}>
                                    {faker.name}
                                  </option>
                                ))}
                            </FormSelect>
                          </div>
                          <div className="flex items-center mt-4">
                            <Button
                              variant="secondary"
                              onClick={() => {
                                close();
                              }}
                              className="w-32 ml-auto"
                            >
                              Close
                            </Button>
                            <Button variant="primary" className="w-32 ml-2">
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
            </div>
            <CustomTable
              columns={Columns.SETTLEMENT}
              data={{ rows: allSettlement, totalCount: allSettlement.length }}
              handleEditModal={handleEditModal}
              handleDeleteData={handleDeleteModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantSettlement;
