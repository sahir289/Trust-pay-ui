import Lucide from "@/components/Base/Lucide";
import Pagination from "@/components/Base/Pagination";
import React from "react";
import { Menu } from "@/components/Base/Headless";
import { FormCheck, FormSwitch, FormSelect } from "@/components/Base/Form";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import { JSX } from "@fullcalendar/core/preact.js";
import Tippy from "@/components/Base/Tippy";
import PasswordVerificationModal from "@/pages/PasswordModal";
import { useState } from "react";
import ModalPopUp from "@/pages/ModalPopUp";
interface CustomTableProps {
  columns: string[];
  data: Array<{ sno: number; code: string; confirmed: boolean; amount: number; status: string; merchant_order_id: string; merchant_code: string; photo: string; name: string; user_submitted_utr: string; utr: string; method: string; id: string; updated_at: string; bankDetails?: string; balance?: number; bankUsedFor?: string; vendors?: string; createdAt?: string; lastScheduledAt?: string; accountName?: string; accountNumber?: string; upiId?: string; orderId?: string; orderStatus?: { textColor: string; icon: string; name: string }; orderDate?: string; referance_date?: string; fromBank?: string; vendor?: string; manager?: string; joinedDate?: string; email?: string; department?: string; position?: string }>;
  title: string;
  status: string[];
}
const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  title,
  status,
}) => {
  interface StatusStyle {
    color: string;
    icon: JSX.Element;
  }

  const getStatusStyles = (status: string): StatusStyle => {
    switch (status) {
      case "Image Pending":
      case "Pending":
        return {
          color: "text-yellow-500",
          icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
      case "Failed":
      case "Dropped":
      case "Rejected":
        return {
          color: "text-red-500",
          icon: (
            <Lucide icon="XCircle" className="w-5 h-5 ml-px stroke-[2.5]" />
          ),
        };
      case "Bank Mismatch":
      case "Duplicate":
      case "Dispute":
        return {
          color: "text-orange-500",
          icon: (
            <Lucide icon="FileWarning" className="w-5 h-5 ml-px stroke-[2.5]" />
          ),
        };
      case "Assigned":
        return {
          color: "text-blue-500",
          icon: (
            <Lucide icon="ListChecks" className="w-5 h-5 ml-px stroke-[2.5]" />
          ),
        };
      case "Success":
        return {
          color: "text-green-500",
          icon: (
            <Lucide icon="CheckCircle" className="w-5 h-5 ml-px stroke-[2.5]" />
          ),
        };
      default:
        return {
          color: "text-gray-500",
          icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
    }
  };
  const [isModalPopupOpen, setIsModalPopupOpen] = useState<boolean>(false);
  const[TitleforDelete,setTitleforDelete]=useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  
const openModal = (open: string): void => {
setIsModalOpen(true);
setTitleforDelete(open);
  }
  const closeModal = (): void => {
    setIsModalOpen(false);
    setIsModalPopupOpen(false)
  };
  interface Verify {
    verify: string;
  }
  const handleVerify = (verify: Verify): void => {
    closeModal();
    setIsModalPopupOpen(true);
    setTitleforDelete(verify.verify);
  };
  return (
    <div>
      <ModalPopUp 
        open={isModalPopupOpen}
        onClose={closeModal}
        title="Update Details"
        fields={[
          { id: "amount", label: "Example", type: "text", placeholder: "Example" },
          { id: "confirmAmount", label: "Confirm Example", type: "text", placeholder: "Confirm Example" },
        ]}
        singleField={[
          { id: "merchantOrderId", label: "Example.com", type: "text", placeholder: "@example.com" }
        ]}
        buttonText="Success"
        onSubmit={() => {}}
        onReset={() => {}}
        button={TitleforDelete}
        resetRef={React.createRef()}
      />
      <PasswordVerificationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onVerify={() => handleVerify({ verify: TitleforDelete })}
      />
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
            {title === "Payins" &&
              _.take(
                _.orderBy(
                  _.filter(data, (o) => _.includes(status, o.status)),
                  ["sno"],
                  ["desc"]
                ),
                10
              ).map((faker, fakerKey) => {
                return (
                  <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <FormCheck.Input type="checkbox" />
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.sno}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.code}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.confirmed}
                      </a>
                    </Table.Td>
                    {columns.length > 15 && (
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker.amount}
                        </a>
                      </Table.Td>
                    )}
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.amount}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div
                        className={`flex items-center gap-2 font-medium whitespace-nowrap ${getStatusStyles(faker.status).color}`}
                      >
                        {getStatusStyles(faker.status).icon as React.ReactNode}
                        {faker.status}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.merchant_order_id}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
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
                            content={faker.name} />
                        </div>
                        <div className="ml-3.5">
                          <a  className="font-medium whitespace-nowrap">
                            {faker.name}
                          </a>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.user_submitted_utr}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.utr}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.method}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
                        {faker.id}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a  className="font-medium whitespace-nowrap">
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
                            content={faker.name} />
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                      <div className="flex items-center justify-center">
                        {faker.status === "Dispute" ||
                          faker.status === "Bank Mismatch" ? (
                          <Menu className="h-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70" />
                            </Menu.Button>

                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide
                                  icon="CheckSquare"
                                  className="w-4 h-4 mr-2" />{" "}
                                Reset
                              </Menu.Item>

                              <Menu.Item className="text-danger">
                                <Lucide icon="Bell" className="w-4 h-4 mr-2" />{" "}
                                Notify
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        ) : (
                          <Menu className="h-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="Bell"
                                className="w-5 h-5 stroke-slate-400/70 fill-green-400/70" />
                            </Menu.Button>
                          </Menu>
                        )}
                      </div>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            {title === "Bankaccounts" &&
              _.take(data, 10).map((account, index) => (
                <Table.Tr key={index} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    {account.accountName}
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                    <div className="text-xs text-slate-500">
                      {account.bankDetails}
                    </div>
                  </Table.Td>{" "}
                  <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                    <div className="text-xs text-slate-500">
                      {account.accountNumber}
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                    <div className="text-xs text-slate-500">
                      {account.upiId}
                    </div>
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
                    <div className="text-xs text-slate-500">
                      {account.balance}
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">
                      {account.bankUsedFor}
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{account.vendors}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{account.createdAt}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">
                      {account.lastScheduledAt}
                    </div>
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
                        <Menu.Button className="w-5 h-5 text-slate-500">
                          <Lucide
                            icon="MoreVertical"
                            className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                          />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item
                           onClick={()=>openModal("List")}
                          >
                            <Lucide icon="Eye" className="w-4 h-4 mr-2" /> List
                          </Menu.Item>
                          <Menu.Item
                            onClick={()=>openModal("Report")}
                          >
                            <Lucide icon="Download" className="w-4 h-4 mr-2" />{" "}
                            Report
                          </Menu.Item>
                          <Menu.Item 
                          onClick={()=>openModal("Edit")}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={()=>openModal("Delete")}                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            {title === "Data Entries" &&
              _.take(data, 10).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
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
                          src={faker.photo}
                          content={faker.name}
                        />
                      </div>
                      <div className="ml-3.5">
                        <a  className="font-medium whitespace-nowrap">
                          {faker.name}
                        </a>
                        <div className="flex text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Product:
                          <a  className="block ml-1 truncate w-44">
                            Purchased: {_.random(2, 10)} Items
                          </a>
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="flex items-center text-primary">
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
                        faker.orderStatus?.textColor || '',
                      ])}
                    >
                      {faker.orderStatus?.icon}
                      <div className="ml-1.5 whitespace-nowrap">
                        {faker.orderStatus?.name}
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">${faker.amount}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.orderDate}</div>
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
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            {title === "Chargebacks" &&
              _.take(
                _.orderBy(data, ["sno"], ["desc"]),
                10
              ).map((faker, _fakerKey) => (
                <Table.Tr key={_fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.sno}
                    </a>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.code}
                    </a>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.merchant_order_id}
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
                        <a  className="font-medium whitespace-nowrap">
                          {faker.name}
                        </a>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.amount}
                    </a>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.referance_date}
                    </a>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.createdAt}
                    </a>
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
                          <Menu.Item 
onClick={()=>openModal("Edit")}                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={()=>openModal("Delete")}                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            {title === "Payouts" &&
              _.take(
                _.orderBy(
                  _.filter(data, (o) =>
                    _.includes(status, o.status)
                  ),
                  ["sno"],
                  ["desc"]
                ),
                10
              ).map((faker, _fakerKey) => (
                <Table.Tr key={_fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                    <div className="flex items-center">
                      <div className="ml-3.5">{faker.sno}</div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <span className="ml-1.5 text-[13px]">
                      {faker.merchant_order_id}
                    </span>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <span className="ml-1.5 text-[13px] ">
                      {faker.merchant_code}
                    </span>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <span className="ml-1.5 text-[13px] ">
                      {faker.bankDetails}
                    </span>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <span className="ml-1.5 text-[13px] ">{faker.amount}</span>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div
                      className={`flex items-center gap-2 font-medium whitespace-nowrap ${getStatusStyles(faker.status).color
                        }`}
                    >
                      {getStatusStyles(faker.status).icon as React.ReactNode}
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
                        <a  className="font-medium whitespace-nowrap">
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
                    <span className="whitespace-nowrap">
                      {faker.updated_at}
                    </span>
                  </Table.Td>
                  <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                    <div className="flex items-center justify-center">
                      <Menu className="h-5">
                        <Menu.Button className="w-5 h-5 text-slate-500">
                          {faker.status === "Rejected" ? (
                            <>
                              {" "}
                              <Lucide
                                icon="Bell"
                                className="w-5 h-5 text-green-500"
                              />
                            </>
                          ) : (
                            <>
                              {" "}
                              <Lucide icon="MoreVertical" className="w-5 h-5" />
                            </>
                          )}
                        </Menu.Button>

                        {faker.status === "Initiated" ? (
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Check" className="w-4 h-4 mr-2" />{" "}
                              Approve
                            </Menu.Item>
                            <Menu.Item className="text-danger">
                              <Lucide icon="X" className="w-4 h-4 mr-2" />{" "}
                              Reject
                            </Menu.Item>
                          </Menu.Items>
                        ) : (
                          <Menu.Items className="w-40">
                            <Menu.Item
                            //  onClick={()=>setApprove(!approve)}
                            >
                              <Lucide
                                icon="Bell"
                                className="w-4 h-4 mr-2 text-green-500"
                              />{" "}
                              Notify
                            </Menu.Item>
                            <Menu.Item className="text-danger">
                              <Lucide icon="X" className="w-4 h-4 mr-2" />{" "}
                              Reject
                            </Menu.Item>
                          </Menu.Items>
                        )}
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            {(title === "Merchants Settlements" ||
              title === "Vendors Settlements") &&
              _.take(data, 10).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
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
                          src={faker.photo}
                          content={faker.name}
                        />
                      </div>
                      <div className="ml-3.5">
                        <a  className="font-medium whitespace-nowrap">
                          {faker.name}
                        </a>
                        <div className="flex text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Product:
                          <a  className="block ml-1 truncate w-44">
                            Purchased: {_.random(2, 10)} Items
                          </a>
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="flex items-center text-primary">
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
                        faker.orderStatus?.textColor,
                      ])}
                    >
                      {faker.orderStatus?.icon}
                      <div className="ml-1.5 whitespace-nowrap">
                        {faker.orderStatus?.name}
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">${faker.amount}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.orderDate}</div>
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
                          <Menu.Item 
                          onClick={()=>openModal("Edit")}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={()=>openModal("Delete")}                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            {title === "Vendors" &&
              _.take(data, 20).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    {fakerKey + 1}
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
                        <a  className="font-medium whitespace-nowrap">
                          {faker.name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.email}
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.department}
                        </div>
                      </Table.Td> */}
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="w-40">
                      <div className="text-xs text-slate-500">
                        {_.random(1, 5)}%
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
                    <div className="whitespace-nowrap">{faker.joinedDate}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.manager}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div
                      className={clsx([
                        "flex ",
                        ["text-success", "text-danger"][_.random(0, 1)],
                      ])}
                    >
                      <Lucide
                        icon="Database"
                        className="w-3.5 h-3.5 stroke-[1.7]"
                      />
                      <div className="ml-1.5 whitespace-nowrap">
                        {_.random(0, 1) ? "Active" : "Inactive"}
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
                          <Menu.Item 
onClick={()=>openModal("Edit")}>                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={()=>openModal("Delete")}                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}

            {title === "Users" &&
              _.take(data, 10).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
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
                        <a  className="font-medium whitespace-nowrap">
                          {faker.name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.email}
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.position}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {faker.department}
                    </div>
                  </Table.Td>
                

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.joinedDate}</div>
                  </Table.Td>
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
            {title === "Roles" &&
              _.take(data, 20).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed  dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed  dark:bg-darkmode-600 ">
                    {fakerKey + 1}
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.position}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {faker.name}
                    </div>
                  </Table.Td>
                  {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.department}
                        </div>
                      </Table.Td> */}

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.manager}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.joinedDate}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.joinedDate}</div>
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
                          <Menu.Item 
                          onClick={()=>openModal("Edit")}>
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={()=>openModal("Delete")}                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            {title === "Designation" &&
              _.take(data, 20).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.position}
                    </a>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a  className="font-medium whitespace-nowrap">
                      {faker.position}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {faker.name}
                    </div>
                  </Table.Td>
                  {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.department}
                        </div>
                      </Table.Td> */}

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.manager}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.joinedDate}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker.joinedDate}</div>
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
                          <Menu.Item  onClick={()=>openModal("Edit")}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={()=>openModal("Delete")}
                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
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
  );
};

export default CustomTable;
