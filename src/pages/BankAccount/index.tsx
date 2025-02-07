import Lucide from "@/components/Base/Lucide";
import { Menu, Popover ,Dialog } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormCheck, FormInput, FormSelect,FormLabel ,FormSwitch} from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import Modal from "../Modal/modal";
import { useState,useRef } from "react";
import CustomTable from "@/components/TableComponent";
function Main() {
  const [newUserModal, setNewUserModal] = useState(false);
    const [title, setTitle] = useState("Add Bank Account")
    const userRef = useRef(null);
    const userModal = () => {
      setNewUserModal(!newUserModal)
    }
   
       type BankAccount = {
        accountName: string;
        bankDetails: string[];
        accountNumber: string;
        upiId: string;
        limits: string;
        balance: string;
        allowIntent: "Yes" | "No";
        allowQR: "Yes" | "No";
        showBank: "Yes" | "No";
        status: "Active" | "Inactive";
        action: string;
        bankUsedFor: "Payouts" | "Settlements" | "Refunds";
        vendors: string;
        createdAt: string;
        lastScheduledAt: string;
      };
      
      const bankAccounts: BankAccount[] = [
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹50,000",
          balance: "₹12,500",
          allowIntent: "Yes",
          allowQR: "No",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Payouts",
          vendors: "Vendor A",
          createdAt: "2025-02-01 10:30 AM",
          lastScheduledAt: "2025-02-05 12:00 PM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹75,000",
          balance: "₹30,000",
          allowIntent: "Yes",
          allowQR: "Yes",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Settlements",
          vendors: "Vendor B",
          createdAt: "2025-01-30 09:45 AM",
          lastScheduledAt: "2025-02-04 11:15 AM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹40,000",
          balance: "₹5,000",
          allowIntent: "No",
          allowQR: "Yes",
          showBank: "No",
          status: "Inactive",
          action: "Edit/Delete",
          bankUsedFor: "Refunds",
          vendors: "Vendor C",
          createdAt: "2025-01-28 11:00 AM",
          lastScheduledAt: "2025-02-03 10:30 AM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹60,000",
          balance: "₹22,000",
          allowIntent: "Yes",
          allowQR: "Yes",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Payouts",
          vendors: "Vendor D",
          createdAt: "2025-02-02 08:15 AM",
          lastScheduledAt: "2025-02-06 01:00 PM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹90,000",
          balance: "₹60,000",
          allowIntent: "Yes",
          allowQR: "No",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Settlements",
          vendors: "Vendor E",
          createdAt: "2025-01-31 07:30 AM",
          lastScheduledAt: "2025-02-05 02:45 PM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹30,000",
          balance: "₹2,500",
          allowIntent: "No",
          allowQR: "Yes",
          showBank: "No",
          status: "Inactive",
          action: "Edit/Delete",
          bankUsedFor: "Refunds",
          vendors: "Vendor F",
          createdAt: "2025-01-29 06:45 AM",
          lastScheduledAt: "2025-02-02 11:55 AM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹100,000",
          balance: "₹85,000",
          allowIntent: "Yes",
          allowQR: "Yes",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Payouts",
          vendors: "Vendor G",
          createdAt: "2025-02-01 05:00 AM",
          lastScheduledAt: "2025-02-06 04:00 PM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹70,000",
          balance: "₹40,500",
          allowIntent: "Yes",
          allowQR: "No",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Settlements",
          vendors: "Vendor H",
          createdAt: "2025-02-03 04:15 AM",
          lastScheduledAt: "2025-02-07 03:20 PM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹55,000",
          balance: "₹10,000",
          allowIntent: "No",
          allowQR: "Yes",
          showBank: "No",
          status: "Inactive",
          action: "Edit/Delete",
          bankUsedFor: "Refunds",
          vendors: "Vendor I",
          createdAt: "2025-01-27 03:30 AM",
          lastScheduledAt: "2025-02-01 05:10 PM"
        },
        {
          accountName: "HDFC Bank",
          bankDetails: ["HDFC Bank", "123456789012", "john@hdfc"],
          accountNumber: "123456789012",
          upiId: "john@hdfc",
          limits: "₹80,000",
          balance: "₹55,200",
          allowIntent: "Yes",
          allowQR: "Yes",
          showBank: "Yes",
          status: "Active",
          action: "Edit/Delete",
          bankUsedFor: "Payouts",
          vendors: "Vendor J",
          createdAt: "2025-02-02 02:45 AM",
          lastScheduledAt: "2025-02-06 06:30 PM"
        }
      ];
      
      const tableHeaders: string[] = [
        "Account Name",
        "Bank Details",
        "Account Number",
        "UPI ID",
        "Limits",
        "Balance",
        "Bank Used For",
        "Vendors",
        "Created at(IST)",
        "Last Scheduled at (IST)",
        "Allow Intent?",
        "Allow QR?",
        "Show Bank",
        "Status",
        "Action"
      ];
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Bank Accounts
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
          <Modal handleModal={userModal} sendButtonRef={userRef} forOpen={newUserModal} title={title} />
          </div>
        </div>
     

        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col p-5 box box--stacked">
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
                <div className="text-base text-slate-500">Transactions Activity</div>
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
                    placeholder="Search Banks..."
                    className="pl-9 sm:w-64 rounded-[0.5rem]"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
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
                            <div className="text-left text-slate-500">
                              Position
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {_.take(users.fakeUsers(), 5).map(
                                (faker, fakerKey) => (
                                  <option key={fakerKey} value={faker.position}>
                                    {faker.position}
                                  </option>
                                )
                              )}
                            </FormSelect>
                          </div>
                          <div className="mt-3">
                            <div className="text-left text-slate-500">
                              Department
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {_.take(users.fakeUsers(), 5).map(
                                (faker, fakerKey) => (
                                  <option
                                    key={fakerKey}
                                    value={faker.department}
                                  >
                                    {faker.department}
                                  </option>
                                )
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
              </div> */}
            </div>
            <div className="overflow-auto">
              <CustomTable columns={tableHeaders} data={bankAccounts} title={"Bankaccounts"} status={""}/>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
