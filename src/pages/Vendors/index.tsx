import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormLabel, FormInput, FormSelect } from "@/components/Base/Form";
import {  Dialog } from "@/components/Base/Headless";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import Modal from "../Modal/modal";
import CustomTable from "@/components/TableComponent";
import { useState,useRef } from "react";
function Main() {
  const [newUserModal, setNewUserModal] = useState(false);
  const tableHeaders = [
    "sno",
    "code",
    "vendor_commission",
    "created_date",
    "created_by",
    "status",
    "action"
  ];
  const userRef = useRef(null);
  const userModal = () => {
    setNewUserModal(!newUserModal)
  }
const sendButtonRef = useRef(null);
const [VerificationModal , setVerificationModal] = useState(false);
const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Vendors
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
          <Modal handleModal={userModal} sendButtonRef={userRef} forOpen={newUserModal} title="Add Vendors" />
          </div>
        </div>
        {/* <Dialog
  open={headerFooterModalPreview}
  onClose={() => setHeaderFooterModalPreview(false)}
  initialFocus={sendButtonRef}
>
  <Dialog.Panel>
    <Dialog.Title>
      <h2 className="mr-auto text-base font-medium">New Vendor</h2>
      <Lucide
                                                        icon="X"
                                                        className="w-5 h-5 ml-px stroke-[3]"
                                                        onClick={() => setHeaderFooterModalPreview(false)}
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
    <legend className="ml-4 pt-1 px-2">Vendor</legend>
    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
      <div className="col-span-12 sm:col-span-12">
        <FormLabel htmlFor="modal-form-1">Code</FormLabel>
        <FormInput id="modal-form-1" type="text" />
      </div>
      <div className="col-span-12 sm:col-span-12">
        <FormLabel htmlFor="modal-form-1">Commision</FormLabel>
        <FormInput id="modal-form-1" type="text" />
      </div>
    </Dialog.Description></fieldset>
    <Dialog.Footer>
      <Button
        type="button"
        variant="outline-secondary"
        onClick={() => setHeaderFooterModalPreview(false)}
        className="w-20 mr-1"
      >
        Cancel
      </Button>
      <Button variant="primary" type="button" className="w-20" ref={sendButtonRef}>
        ok
      </Button>
    </Dialog.Footer>
  </Dialog.Panel>
</Dialog> */}
<Dialog  open={VerificationModal}
  onClose={() => setVerificationModal(false)}
  initialFocus={sendButtonRef}>
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
{/* END: Modal Content */}
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
            <div className="overflow-auto xl:overflow-visible">
              <CustomTable columns={tableHeaders} data={users} title={"Vendors"} status={""}/>
              {/* <Table className="border-b border-slate-200/60">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      SNO
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Code
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Vendor Commission
                    </Table.Td>
                    {/* <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Position
                    </Table.Td> */}
                    {/* <Table.Td className="py-4 font-medium border-t w-52 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Profile Completeness
                    </Table.Td> */}
                    {/* <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Created Date
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Created By
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Status
                    </Table.Td>
                    <Table.Td className="w-20 py-4 font-medium  border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Action
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead> */}
                {/* <Table.Tbody>
                 
                </Table.Tbody> */}
              {/* </Table> */} 
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
