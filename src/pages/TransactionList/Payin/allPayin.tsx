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
import { Columns } from "lucide-react";
function AllPayin() {
  const [selectedUser, setSelectedUser] = useState("1");
  interface StatusStyle {
    color: string;
    icon: JSX.Element;
  }
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
 
    
  // const getStatusStyles = (status: string): StatusStyle => {
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
            <div className="flex flex-col py-5 sm:items-center sm:flex-row gap-y-2 mx-3">
              <div className="">
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
            <div className="overflow-auto">
            <CustomTable columns={theadData} data={payins} title={"Payins"} status={['Pending', 'Duplicate', 'Dispute', 'Bank Mismatch', 'Image Pending', 'Assigned', 'Initiated','Success','Dropped','Failled']}/>
              {/* <Table className="border-b border-slate-200/60">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      <FormCheck.Input type="checkbox" />
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      SNO.
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Code
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Confirmed
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Amount
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Status
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Merchant Order ID
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Merchant
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      User
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      User Submitted UTR
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      UTR
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Method
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Payin ID
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Updated AT
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Image
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t w-36 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Action
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(_.orderBy(payins.fakePayins(), ['sno'], ['desc']), 10).map(
                    (faker, fakerKey) => (
                      <Table.Tr
                        key={fakerKey}
                        className="[&_td]:last:border-b-0"
                      >
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <FormCheck.Input type="checkbox" />
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.sno}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.code}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.confirmed}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.amount}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className={`flex items-center gap-2 font-medium whitespace-nowrap ${getStatusStyles(faker.status).color}`}>
                            {getStatusStyles(faker.status).icon}
                            {faker.status}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.merchant_order_id}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.merchant_code}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                          <div className="flex items-center">
                            <div className="w-9 h-9 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.photo}
                                content={faker.name}
                              />
                            </div>
                            <div className="ml-3.5">
                              <a
                                href=""
                                className="font-medium whitespace-nowrap"
                              >
                                {faker.name}
                              </a>
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.user_submitted_utr}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.utr}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.method}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.id}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.updated_at}
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                          <div className="flex items-center">
                            <div className="w-9 h-9 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.photo}
                                content={faker.name}
                              />
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                          <div className="flex items-center justify-center">
                            <Menu className="h-5">
                              <Menu.Button className="w-5 h-5 text-slate-500">
                                <Lucide
                                  icon="MoreVertical"
                                  className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                                />
                              </Menu.Button>
                              <Menu.Items className="w-40">
                                <Menu.Item>
                                  <Lucide
                                    icon="CheckSquare"
                                    className="w-4 h-4 mr-2"
                                  />{" "}
                                  Edit
                                </Menu.Item>
                                <Menu.Item className="text-danger">
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
                    )
                  )}
                </Table.Tbody>
              </Table> */}
            </div>
            {/* <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPayin;
