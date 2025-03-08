/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Lucide from '@/components/Base/Lucide';
import { Menu, Popover } from '@/components/Base/Headless';
import { FormInput, FormSelect } from '@/components/Base/Form';
import merchants from '@/fakers/merchants';
import Button from '@/components/Base/Button';
import _ from 'lodash';
import { JSX } from 'react';
import { useState } from 'react';
import Modal from '../../components/Modal/modals';
import CustomTable from '@/components/TableComponent/CommonTable';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { selectAllMerchants } from '@/redux-toolkit/slices/merchants/merchantSelector';
import { getMerchants } from '@/redux-toolkit/slices/merchants/merchantSlice';
import { getAllMerchants } from '@/redux-toolkit/slices/merchants/merchantAPI';
import { createMerchant } from '@/redux-toolkit/slices/merchants/merchantAPI';
import { updateMerchantData } from '@/redux-toolkit/slices/merchants/merchantAPI';
import { deleteMerchant } from '@/redux-toolkit/slices/merchants/merchantAPI';
import { Columns } from '@/constants';
import { addMerchant } from '@/redux-toolkit/slices/merchants/merchantSlice';
import { deleteMercHantData } from '@/redux-toolkit/slices/merchants/merchantSlice';
import { updateMerchant } from '@/redux-toolkit/slices/merchants/merchantSlice';
import DynamicForm from '@/components/CommonForm';
import DeleteModalContent from '@/components/Modal/ModalContent/DeleteModalContent';
import { MerchantformFields } from '@/constants';


function Main(): JSX.Element {
  const [newMerchantModal, setNewMerchantModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
    const [formData, setFormData] = useState(null);
  const [selectedMerchantId, setSelectedMerchantId] = useState<string | null>(
    null,
  );
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  // const [editModal, setEditModal] = useState<boolean>(false)

  const merchantModal = () => {
    setNewMerchantModal((prev) => !prev);
  };

  useEffect(() => {
    if (!newMerchantModal) {
      setFormData(null);
    }
  }, [newMerchantModal]);

  //  const [params, setParams] = useState<{ [key: string]: string }>({
  //     page: '1',
  //     limit: '10',
  //   });//
  const handleRowClick = (fakerKey: number): void => {
    setExpandedRow((prevRow) => (prevRow === fakerKey ? null : fakerKey));
  };
  const dispatch = useAppDispatch();
  const allMerchants = useAppSelector(selectAllMerchants);
  const fetchMerchants = useCallback(async () => {
    // tempory disabled this functionality
    // const queryString = new URLSearchParams(params).toString();
    const merchantList = await getAllMerchants('');
      console.log(merchantList,"merchant data");
    dispatch(getMerchants(merchantList));
  }, [dispatch]);
  const handleEditModal = (data: any) => {
    const { config, ...cleanedData } = data;
    setFormData({
      ...cleanedData,
      site: data.config.url.site || '',
      payout_notify: data.config.url.payout_notify || '',
      payin_notify: data.config.url.payin_notify || '',
      return_url: data.config.url.return_url || '',
    });
    merchantModal();
  };
  const handleSubmitData = async (data: any, isEditMode?: boolean) => {
    if (isEditMode) {
      let prevData = formData;
      const newData = getUpdatedFields(prevData, data);
      const updatedMerchant = await updateMerchantData(data.id, newData);
      // console.log(updateMercHant,"hiii from updated merchant")
      dispatch(updateMerchant(updatedMerchant));
      setFormData(null);
    } else {
      const addedMerchant = await createMerchant(data);
      dispatch(addMerchant(addedMerchant));
    }
  };

  // Confirm Delete Action
  const handleConfirmDelete = async () => {
    if (selectedMerchantId) {
      await deleteMerchant(selectedMerchantId);
      dispatch(deleteMercHantData(selectedMerchantId));
    }
    setDeleteModal(false);
    setSelectedMerchantId(null);
  };

  // Cancel Delete Action
  const handleCancelDelete = () => {
    setDeleteModal(false);
    setSelectedMerchantId(null);
  };

  const handledeleteData = async (id: string) => {
    setSelectedMerchantId(id);
    setDeleteModal(true);
    console.log(id, 'id  delete');
  };
  ///for update data from edit modal where we update merchant details return only updated data
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

  useEffect(() => {
    fetchMerchants();
  }, [fetchMerchants]);
 
  
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Merchant
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Modal
              handleModal={merchantModal}
              forOpen={newMerchantModal}
              title={`${formData ? 'Edit ' : 'Add '} Merchant`}
            >
              <DynamicForm
                sections={MerchantformFields}
                onSubmit={handleSubmitData}
                defaultValues={formData || {}}
                isEditMode={formData ? true : false}
                handleCancel={merchantModal}
              />
            </Modal>
            <Modal handleModal={handleCancelDelete} forOpen={deleteModal}>
              <DeleteModalContent
                handleCancelDelete={handleCancelDelete}
                handleConfirmDelete={handleConfirmDelete}
              />
            </Modal>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-3.5">
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
                    placeholder="Search Merchants..."
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
                      <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />{' '}
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
                          className="stroke-[1.3]  w-4 h-4 mr-2"
                        />
                        Filter
                        <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100 dark:bg-darkmode-400">
                          3
                        </div>
                      </Popover.Button>
                      <Popover.Panel placement="bottom-end">
                        <div className="p-2">
                          <div>
                            <div className="text-left text-slate-500">
                              Position
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {_.take(merchants.fakeMerchants(), 5).map(
                                (faker, fakerKey) => (
                                  <option key={fakerKey} value={faker.name}>
                                    {faker.name}
                                  </option>
                                ),
                              )}
                            </FormSelect>
                          </div>
                          <div className="mt-3">
                            <div className="text-left text-slate-500">
                              Department
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {_.take(merchants.fakeMerchants(), 5).map(
                                (faker, fakerKey) => (
                                  <option key={fakerKey} value={faker.name}>
                                    {faker.name}
                                  </option>
                                ),
                              )}
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
              columns={Columns.MERCHANTS}
              data={{ rows: allMerchants, totalCount: allMerchants.length }}
              expandedRow={expandedRow ?? 20}
              expandable={true}
              handleRowClick={(index: number) => handleRowClick(index)}
              handleEditModal={handleEditModal}
              handleDeleteData={handledeleteData}
              // params={params}
              // setParams={setParams}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
