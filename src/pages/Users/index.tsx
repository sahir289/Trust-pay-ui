import Lucide from "@/components/Base/Lucide";
import { Menu, Popover ,Dialog } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormCheck, FormInput, FormSelect,FormLabel,FormSwitch } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import { useState,useRef } from "react";
function Main() {
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
          useState(false);
       const sendButtonRef = useRef(null);
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Users
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setHeaderFooterModalPreview(true);
              }}
           >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Add New User
            </Button>
          </div>
        </div>
        <Dialog
  open={headerFooterModalPreview}
  onClose={() => setHeaderFooterModalPreview(false)}
  initialFocus={sendButtonRef}
>
  <Dialog.Panel>
    <Dialog.Title>
      <h2 className="mr-auto text-base font-medium">Add User</h2>
    </Dialog.Title>
    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
      <div className="col-span-12 sm:col-span-6">
        <FormLabel htmlFor="modal-form-1">Full Name:</FormLabel>
        <FormInput id="modal-form-1" type="text" />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <FormLabel htmlFor="modal-form-1">User Name:</FormLabel>
        <FormInput id="modal-form-1" type="text" />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <FormLabel htmlFor="modal-form-1">Password:</FormLabel>
        <FormInput id="modal-form-1" placeholder="Password" type="text" />
      </div>
       <div className="col-span-12 sm:col-span-6">
      <FormLabel htmlFor="modal-form-6">
                                            Role:
      </FormLabel>
      <FormSelect id="modal-form-6">
                                          <option>one</option>
                                            <option>two</option>
                                            <option>three</option>
                                            <option>four</option>
                                          </FormSelect>
                                        </div>
    </Dialog.Description>
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
</Dialog>
        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col p-5 box box--stacked">
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Registered Users</div>
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
                <div className="text-base text-slate-500">Active Users</div>
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
                <div className="text-base text-slate-500">New Users</div>
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
                    placeholder="Search users..."
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
              <Table className="border-b border-slate-200/60">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      <FormCheck.Input type="checkbox" />
                    </Table.Td>
                     {/* <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                          SNO
                                        </Table.Td> */}
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Admin Name
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      User Name
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t w-52 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Role
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Enabled
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      Last Logged in
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(users.fakeUsers(), 10).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                       <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                      <FormCheck.Input type="checkbox"/>
                    </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        {faker.manager}
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
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
                            <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                              {faker.email}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.department}
                        </div>
                      </Table.Td>
                      {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div className="w-40">
                          <div className="text-xs text-slate-500">
                            {_.random(50, 100)}%
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
                      </Table.Td> */}
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
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div className="whitespace-nowrap">
                          {faker.joinedDate}
                        </div>
                      </Table.Td>
                      {/* <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
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
                      </Table.Td> */}
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
