import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import TomSelect from "@/components/Base/TomSelect";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import payins from "@/fakers/payins";
import users from "@/fakers/users";
import transactionStatus from "@/fakers/transaction-status";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import CustomTable from "../../../components/TableComponent";
function InProgressPayin() {
  const [selectedUser, setSelectedUser] = useState("1");

  const theadData = [
    "SNO", 
    "Code", 
    "Confirmed", 
    "Amount", 
    "Status", 
    "Merchant Order ID", 
    "Merchant", 
    "User", 
    "User Submitted UTR", 
    "UTR", 
    "Method", 
    "Payin ID", 
    "Updated AT", 
    "Image", 
    "Action"
  ];
 
  //   switch (status) {
  //     case "Image Pending":
  //     case "Pending":
  //       return {
  //         color: "text-yellow-500",
  //         icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />
  //       };

  //     case "Failed":
  //     case "Dropped":
  //       return {
  //         color: "text-red-500",
  //         icon: <Lucide icon="XCircle" className="w-5 h-5 ml-px stroke-[2.5]" />
  //       };

  //     case "Bank Mismatch":
  //     case "Duplicate":
  //     case "Dispute":
  //       return {
  //         color: "text-orange-500",
  //         icon: <Lucide icon="FileWarning" className="w-5 h-5 ml-px stroke-[2.5]" />
  //       };

  //     case "Assigned":
  //       return {
  //         color: "text-blue-500",
  //         icon: <Lucide icon="ListChecks" className="w-5 h-5 ml-px stroke-[2.5]" />
  //       };

  //     case "Success":
  //       return {
  //         color: "text-green-500",
  //         icon: <Lucide icon="CheckCircle" className="w-5 h-5 ml-px stroke-[2.5]" />
  //       };

  //     default:
  //       return { color: "text-gray-500", icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" /> };
  //   }
  // };

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
                  {({ close }) => (
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
                            <TomSelect
                              className="flex-1 mt-2"
                              value={selectedUser}
                              onChange={(e) => {
                                setSelectedUser(e.target.value);
                              }}
                              options={{
                                placeholder: "Search user",
                              }}
                            >
                              {users.fakeUsers().map((faker, fakerKey) => (
                                <option key={fakerKey} value={fakerKey}>
                                  {faker.name}
                                </option>
                              ))}
                            </TomSelect>
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
           
            <CustomTable columns={theadData} data={payins} title={"Payins"} status={['Pending', 'Duplicate', 'Dispute', 'Bank Mismatch', 'Image Pending', 'Assigned', 'Initiated']}/>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProgressPayin;
