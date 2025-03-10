/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
// import TomSelect from "@/components/Base/TomSelect";
import { FormInput, FormSelect } from "@/components/Base/Form";
// import transactions from "@/fakers/transactions";

export interface Transaction {
  // category: string;
  orderId: string;
  // user: string;
  // products: string[];
  // orderStatus: string;
  orderDate: string;
  amount: string;
}
import users from "@/fakers/users";
import * as yup from 'yup';
import transactionStatus from "@/fakers/transaction-status";
import Button from "@/components/Base/Button";
import CustomTable from "@/components/TableComponent/CommonTable";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { useCallback, useEffect, useState } from "react";
import { createSettlement, deleteSettlement, getAllSettlements, updateSettlement } from "@/redux-toolkit/slices/settlement/settlementAPI";
import { addSettlement, deleteSettlementSlice, getSettlements, updateAmount } from "@/redux-toolkit/slices/settlement/settlementSlice";
import { getAllSettlementData } from "@/redux-toolkit/slices/settlement/settlementSelectors";
import { Columns } from "@/constants";
import Modal from "@/components/Modal/modals";
import DynamicForm from "@/components/CommonForm";
import DeleteModalContent from "@/components/Modal/ModalContent/DeleteModalContent";


function VendorSettlement() {
 const [newSettlementModal, setNewSettlementModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedSettlementId, setSelectedSettlementId] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState(false);

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
  const handleConfirmDelete = async () => {
    if (selectedSettlementId) {
      await deleteSettlement(selectedSettlementId);
      dispatch(deleteSettlementSlice(selectedSettlementId));
    }
    setDeleteModal(false);
    setSelectedSettlementId(null);
  };
  const handleCancelDelete = () => {
    setDeleteModal(false);
    setSelectedSettlementId(null);
  };
  const handledeleteData = async (id: string) => {
    setSelectedSettlementId(id);
    setDeleteModal(true);
  }
  const handleEditModal = (data: any) => {
    setFormData(data);
    // setTitle(title);
    settlementModal();
  };
  useEffect(() => {
    fetchSettlements();
  }, [fetchSettlements]);
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
  const settlementModal = () => {
    setNewSettlementModal((prev: any) => !prev)
  }
  const handleSubmitData = async (data: any, isEditMode?: boolean) => {
    if (isEditMode) {
      let prevData = formData;
      const newData = getUpdatedFields(prevData, data);
      const updatedSettlement = await updateSettlement(data.id, newData);
  
      // Check if updatedSettlement.id and updatedSettlement.amount are valid
      if (updatedSettlement.id && updatedSettlement.amount !== null) {
        dispatch(updateAmount({ id: updatedSettlement.id, amount: updatedSettlement.amount }));
      } else {
        console.error("Invalid updated settlement data:", updatedSettlement);
        // Handle error gracefully or notify the user
      }
  
      setFormData(null);
    } else {
      const addedSettlement = await createSettlement(data);
      dispatch(addSettlement(addedSettlement));
    }
  };
  
  const formFields = {
    "Update Settlement": [
      {
        name: "UTR Number",
        label: "UTR Number",
        type: "text",
        placeholder: "Enter your UTR",
        validation: yup.string().required('UTR is required'),
      },
    ],

  };


  return (
    <>
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="mt-3.5">
            <div className="flex flex-col ">
              <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                <Modal
                  handleModal={settlementModal}
                  forOpen={newSettlementModal}
                  title={`${formData ? 'Edit ' : 'Add '} Vendor`}
                >
                  <DynamicForm
                    sections={formFields}
                    onSubmit={handleSubmitData}
                    defaultValues={formData || {}}
                    isEditMode={formData ? true : false}
                    handleCancel={settlementModal}
                  />
                </Modal>
                <Modal handleModal={handleCancelDelete} forOpen={deleteModal}>
                  <DeleteModalContent handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} />
                </Modal>

              </div>
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
                 columns={Columns.VENDOR}
                 data={{ rows: allSettlement, totalCount: allSettlement.length }}
                 handleEditModal={handleEditModal}
                 handleDeleteData={handledeleteData}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorSettlement;
