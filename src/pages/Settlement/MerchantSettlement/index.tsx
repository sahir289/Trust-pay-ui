/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Lucide from "@/components/Base/Lucide";
import { Dialog, Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
// import TomSelect from "@/components/Base/TomSelect";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import transactions from "@/fakers/transactions";
// import users from "@/fakers/users";
import transactionStatus from "@/fakers/transaction-status";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import React, { useState, useRef } from "react";
import clsx from "clsx";
import _ from "lodash";
function MerchantSettlement() {
  // const [selectedUser, setSelectedUser] = useState("1");
  const [VerificationModal, setVerificationModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const sendButtonRef = useRef(null);
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
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
                          {/* <TomSelect
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
                          </TomSelect> */}
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
                  <Button variant="primary" type="button" className="w-20">
                    Verify
                  </Button>
                </Dialog.Footer>
              </Dialog.Panel>
            </Dialog>
            <div className="overflow-auto">
              <Table className="border-b border-slate-200/60">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      <FormCheck.Input type="checkbox" />
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Customer Name
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Transaction ID
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Status
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Amount
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Date
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t w-36 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Action
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(transactions.fakeTransactions(), 10).map(
                    (faker, fakerKey) => (
                      <Table.Tr
                        key={fakerKey}
                        className="[&_td]:last:border-b-0"
                      >
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <FormCheck.Input type="checkbox" />
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                          <div className="flex items-center">
                            <div className="w-9 h-9 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.user.photo}
                                content={faker.user.name}
                              />
                            </div>
                            <div className="ml-3.5">
                              <a
                                href=""
                                className="font-medium whitespace-nowrap"
                              >
                                {faker.user.name}
                              </a>
                              <div className="flex text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                Product:
                                <a href="" className="block ml-1 truncate w-44">
                                  Purchased: {_.random(2, 10)} Items
                                </a>
                              </div>
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <a href="" className="flex items-center text-primary">
                            <Lucide
                              icon="ExternalLink"
                              className="w-3.5 h-3.5 stroke-[1.7]"
                            />
                            <div className="ml-1.5 text-[13px] whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                              {faker.orderId}
                            </div>
                          </a>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div
                            className={clsx([
                              "flex items-center",
                              faker.orderStatus.textColor,
                            ])}
                          >
                            <Lucide
                              icon={faker.orderStatus.icon}
                              className="w-3.5 h-3.5 stroke-[1.7]"
                            />
                            <div className="ml-1.5 whitespace-nowrap">
                              {faker.orderStatus.name}
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="whitespace-nowrap">
                            ${faker.amount}
                          </div>
                        </Table.Td>
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="whitespace-nowrap">
                            {faker.orderDate}
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
                                <Menu.Item onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setVerificationModal(true);
                                }}>
                                  <Lucide
                                    icon="CheckSquare"
                                    className="w-4 h-4 mr-2"
                                  />{" "}
                                  Edit
                                </Menu.Item>
                                <Menu.Item className="text-danger" onClick={(event: React.MouseEvent) => {
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
    </div>
  );
}

export default MerchantSettlement;
