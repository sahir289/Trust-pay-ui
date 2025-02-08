/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Lucide from "@/components/Base/Lucide";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import { useState } from "react";
import { Menu, Popover } from "@/components/Base/Headless";
// import TomSelect from "@/components/Base/TomSelect";
import Pagination from "@/components/Base/Pagination";
import fakeVendorAccount from "@/fakers/vendorreports";

function AccountReports() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // const [selectedUser, setSelectedUser] = useState("1");
  return (

    <>
  <div className="col-span-12">
        <div className="flex flex-col md:h-10 mt-4 gap-y-3 md:items-center md:flex-row mx-6">
          <div className="text-base text-xl font-medium group-[.mode--light]:text-white">
            Vendor Account Reports
          </div>
          <div className="flex flex-col sm:flex-row gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 mr-3"
              />{" "}
              My Profile
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-row py-10 sm:px-6 ">
          <div className="flex w-full flex-row gap-y-7 md:flex-row px-4 sm:px-2 py-2 sm:py-2  rounded-lg">
            <div className="p-5 w-full flex flex-row mt-3.5 box box--stacked justify-between">
              <div className="mr-2">
                <label className="my-4 px-2">Vendor Codes</label>
                <FormInput
                  type="text"
                  placeholder="Vendor Codes"
                  className="py-3 mt-3 mx-1 h-13"
                />
                </div>
              <div className="flex gap-3 mt-3 mx-1">
                <input
                  type="date"
                  placeholder="Start Date"
                  value={startDate}
                  className="py-3 my-2 rounded-lg dark:bg-darkmode-600"
                  onChange={(e) => setStartDate(e.target.value)}

                />
                <input
                  type="date"
                  placeholder="End Date"
                  value={endDate}
                  className="py-3 my-2 rounded-lg dark:bg-darkmode-600"
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <div className="flex gap-3 ">
                  <Button
                    rounded
                    variant="primary"
                    className="px-4 w-35 my-2 border-primary/50 rounded-lg"
                  >
                    Download Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        


      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="mt-3.5">
            <div className="flex flex-col ">
              <div className="flex flex-col py-5 sm:items-center sm:flex-row gap-y-2 mx-6">
                <div>
                  <div className="relative">
                    <Lucide
                      icon="Search"
                      className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                    />
                    <FormInput
                      type="text"
                      placeholder="Search Payouts..."
                      className="pl-9 sm:w-64 rounded-[0.5rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto ">

                  <Popover className="inline-block">
                    {({ }) => (
                      <>
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
              <div className="overflow-auto mx-4">
                <Table className="border border-slate-200/60 rounded-md">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        <FormCheck.Input type="checkbox" />
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Date
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Vendor Code
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Pay-In Count
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Pay-In Amount
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Pay-In Commission
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Pay-Out Count
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Pay-Out Amount
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Pay-Out Commission
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Reversed Pay-Out
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Reversed Pay-Out Amount
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Reversed Pay-Out Commission
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Settlement Count
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Settlement Amount
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Current Balance
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Net Balance
                      </Table.Td>
                      <Table.Td className="py-4 font-medium text-center border-t w-36 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                        Action
                      </Table.Td>
                    </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>
                    {_.take(fakeVendorAccount.fakeVendorReport(), 10).map(
                      (faker, fakerKey) => (
                        <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <FormCheck.Input type="checkbox" />
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.date}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.vendorCode}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.payInCount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.payInAmount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.payInCommission}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.payOutCount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.payOutAmount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.payOutCommission}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.reversedPayOut}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.reversedPayoutAmount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.reversedPayoutCommission}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.settlementCount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.settlementAmount}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.currentBalance}</span>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <span className="whitespace-nowrap">{faker.netBalance}</span>
                          </Table.Td>
                          <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                            <div className="flex items-center justify-center">
                              <Menu className="h-5">
                                <Menu.Button className="w-5 h-5 text-slate-500">
                                  <Lucide icon="MoreVertical" className="w-5 h-5" />
                                </Menu.Button>
                                <Menu.Items className="w-40">
                                  <Menu.Item>
                                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" /> Edit
                                  </Menu.Item>
                                  <Menu.Item className="text-danger">
                                    <Lucide icon="Trash2" className="w-4 h-4 mr-2" /> Delete
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      )
                    )}
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
      </div></>
  );
}

export default AccountReports;
