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
function Main() {
  const [newUserModal, setNewUserModal] = useState(false);
    const [title, setTitle] = useState("Add Bank Account")
    const userRef = useRef(null);
    const userModal = () => {
      setNewUserModal(!newUserModal)
    }
    const [VerificationModal , setVerificationModal] = useState(false);
const [showPassword, setShowPassword] = useState(false);
       const sendButtonRef = useRef(null);
const bankAccounts = [
        {
          accountName:  'HDFC Bank',
          bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
          accountNumber: '123456789012',
          upiId: 'john@hdfc',
          limits: '₹50,000',
          balance: '₹12,500',
          allowIntent: 'Yes',
          allowQR: 'No',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Payouts',
          vendors: 'Vendor A',
          createdAt: '2025-02-01 10:30 AM',
          lastScheduledAt: '2025-02-05 12:00 PM'
        },
        {
            accountName:  'HDFC Bank',
            bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
            accountNumber: '123456789012',
            upiId: 'john@hdfc',
          limits: '₹75,000',
          balance: '₹30,000',
          allowIntent: 'Yes',
          allowQR: 'Yes',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Settlements',
          vendors: 'Vendor B',
          createdAt: '2025-01-30 09:45 AM',
          lastScheduledAt: '2025-02-04 11:15 AM'
        },
        {
            accountName:  'HDFC Bank',
            bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
            accountNumber: '123456789012',
            upiId: 'john@hdfc',
          limits: '₹40,000',
          balance: '₹5,000',
          allowIntent: 'No',
          allowQR: 'Yes',
          showBank: 'No',
          status: 'Inactive',
          action: 'Edit/Delete',
          bankUsedFor: 'Refunds',
          vendors: 'Vendor C',
          createdAt: '2025-01-28 11:00 AM',
          lastScheduledAt: '2025-02-03 10:30 AM'
        },
        {
            accountName:  'HDFC Bank',
            bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
            accountNumber: '123456789012',
            upiId: 'john@hdfc',
          limits: '₹60,000',
          balance: '₹22,000',
          allowIntent: 'Yes',
          allowQR: 'Yes',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Payouts',
          vendors: 'Vendor D',
          createdAt: '2025-02-02 08:15 AM',
          lastScheduledAt: '2025-02-06 01:00 PM'
        },
        {
            accountName:  'HDFC Bank',
          bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
          accountNumber: '123456789012',
          upiId: 'john@hdfc',
          limits: '₹90,000',
          balance: '₹60,000',
          allowIntent: 'Yes',
          allowQR: 'No',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Settlements',
          vendors: 'Vendor E',
          createdAt: '2025-01-31 07:30 AM',
          lastScheduledAt: '2025-02-05 02:45 PM'
        },
        {
            accountName:  'HDFC Bank',
          bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
          accountNumber: '123456789012',
          upiId: 'john@hdfc',
          limits: '₹30,000',
          balance: '₹2,500',
          allowIntent: 'No',
          allowQR: 'Yes',
          showBank: 'No',
          status: 'Inactive',
          action: 'Edit/Delete',
          bankUsedFor: 'Refunds',
          vendors: 'Vendor F',
          createdAt: '2025-01-29 06:45 AM',
          lastScheduledAt: '2025-02-02 11:55 AM'
        },
        {
            accountName:  'HDFC Bank',
            bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
            accountNumber: '123456789012',
            upiId: 'john@hdfc',
          limits: '₹100,000',
          balance: '₹85,000',
          allowIntent: 'Yes',
          allowQR: 'Yes',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Payouts',
          vendors: 'Vendor G',
          createdAt: '2025-02-01 05:00 AM',
          lastScheduledAt: '2025-02-06 04:00 PM'
        },
        {
            accountName:  'HDFC Bank',
            bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
            accountNumber: '123456789012',
            upiId: 'john@hdfc',
          limits: '₹70,000',
          balance: '₹40,500',
          allowIntent: 'Yes',
          allowQR: 'No',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Settlements',
          vendors: 'Vendor H',
          createdAt: '2025-02-03 04:15 AM',
          lastScheduledAt: '2025-02-07 03:20 PM'
        },
        {
            accountName:  'HDFC Bank',
          bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
          accountNumber: '123456789012',
          upiId: 'john@hdfc',
          limits: '₹55,000',
          balance: '₹10,000',
          allowIntent: 'No',
          allowQR: 'Yes',
          showBank: 'No',
          status: 'Inactive',
          action: 'Edit/Delete',
          bankUsedFor: 'Refunds',
          vendors: 'Vendor I',
          createdAt: '2025-01-27 03:30 AM',
          lastScheduledAt: '2025-02-01 05:10 PM'
        },
        {
            accountName:  'HDFC Bank',
            bankDetails: ['HDFC Bank','123456789012','john@hdfc'], 
        accountNumber: '123456789012',
        upiId: 'john@hdfc',
          limits: '₹80,000',
          balance: '₹55,200',
          allowIntent: 'Yes',
          allowQR: 'Yes',
          showBank: 'Yes',
          status: 'Active',
          action: 'Edit/Delete',
          bankUsedFor: 'Payouts',
          vendors: 'Vendor J',
          createdAt: '2025-02-02 02:45 AM',
          lastScheduledAt: '2025-02-06 06:30 PM'
        }
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
     
<Dialog
  open={VerificationModal}
  onClose={() => setVerificationModal(false)}
  initialFocus={sendButtonRef}
>
  <Dialog.Panel>
    <Dialog.Title>
      <h2 className="mr-auto text-base font-medium">Password Verification</h2>
      <Lucide
                                                        icon="X"
                                                        className="w-5 h-5 ml-px stroke-[3]"
                                                        onClick={() => setVerificationModal(false)}
                                                    />
                                                    <Menu className="sm:hidden">
                                                        <Menu.Button
                                                            as="a"
                                                            className="block w-5 h-5"
                                                            href="#"
                                                        >
                                                            <Lucide
                                                                icon="MoreHorizontal"
                                                                className="w-5 h-5 text-slate-500"
                                                            />
                                                        </Menu.Button>

                                                    </Menu>
    </Dialog.Title>
    <fieldset className="col-span-12 sm:col-span-12 border-2 rounded-lg border-gray-200 mx-5 my-2">
      <legend className="ml-4 pt-1 px-2">Password</legend>
      <Dialog.Description>
      <div className="relative col-span-12 sm:col-span-12">
        <FormInput
          id="modal-form-1"
          placeholder="Type here..."
          type={showPassword ? "text" : "password"} // Toggle password visibility
          className="w-full pr-10" // Space for icon
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <Lucide icon="EyeOff" /> : <Lucide icon="Eye" />}
        </button>
      </div>
      </Dialog.Description>
     
    </fieldset>
    <Dialog.Footer>
      <Button variant="primary" type="button" className="w-20" ref={sendButtonRef}>
        Verify
      </Button>
    </Dialog.Footer>
  </Dialog.Panel>
</Dialog>
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
              <Table className="border-b border-slate-200/60 ">
                <Table.Thead>
                  <Table.Tr>
                    {/* <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      <FormCheck.Input type="checkbox" />
                    </Table.Td> */}
                     {/* <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                          SNO
                                        </Table.Td> */}
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Account Name
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Bank Details
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t w-52 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Account Number
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      UPI ID
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Limits
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Balance
                    </Table.Td>
                  
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Bank Used For
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Vendors
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Created at(IST)
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                    Last Scheduled at (IST)
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Allow Intent?
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Allow QR?
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Show Bank
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Status
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Action
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
  {_.take(bankAccounts, 10).map((account, index) => (
    <Table.Tr key={index} className="[&_td]:last:border-b-0">
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        {account.accountName}
      </Table.Td>
      <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
        <div className="text-xs text-slate-500">{account.bankDetails}</div>
      </Table.Td> <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
        <div className="text-xs text-slate-500">{account.accountNumber}</div>
      </Table.Td>
      <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
        <div className="text-xs text-slate-500">{account.upiId}</div>
      </Table.Td>
     <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                             <div className="w-40">
                               <div className="text-xs text-slate-500">
                                 {_.random(50, 99)}K
                               </div>
                               <div className="flex h-1 border rounded-sm bg-slate-50 mt-1.5 dark:bg-darkmode-400">
                                 <div
                                   className={clsx([
                                     "first:rounded-l-sm last:rounded-r-sm border border-primary/20 -m-px bg-primary/40",
                                     [
                                       "w-[35%]",
                                       "w-[45%]",
                                       "w-[55%]",
                                       "w-[65%]",
                                       "w-[75%]",
                                     ][_.random(0, 4)],
                                   ])}
                                 ></div>
                               </div>
                             </div>
                           </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <div className="text-xs text-slate-500">{account.balance}</div>
      </Table.Td>
    
                    
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <div className="whitespace-nowrap">{account.bankUsedFor}</div>
      </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <div className="whitespace-nowrap">{account.vendors}</div>
      </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <div className="whitespace-nowrap">{account.createdAt}</div>
      </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <div className="whitespace-nowrap">{account.lastScheduledAt}</div>
      </Table.Td>
        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                           <FormSwitch.Label
                                                               htmlFor="show-example-1 "
                                                               className="ml-0 "
                                                           >
                                                              
                                                               <FormSwitch.Input
                                                                   id="show-example-1"
                                                                   //   onClick={}
                                                                   className="ml-0 mr-0 border-2 border-slate-300  "
                                                                   type="checkbox"
                                                               />
                                                           </FormSwitch.Label>
                                                       </FormSwitch>
      </Table.Td>
      </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                           <FormSwitch.Label
                                                               htmlFor="show-example-1 "
                                                               className="ml-0 "
                                                           >
                                                              
                                                               <FormSwitch.Input
                                                                   id="show-example-1"
                                                                   //   onClick={}
                                                                   className="ml-0 mr-0 border-2 border-slate-300  "
                                                                   type="checkbox"
                                                               />
                                                           </FormSwitch.Label>
                                                       </FormSwitch>
      </Table.Td>
      </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                           <FormSwitch.Label
                                                               htmlFor="show-example-1 "
                                                               className="ml-0 "
                                                           >
                                                              
                                                               <FormSwitch.Input
                                                                   id="show-example-1"
                                                                   //   onClick={}
                                                                   className="ml-0 mr-0 border-2 border-slate-300  "
                                                                   type="checkbox"
                                                               />
                                                           </FormSwitch.Label>
                                                       </FormSwitch>
      </Table.Td>
      </Table.Td>
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                           <FormSwitch.Label
                                                               htmlFor="show-example-1 "
                                                               className="ml-0 "
                                                           >
                                                              
                                                               <FormSwitch.Input
                                                                   id="show-example-1"
                                                                   //   onClick={}
                                                                   className="ml-0 mr-0 border-2 border-slate-300  "
                                                                   type="checkbox"
                                                               />
                                                           </FormSwitch.Label>
                                                       </FormSwitch>
      </Table.Td>
      </Table.Td>
      <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                        <div className="flex items-center justify-center">
                          <Menu className="h-5">
                            <Menu.Button className="w-5 h-5 text-slate-500" >
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40" 
              >
                              <Menu.Item  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setVerificationModal(true);
                                  }}>
                                <Lucide
                                  icon="Eye"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                List
                              </Menu.Item>
                              <Menu.Item  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setVerificationModal(true);
                                  }}>
                                <Lucide
                                  icon="Download"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Report
                              </Menu.Item>
                              <Menu.Item  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setVerificationModal(true);
                                  }}>
                                <Lucide
                                  icon="CheckSquare"
                                  className="w-4 h-4 mr-2"
                                 
                                />{" "}
                                Edit
                              </Menu.Item>
                              <Menu.Item className="text-danger "  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setVerificationModal(true);
                                  }}>
                                <Lucide
                                  icon="Trash2"
                                  className="w-4 h-4 mr-2"
                                />
                                Delete
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        </div>
                      </Table.Td>
                           
    </Table.Tr>
  ))}
</Table.Tbody>

              </Table>
            </div>
            <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
              <Pagination className="flex-1 w-full mr-auto sm:w-auto">
                <Pagination.Link>
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>1</Pagination.Link>
                <Pagination.Link active>2</Pagination.Link>
                <Pagination.Link>3</Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </Pagination.Link>
              </Pagination>
              <FormSelect className="sm:w-20 rounded-[0.5rem]">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
