import Lucide from "@/components/Base/Lucide";
import Pagination from "@/components/Base/Pagination";
import { Menu, Popover } from "@/components/Base/Headless";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import Tippy from "@/components/Base/Tippy";
const CustomTable = ({ columns, data, title, status  }) => {
    const getStatusStyles = (status: string): StatusStyle => {
        switch (status) {
          case "Image Pending":
          case "Pending":
            return {
              color: "text-yellow-500",
              icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />
            };
          case "Failed":
          case "Dropped":
            case "Rejected":
            return {
              color: "text-red-500",
              icon: <Lucide icon="XCircle" className="w-5 h-5 ml-px stroke-[2.5]" />
            };
          case "Bank Mismatch":
          case "Duplicate":
          case "Dispute":
            return {
              color: "text-orange-500",
              icon: <Lucide icon="FileWarning" className="w-5 h-5 ml-px stroke-[2.5]" />
            };
    
          case "Assigned":
            return {
              color: "text-blue-500",
              icon: <Lucide icon="ListChecks" className="w-5 h-5 ml-px stroke-[2.5]" />
            };
    
          case "Success":
            return {
              color: "text-green-500",
              icon: <Lucide icon="CheckCircle" className="w-5 h-5 ml-px stroke-[2.5]" />
            };
    
          default:
            return { color: "text-gray-500", icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" /> };
        }
      };
  return (
    <div className="overflow-auto">
      <Table className="border-b border-slate-200/60">
        <Table.Thead>
          <Table.Tr>
            <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 text-slate-500 dark:bg-darkmode-400">
              <FormCheck.Input type="checkbox" />
            </Table.Td>
            {columns.map((col, index) => (
              <Table.Td
                key={index}
                className="py-4 font-medium border-t bg-slate-50 text-slate-500 dark:bg-darkmode-400"
              >
                {col}
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>    
             {title === "Payins"&&_.take(
                    _.orderBy(
                      _.filter(data.fakePayins(), (o) => _.includes(status, o.status)),
                      ['sno'],
                      ['desc']
                    ),
                    10
                  ).map(
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
                        {columns.length > 15 && (
  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
    <a href="" className="font-medium whitespace-nowrap">
      {faker.amount}
    </a>
  </Table.Td>
)}
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
            {title === "Payouts"&&_.take(_.orderBy(
                      _.filter(data.fakePayouts(), (o) => _.includes(status, o.status)),
                      ['sno'],
                      ['desc']
                    ),
                    10
                  ).map(
                  (faker, fakerKey) => (
                    <Table.Tr key={faker.id} className="[&_td]:last:border-b-0">
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <FormCheck.Input type="checkbox" />
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                        <div className="flex items-center">
                          <div className="ml-3.5">
                           
                              {faker.sno}
                          
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                       
                          <span className="ml-1.5 text-[13px]">{faker.merchant_order_id}</span>
                        
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                       
                          <span className="ml-1.5 text-[13px] ">{faker.merchant_code}</span>
                  
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <span className="ml-1.5 text-[13px] ">{faker.bankDetails}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <span className="ml-1.5 text-[13px] ">{faker.amount}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div className={`flex items-center gap-2 font-medium whitespace-nowrap ${getStatusStyles(faker.status).color}`}>
                          {getStatusStyles(faker.status).icon}
                          {faker.status}
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <span className="whitespace-nowrap">{faker.utr}</span>
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
                        <span className="whitespace-nowrap">{faker.method}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <span className="whitespace-nowrap">{faker.vendor}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <span className="whitespace-nowrap">{faker.fromBank}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <span className="whitespace-nowrap">{faker.id}</span>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <span className="whitespace-nowrap">{faker.updated_at}</span>
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
  { (title === "Merchants" || title === "Vendors")  && _.take(data.fakeTransactions(), 10).map(
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
                              <Menu.Item  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                  ;
                                  }}>
                                <Lucide
                                  icon="CheckSquare"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Edit
                              </Menu.Item>
                              <Menu.Item className="text-danger"  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    ;
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
  );
};

export default CustomTable;
