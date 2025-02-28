/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import { FormInput, FormSelect } from "@/components/Base/Form";
import users from "@/fakers/users";
import CustomTable from "../../../components/TableComponent";
import transactionStatus from "@/fakers/transaction-status";
import Button from "@/components/Base/Button";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { getAllPayinData } from "@/redux-toolkit/slices/payin/payinSelectors";

interface PayinProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setParams: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  params: Record<string, any>;
}
export interface Payins {
  sno: number;
  code: string;
  confirmed: string;
  payin_merchant_commission: string;
  payin_vendor_commission: string;
  amount: string;
  status: string;
  merchant_order_id: string;
  merchant_code: string;
  photo: string;
  name: string;
  user: string;
  user_submitted_utr: string;
  utr: string;
  method: string;
  id: string;
  updated_at: string;
}

const CompletedPayin: React.FC<PayinProps> = ({setStatus, setId, params, setParams}) => {
  const statusArray: string[] = ['SUCCESS'];
  const theadData: string[] = [
    "SNO",
    "Amount",
    "Requested Amount",
    "Status",
    "Merchant",
    "Vendor",
    "User Submitted UTR",
    "UTR",
    "Image",
    "Action"
  ];

  const payins = useAppSelector(getAllPayinData);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="mt-3.5">
          <div className="flex flex-col">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                    
                  />
                  <FormInput
                    type="text"
                    placeholder="Search Payins..."
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
              setStatus={setStatus} 
              setId={setId}
              columns={theadData} 
              data={payins as unknown as Payins[]} 
              title={"Payins"} 
              status={statusArray}
              params={params}
              setParams={setParams}
              approve={false} 
              setApprove={() => {}} 
              reject={false} 
              setReject={() => {}} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedPayin;
