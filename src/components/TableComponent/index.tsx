/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
import Lucide from "@/components/Base/Lucide";
import Pagination from "@/components/Base/Pagination";
import React, { useRef, useState, JSX } from "react";
import { Menu } from "@/components/Base/Headless";
import { FormCheck, FormSwitch, FormSelect } from "@/components/Base/Form";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import Tippy from "@/components/Base/Tippy";
import PasswordVerificationModal from "@/pages/PasswordModal";
import ModalTransactionDetails from "@/pages/ModalTransactionDetails/ModalTransactionDetails";
import ModalPopUp from "@/pages/ModalPopUp";
import ModalMerchantEdit from "@/pages/ModalMerchantEdit/ModalMerchantEdit";
import RoleDetails from "@/pages/RolesDetails/RolesDetails";
import DesignationDetails from "@/pages/DesignationDetails/DesignationDetails";
import VendorDetails from "@/pages/VendorDetails/VendorDetails";
import BankDetailsModal from "@/pages/BankAccounts/BankAccountsModal";

interface ICustomTableProps {
  columns?: string[];
  data: Array<{
    sno: number;
    code: string;
    confirmed: boolean;
    amount: number;
    status: string;
    merchant_order_id: string;
    merchant_code: string;
    photo: string;
    name: string;
    user_submitted_utr?: string;
    utr?: string;
    method?: string;
    id?: string;
    updated_at: string;
    bankDetails?: string;
    balance?: number;
    bankUsedFor?: string;
    vendors?: string;
    createdAt?: string;
    lastScheduledAt?: string;
    accountName?: string;
    accountNumber?: string;
    upiId?: string;
    orderId?: string;
    orderStatus?: { textColor: string; icon: string; name: string };
    orderDate?: string;
    referance_date?: string;
    fromBank?: string;
    vendor?: string;
    manager?: string;
    joinedDate?: string;
    email?: string;
    department?: string;
    position?: string;
    site?: string;
    api_key?: string;
    public_api_key?: string;
    payin_range?: string;
    payin_commission?: string;
    payout_commission?: string;
    payin_merchant_commission: string;
    payin_vendor_commission: string;
    user: string;
    payout_range?: string;
    test_mode?: boolean;
    allow_intent?: boolean;
    actions?: string;
    submerchant?: Array<{
      code: string;
      site: string;
      apikey: string;
      public_api_key: string;
      balance: number;
      payin_range: string;
      payin_commission: string;
      payout_range: string;
      payout_commission: string;
      test_mode: boolean;
      allow_intent: boolean;
      created_at: string;
    }>;
  }>;
  title?: string;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  status: string[];
  approve?: boolean;
  setApprove: React.Dispatch<React.SetStateAction<boolean>>;
  reject?: boolean;
  setReject?: React.Dispatch<React.SetStateAction<boolean>>;
  editModal?: string;
  expandedRow?: number;
  handleRowClick?: (index: number) => void;
  setEditModal?: React.Dispatch<React.SetStateAction<string>>;
}

interface DataType {
  sno: number;
  code: string;
  confirmed: boolean;
  amount: number;
  status: string;
  merchant_order_id: string;
  merchant_code: string;
  photo: string;
  name: string;
  user_submitted_utr?: string;
  user_submitted_image?: string;
  utr?: string;
  method?: string;
  id?: string;
  updated_at?: string;
  bankDetails?: string;
  balance?: number;
  bankUsedFor?: string;
  vendors?: string;
  createdAt?: string;
  lastScheduledAt?: string;
  accountName?: string;
  accountNumber?: string;
  upiId?: string;
  orderId?: string;
  orderStatus?: { textColor: string; icon: string; name: string };
  orderDate?: string;
  referance_date?: string;
  fromBank?: string;
  vendor?: string;
  manager?: string;
  joinedDate?: string;
  email?: string;
  department?: string;
  position?: string;
  site?: string;
  api_key?: string;
  public_api_key?: string;
  payin_range?: string;
  payin_commission?: string;
  payout_commission?: string;
  payin_merchant_commission: string;
  payin_vendor_commission: string;
  user: string;
  payout_range?: string;
  test_mode?: boolean;
  allow_intent?: boolean;
  actions?: string;
  vendor_commission?: number;
  submerchant?: Array<{
    code: string;
    site: string;
    apikey: string;
    public_api_key: string;
    balance: number;
    payin_range: string;
    payin_commission: string;
    payout_range: string;
    payout_commission: string;
    test_mode: boolean;
    allow_intent: boolean;
    created_at: string;
  }>;
}

const CustomTable: React.FC<ICustomTableProps> = ({
  data,
  title,
  status,
  approve,
  reject,
  setReject,
  setApprove,
  setStatus,
  editModal,
  expandedRow,
  setEditModal,
  handleRowClick,
  columns, // Add columns as a prop
}) => {
  interface StatusStyle {
    color: string;
    icon: JSX.Element;
  }

  const getStatusStyles = (status: string): StatusStyle => {
    switch (status) {
      case "IMAGE_PENDING":
      case "PENDING":
        return {
          color: "text-yellow-500",
          icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
      case "FAILED":
      case "DROPPED":
      case "REJECTED":
        return {
          color: "text-red-500",
          icon: <Lucide icon="XCircle" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
      case "BANK_MISMATCH":
      case "DUPLICATE":
      case "DISPUTE":
        return {
          color: "text-orange-500",
          icon: <Lucide icon="FileWarning" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
      case "ASSIGNED":
        return {
          color: "text-blue-500",
          icon: <Lucide icon="ListChecks" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
      case "SUCCESS":
        return {
          color: "text-green-500",
          icon: <Lucide icon="CheckCircle" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
      default:
        return {
          color: "text-gray-500",
          icon: <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />,
        };
    }
  };

  const [isModalPopupOpen, setIsModalPopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [settlement, setSettlement] = useState<boolean>(false);
  const [settlementReject, setSettlementreject] = useState<boolean>(false);
  const [addData, setAddata] = useState<boolean>(false);
  const [addMerchant, setAddMerchant] = useState(false);
  const [secondPopUp, setSecondPopup] = useState(false);
  const [addataReject, setAddataReject] = useState<boolean>(false);
  const [TitleforDelete, setTitleforDelete] = useState<string>("");

  const [bankdetails, setBankDetails] = useState<{
    accountName: string;
    bankDetails: string;
    accountNumber: string;
    upiId: string;
    limits: string;
    balance: string;
    allowIntent: boolean;
    allowQR: boolean;
    showBank: boolean;
    status: "Active" | "Inactive";
    action: string;
    bankUsedFor: "Payouts" | "Settlements" | "Payins";
    vendors: string;
    createdAt: string;
    lastScheduledAt: string;
  } | null>(null);

  const [usersDetails, setUsersDetails] = useState<{
    name: string;
    position: string;
    photo: string;
    email: string;
    phone: string;
    department: string;
    location: string;
    joinedDate: string;
    manager: string;
    addressLine1: string;
    addressLine2: string;
    isActive: boolean;
  } | null>(null);

  const [vendorDetails, setVendorDetails] = useState<{
    sno: number;
    code: string;
    vendor_commission: number;
    created_date: string;
    created_by: string;
    status: string;
    action: string;
    confirmed: boolean;
    amount: number;
    merchant_order_id: string;
    merchant_code: string;
    photo: string;
    name: string;
    user_submitted_utr: string;
    utr: string;
    position?: string;
    method: string;
    id: string;
    updated_at: string;
  } | null>(null);

  const [roles, setRoles] = useState<{
    sno: number;
    position: string;
    name: string;
    manager: string;
    joinedDate: string;
    status: string;
    department?: string;
    photo?: string;
  } | null>(null);

  const [merchantDetails, setMerchantDetails] = useState<{
    name: string;
    photo: string;
    code: string;
    site: string;
    apikey: string;
    public_api_key: string;
    balance: string;
    payin_range: string;
    payin_commission: string;
    payout_range: string;
    payout_commission: string;
    test_mode: string;
    allow_intent: string;
    created_at: string;
    actions: string;
  } | null>(null);

  const [details, Roles] = useState<{
    sno: string;
    id: string;
    code: string;
    confirmed: string;
    payin_merchant_commission: string;
    payin_vendor_commission: string;
    amount: string;
    status: string;
    merchant_order_id: string;
    merchant_code: string;
    name: string;
    user_submitted_utr: string;
    utr: string;
    method: string;
    duration: number;
    bank: string;
    updated_at: string;
  } | null>(null);

  const openModal = (open: string): void => {
    setIsModalOpen(true);
    setTitleforDelete(open);
  };

  const closeModal = (): void => {
    setIsModalOpen(!isModalOpen);
    setIsModalPopupOpen(!isModalPopupOpen);
  };

  const secondPop = (): void => {
    setAddMerchant(!addMerchant);
  };

  const settlementModal = () => {
    setSettlement(false);
    setSettlementreject(false);
    setAddata(false);
  };

  const handleVerify = (verify: { verify: string }): void => {
    closeModal();
    setTitleforDelete(verify.verify);
    setSecondPopup(true);
  };

  const handleRejected = () => {
    setAddataReject(false);
  };

  const resetRef = useRef<null>(null);

  return (
    <div>
      <ModalPopUp
        open={isModalPopupOpen}
        onClose={closeModal}
        title=""
        fields={[]}
        singleField={[]}
        buttonText=""
        onSubmit={() => { }}
        onReset={() => { }}
        resetRef={React.createRef()}
      />
      <PasswordVerificationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onVerify={() => handleVerify({ verify: TitleforDelete })}


      />

      {(details && !editModal) && (
        <ModalTransactionDetails
          handleModal={() => Roles(null)}
          transaction={details}
          title={"transaction"}
        />
      )}

      {
        editModal === "merchant" && secondPopUp && setEditModal && merchantDetails && <ModalMerchantEdit handleModal={() => setEditModal("")}
          transaction={{ ...merchantDetails, submerchant: [] }} title={"merchant"} />
      }

      {editModal === "chargeback" && secondPopUp && (
        <ModalPopUp
          open={true}
          onClose={() => setEditModal && setEditModal("")}
          title="Update Transaction"
          fields={[]}
          singleField={[
            { id: "amount", label: "Amount", type: "text", placeholder: "Amount" }
          ]}
          buttonText="Success"
          onSubmit={() => {
            // Handle Success
          }}
          onReset={() => { }}
          resetRef={resetRef}
        />
      )}

      {editModal === "roles" && secondPopUp && roles && (
        <RoleDetails handleModal={() => setEditModal && setEditModal("")}
          transaction={{
            ...roles,
            email: "",
            phone: "",
            location: "",
            addressLine1: "",
            addressLine2: "",
            isActive: false,
            photo: roles.photo || "",
            department: roles.department || "", // Ensure department is always a string
          }}
          title="Role Details" />
      )}

      {editModal === "usersDetails" && secondPopUp && usersDetails && (
        <RoleDetails handleModal={() => setEditModal && setEditModal("")}
          transaction={{ ...usersDetails, sno: 0, status: "" }}
          title="User Details" />
      )}

      {editModal === "designation" && secondPopUp && roles && (
        <DesignationDetails
          handleModal={() => setEditModal && setEditModal("")}
          title="Designation Details"
          transaction={roles} />
      )}

      {editModal === "bankdetails" && secondPopUp === true && bankdetails && (
        <BankDetailsModal handleModal={() => setEditModal && setEditModal("")}
          title="Bank Details"
          transaction={bankdetails} />
      )}

      {editModal === "vendors" && secondPopUp === true && (
        <VendorDetails handleModal={() => setEditModal && setEditModal("")}
          vendor={vendorDetails || { sno: 0, code: '', vendor_commission: 0, created_date: '', created_by: '', status: '', action: '', confirmed: false, amount: 0, merchant_order_id: '', updated_at: '', name: '', method: '' }} />
      )}

      {addData && <ModalPopUp
        open={addData}
        onClose={settlementModal}
        title={"Add data"}
        fields={[
          {
            id: "Transaction ID",
            label: "Transaction ID",
            type: "text",
            placeholder: "Transaction ID"
          },
          {
            id: "Status",
            label: "Status",
            type: "text",
            placeholder: "Status"
          },
          {
            id: "Amount",
            label: "Amount",
            type: "text",
            placeholder: "Amount"
          },
          {
            id: "Date",
            label: "Date",
            type: "text",
            placeholder: "Date"
          }
        ]}
        singleField={[
          {
            id: "Customer Name",
            label: "Customer Name",
            type: "text",
            placeholder: "Customer Name"
          }
        ]}
        buttonText="Success"
        onSubmit={() => {/* Handle Save */ }}
        onReset={settlementModal}
        resetRef={resetRef}
      />}

      {addataReject && <ModalPopUp
        open={true}
        onClose={handleRejected}
        title={"Delete data"}
        fields={[

        ]}
        singleField={[
          {
            id: "Are you sure to delete?",
            label: "Are you sure to delete?",
            type: "text",
            placeholder: ""
          }
        ]}
        buttonText="Success"
        onSubmit={() => {/* Handle Save */ }}
        onReset={handleRejected}
        resetRef={resetRef}
      />}

      {settlement && <ModalPopUp
        open={true}
        onClose={settlementModal}
        title={"Approve Settlement"}
        fields={[]}
        singleField={[

          {
            id: "settlement",
            label: "Settlement",
            type: "text",
            placeholder: "Approve Settlement"
          }
        ]}

        buttonText="Success"
        onSubmit={() => {/* Handle Save */ }}
        onReset={settlementModal}
        resetRef={resetRef}
      />}

      {settlementReject && <ModalPopUp
        open={true}
        onClose={settlementModal}
        title={"Reject Settlement"}
        fields={[]}
        singleField={[
          {
            id: "Reject settlement",
            label: "Reject Settlement",
            type: "text",
            placeholder: "Reject Settlement"
          }
        ]}
        buttonText="Success"
        onSubmit={() => {/* Handle Save */ }}
        onReset={settlementModal}
        resetRef={resetRef}
      />}

      {addMerchant && (
        <ModalPopUp
          open={true}
          onClose={secondPop}
          title={"Add Merchant"}
          fields={[
            {
              id: "merchantCode",
              label: "Name",
              type: "text",
              placeholder: "Merchant Name"
            },
            {
              id: "merchantCode",
              label: "Code",
              type: "text",
              placeholder: "Merchant Code"
            },
            {
              id: "site",
              label: "Site",
              type: "text",
              placeholder: "example@gmail.com"
            },
            {
              id: "returnSite",
              label: "Return Site",
              type: "text",
              placeholder: "example@gmail.com"
            },
            {
              id: "callback",
              label: "Callback",
              type: "text",
              placeholder: "example@gmail.com"
            },
            {
              id: "payoutCallback",
              label: "Payout Callback",
              type: "text",
              placeholder: "example@gmail.com"
            },
            {
              id: "minPayIn",
              label: "Min PayIn",
              type: "text",
              placeholder: "Amount"
            },
            {
              id: "maxPayIn",
              label: "Max PayIn",
              type: "text",
              placeholder: "Amount"
            },
            {
              id: "payInCommission",
              label: "PayIn Commission",
              type: "text",
              placeholder: "Commission Percentage"
            },
            {
              id: "minPayOut",
              label: "Min PayOut",
              type: "text",
              placeholder: "Amount"
            },
            {
              id: "maxPayOut",
              label: "Max PayOut",
              type: "text",
              placeholder: "Amount"
            }, {
              id: "payOutCommission",
              label: "PayOut Commission",
              type: "text",
              placeholder: "Commission Percentage"
            },

          ]}
          singleField={[
            {
              id: "bankName",
              label: "Bank Name",
              type: "text",
              placeholder: "Bank Name"
            }
          ]}
          buttonText="Success"
          onSubmit={() => {/* Handle Save */ }}
          onReset={secondPop}
          resetRef={resetRef}
        />

      )}

      <div className="overflow-auto">
        <Table className="border-b border-slate-200/60">
          <Table.Thead>
            <Table.Tr>
              {title === "Payouts" && <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                <FormCheck.Input type="checkbox" />
              </Table.Td>}
              {columns?.map((col, index) => (
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
              ).map((payin: DataType, index) => {
                return (
                  <Table.Tr key={index} className="[&_td]:last:border-b-0"
                  >
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {
                      Roles({
                        sno: String(payin?.sno), // Convert number to string
                        id: payin?.id || "", // Ensure id exists
                        code: payin?.code,
                        confirmed: String(payin?.confirmed), // Convert boolean to string
                        payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                        payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                        amount: String(payin?.amount), // Convert number to string
                        status: payin?.status,
                        merchant_order_id: payin?.merchant_order_id,
                        merchant_code: payin?.merchant_code,
                        name: payin?.user,
                        user_submitted_utr: payin?.user_submitted_utr || "",
                        utr: payin?.utr || "",
                        method: payin?.method || "",
                        duration: 0, // Ensure duration exists
                        bank: "", // Ensure bank exists
                        updated_at: payin?.updated_at || "", // Ensure updated_at exists
                      });
                    }}>
                      <a className="font-medium whitespace-nowrap">
                        {payin?.sno}
                      </a>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}>
                      <a className="font-medium whitespace-nowrap">
                        ₹ {payin?.confirmed ? payin?.confirmed : 0}
                      </a>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}>
                      <a className="font-medium whitespace-nowrap">
                        ₹ {payin?.amount}
                      </a>
                    </Table.Td>

                    {columns && columns.length > 9 && <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}>
                      <a className="font-medium whitespace-nowrap">
                        {payin?.confirmed}
                      </a>
                    </Table.Td>}

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div
                        className={`flex items-center gap-2 font-medium whitespace-nowrap ${getStatusStyles(payin?.status).color
                          }`}
                      >
                        {getStatusStyles(payin?.status).icon as React.ReactNode}
                        {payin?.status}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}>
                      <a className="font-medium whitespace-nowrap">
                        {payin?.merchant_code}
                      </a>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}
                    >
                      <a className="font-medium whitespace-nowrap">
                        {payin?.user_submitted_utr}
                      </a>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}
                    >
                      <a className="font-medium whitespace-nowrap">
                        {payin?.utr}
                      </a>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"
                      onClick={() => {
                        Roles({
                          sno: String(payin?.sno), // Convert number to string
                          id: payin?.id || "", // Ensure id exists
                          code: payin?.code,
                          confirmed: String(payin?.confirmed), // Convert boolean to string
                          payin_merchant_commission: String(payin?.payin_merchant_commission), // Ensure commission exists
                          payin_vendor_commission: String(payin?.payin_vendor_commission), // Ensure commission exists
                          amount: String(payin?.amount), // Convert number to string
                          status: payin?.status,
                          merchant_order_id: payin?.merchant_order_id,
                          merchant_code: payin?.merchant_code,
                          name: payin?.user,
                          user_submitted_utr: payin?.user_submitted_utr || "",
                          utr: payin?.utr || "",
                          method: payin?.method || "",
                          duration: 0, // Ensure duration exists
                          bank: "", // Ensure bank exists
                          updated_at: payin?.updated_at || "", // Ensure updated_at exists
                        });
                      }}
                    >
                      <div className="flex items-center">
                        <div className="w-9 h-9 image-fit zoom-in">
                          {payin?.user_submitted_image ? <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={payin?.user_submitted_image}
                            content={"User Submitted Image"}
                          /> : null}
                        </div>
                      </div>
                    </Table.Td>
                    
                    <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                      <div className="flex items-center justify-center">
                        {payin?.status === "DISPUTE" ||
                          payin?.status === "BANK_MISMATCH" ? (
                          <Menu className="h-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                              />
                            </Menu.Button>

                            <Menu.Items
                              className="w-40"
                              onClick={() => setStatus && setStatus(payin?.status)}
                            >
                              <Menu.Item>
                                <Lucide
                                  icon="CheckSquare"
                                  className="w-4 h-4 mr-2"
                                />{" "}
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
                            <Menu.Button className="w-5 h-5 text-slate-500" >
                              <Lucide
                                icon="Bell"
                                className="w-5 h-5 stroke-slate-400/70 fill-green-400/70"
                              />
                            </Menu.Button>
                          </Menu>
                        )}
                      </div>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            {title === "Merchants" &&
              _.take(data, 10).map((faker, fakerKey) => (
                <React.Fragment key={fakerKey}>
                  {/* Main row */}
                  <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                    {faker?.submerchant && faker.submerchant.length > 0 ? <Table.Td>
                      <div
                        className="flex mt-2 text-xs text-center bg-blue-500 rounded-full w-7 h-7"
                        onClick={() => handleRowClick && handleRowClick(fakerKey)}
                      >
                        <Lucide
                          icon={expandedRow === fakerKey ? "Minus" : "Plus"}
                          className="block text-white  mx-auto my-auto stroke-3 justify-center items-center"
                        />
                      </div>
                    </Table.Td> : <Table.Td>
                    </Table.Td>}

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {
                      if (setStatus) {
                        setStatus("merchantVerification");
                      }
                      Roles({
                        sno: String(faker?.sno), // Convert number to string
                        id: faker?.id || "", // Ensure id exists
                        code: faker?.code,
                        confirmed: String(faker?.confirmed), // Convert boolean to string
                        payin_merchant_commission: String("0"), // Ensure commission exists
                        payin_vendor_commission: String("0"), // Ensure commission exists
                        amount: String(faker?.amount), // Convert number to string
                        status: faker?.status,
                        merchant_order_id: faker?.merchant_order_id || "", // Ensure merchant_order_id exists
                        merchant_code: faker?.merchant_code || "", // Ensure merchant_code exists
                        name: faker?.name,
                        user_submitted_utr: faker?.user_submitted_utr || "",
                        utr: faker?.utr || "",
                        method: faker?.method || "",
                        duration: 0, // Ensure duration exists
                        bank: "", // Ensure bank exists
                        updated_at: faker?.updated_at || "", // Ensure updated_at exists
                      });
                    }}>
                      <div className="font-medium whitespace-nowrap">
                        {faker?.code}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="font-medium whitespace-nowrap">
                        {faker?.balance}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="font-medium whitespace-nowrap">
                        {faker?.payin_range}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="font-medium whitespace-nowrap">
                        {faker?.payin_commission}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="font-medium whitespace-nowrap">
                        {faker?.payout_range}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="font-medium whitespace-nowrap">
                        {faker?.payin_commission}
                      </div>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <FormSwitch>
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          {faker?.test_mode}
                          <FormSwitch.Input
                            id="show-example-1"
                            className="ml-3 mr-0 border-2 border-slate-300"
                            type="checkbox"
                          />
                        </FormSwitch.Label>
                      </FormSwitch>
                    </Table.Td>

                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <FormSwitch>
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          {faker?.allow_intent}
                          <FormSwitch.Input
                            id="show-example-1"
                            className="ml-3 mr-0 border-2 border-slate-300"
                            type="checkbox"
                          />
                        </FormSwitch.Label>
                      </FormSwitch>
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
                              onClick={() => {
                                setMerchantDetails({
                                  name: faker?.name,
                                  photo: faker?.photo,
                                  code: faker?.code,
                                  site: faker?.site || "",
                                  apikey: faker?.api_key || "",
                                  public_api_key: faker?.public_api_key || "",
                                  balance: String(faker?.balance) || "",
                                  payin_range: faker?.payin_range || "",
                                  payin_commission: faker?.payin_commission || "",
                                  payout_range: faker?.payout_range || "",
                                  payout_commission: faker?.payout_commission || "",
                                  test_mode: String(faker?.test_mode) || "",
                                  allow_intent: String(faker?.allow_intent),
                                  created_at: faker?.createdAt || "",
                                  actions: faker?.actions || "",
                                });
                              }}
                            >
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-2"
                              />{" "}
                              Edit
                            </Menu.Item>
                            <Menu.Item className="text-danger">
                              <Lucide icon="Trash2" className="w-4 h-4 mr-2" />{" "}
                              Delete
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                  {/* Expanded row */}
                  {expandedRow === fakerKey &&
                    faker?.submerchant &&
                    faker?.submerchant.map((sub, subKey) => (
                      <Table.Tr key={`sub-${subKey}`} className="bg-gray-100">
                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"></Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="font-medium whitespace-nowrap">
                            {sub.code}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="font-medium whitespace-nowrap">
                            {sub.balance}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="font-medium whitespace-nowrap">
                            {sub.payin_range}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="font-medium whitespace-nowrap">
                            {sub.payin_commission}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="font-medium whitespace-nowrap">
                            {sub.payout_range}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <div className="font-medium whitespace-nowrap">
                            {sub.payout_commission}
                          </div>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <FormSwitch>
                            <FormSwitch.Label>
                              {sub.test_mode}
                              <FormSwitch.Input type="checkbox" />
                            </FormSwitch.Label>
                          </FormSwitch>
                        </Table.Td>

                        <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                          <FormSwitch>
                            <FormSwitch.Label>
                              {sub.allow_intent}
                              <FormSwitch.Input type="checkbox" />
                            </FormSwitch.Label>
                          </FormSwitch>
                        </Table.Td>

                        <Table.Td className="relative py-4 dark:bg-darkmode-600">
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
                                  onClick={() => {
                                    openModal("List")
                                    if (setStatus) {
                                      setStatus("merchantVerification");
                                    }
                                    setMerchantDetails({
                                      name: faker.name || "",
                                      photo: faker.photo || "",
                                      code: faker.code || "",
                                      site: faker.site || "",
                                      apikey: faker.api_key || "",
                                      public_api_key: faker.public_api_key || "",
                                      balance: String(faker.balance) || "",
                                      payin_range: faker.payin_range || "",
                                      payin_commission: faker.payin_commission || "",
                                      payout_range: faker.payout_range || "",
                                      payout_commission: faker.payout_commission || "",
                                      test_mode: String(faker.test_mode) || "",
                                      allow_intent: String(faker.allow_intent) || "",
                                      created_at: faker.createdAt || "",
                                      actions: faker.actions || "",
                                    });
                                  }}
                                >
                                  <Lucide
                                    icon="CheckSquare"
                                    className="w-4 h-4 mr-2"
                                  />{" "}
                                  Edit
                                </Menu.Item>
                                <Menu.Item className="text-danger">
                                  <Lucide icon="Trash2" className="w-4 h-4 mr-2" />{" "}
                                  Delete
                                </Menu.Item>
                              </Menu.Items>
                            </Menu>
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                </React.Fragment>
              ))}

            {title === "Bankaccounts" &&
              _.take(
                _.orderBy(
                  data,
                  ["sno"],
                  ["desc"]
                ),
                10).map((account, index) => (
                  <Table.Tr key={index} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      {account.sno}
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      {account.accountName}
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                      <div className="text-xs text-slate-500">
                        {account.upiId}
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="w-20">
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
                            <Menu.Item >
                              <Lucide icon="Eye" className="w-4 h-4 mr-2" /> List
                            </Menu.Item>
                            <Menu.Item >
                              <Lucide icon="Download" className="w-4 h-4 mr-2" />{" "}
                              Report
                            </Menu.Item>
                            <Menu.Item onClick={() => {
                              openModal("Edit"); setBankDetails({
                                accountName: account?.accountName || "",
                                bankDetails: account?.bankDetails || "",
                                accountNumber: account?.accountNumber || "",
                                upiId: account?.upiId || "",
                                balance: String(account?.balance) || "",
                                allowIntent: !!account?.allow_intent,
                                status: account?.status === "Active" || account?.status === "Inactive" ? account?.status : "Inactive",
                                bankUsedFor: account?.bankUsedFor as "Payins" | "Payouts" | "Settlements" || "Payins",
                                vendors: account?.vendors || "",
                                createdAt: account?.createdAt || "",
                                lastScheduledAt: account?.lastScheduledAt || "",
                                limits: "", // Add default value for limits
                                allowQR: false, // Add default value for allowQR
                                showBank: false, // Add default value for showBank
                                action: "", // Add default value for action
                              });
                            }}>
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-2"
                              />{" "}
                              Edit
                            </Menu.Item>
                            <Menu.Item
                              className="text-danger"
                              onClick={() => setAddMerchant(!addMerchant)}
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                              Add Merchant
                            </Menu.Item>
                            <Menu.Item
                              className="text-danger"
                            // onClick={
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
            {/* {title === "Merchants" && _.take(data, 10).map((faker, fakerKey) => (
              <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <FormCheck.Input type="checkbox" />
                </Table.Td>
                <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                  <div className="flex items-center">
                    <div className="w-9 h-9 image-fit zoom-in">
                      <Tippy
                        as="img"
                        alt="Tailwise - Admin Dashboard Template"
                        className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        src={faker?.photo}
                        content={faker?.name}
                      />
                    </div>
                    <div className="ml-3.5">
                      <a
                        href=""
                        className="font-medium whitespace-nowrap"
                      >
                        {faker?.name}
                      </a>

                    </div>
                  </div>
                </Table.Td>
                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.code}
                  </a>

                </Table.Td>

                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.site}
                  </a>
                </Table.Td>
                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.api_key}
                  </a>
                </Table.Td><Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.public_api_key}
                  </a>
                </Table.Td><Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.balance}
                  </a>
                </Table.Td>
                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.payin_range}
                  </a>
                </Table.Td>
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
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.payout_range}
                  </a>
                </Table.Td>
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
                <Table.Td className="py-4 border-dashed  dark:bg-darkmode-600">

                  <FormSwitch className="dark:bg-darkmode-200 dark:border-red-500 rounded-lg">
                    <FormSwitch.Label
                      htmlFor="show-example-1 "
                      className="ml-0 "
                    >
                      {faker?.test_mode}
                      <FormSwitch.Input
                        id="show-example-1"
                        //   onClick={}
                        className="ml-0 mr-0 border-2 border-slate-300  "
                        type="checkbox"
                      />
                    </FormSwitch.Label>
                  </FormSwitch>
                </Table.Td>

                <Table.Td className="py-4 border-dashed  dark:bg-darkmode-600">

                  <FormSwitch className="">
                    <FormSwitch.Label
                      htmlFor="show-example-1"
                      className="ml-0 sm:ml-2 "
                    >
                      {faker?.allow_intent}
                      <FormSwitch.Input
                        id="show-example-1"
                        //   onClick={}
                        className="ml-3 mr-0 border-2 border-slate-300  "
                        type="checkbox"
                      />
                    </FormSwitch.Label></FormSwitch>
                </Table.Td>


                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                  <a href="" className="font-medium whitespace-nowrap">
                    {faker?.createdAt}
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
            ))} */}
            {title === "Add Data" &&
              _.take(
                _.orderBy(
                  data,
                  ["sno"],
                  ["desc"]
                ),
                10).map((faker, fakerKey) => (
                  <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      {faker?.sno}
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <div className="w-9 h-9 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker?.photo}
                            content={faker?.name}
                          />
                        </div>
                        <div className="ml-3.5">
                          <a className="font-medium whitespace-nowrap">
                            {faker?.name}
                          </a>
                          <div className="flex text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Product:
                            <a className="block ml-1 truncate w-44">
                              Purchased: {_.random(2, 10)} Items
                            </a>
                          </div>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="flex items-center text-primary">
                        <Lucide
                          icon="ExternalLink"
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ml-1.5 text-[13px] whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                          {faker?.orderId}
                        </div>
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div
                        className={clsx([
                          "flex items-center",
                          faker?.orderStatus?.textColor || "",
                        ])}
                      >
                        {faker?.orderStatus?.icon}
                        <div className="ml-1.5 whitespace-nowrap">
                          {faker?.orderStatus?.name}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="whitespace-nowrap">${faker?.amount}</div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="whitespace-nowrap">{faker?.orderDate}</div>
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
                            <Menu.Item onClick={() => {
                              setAddata(true)
                            }}>
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-2"
                              />{" "}
                              Edit
                            </Menu.Item>
                            <Menu.Item className="text-danger"
                              onClick={() => setAddataReject(true)}>
                              <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                              Delete
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                ))}
            {title === "Check UTR" &&
              _.take(
                _.orderBy(
                  data,
                  ["sno"],
                  ["desc"]
                ),
                10).map((faker, fakerKey) => (
                  <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      {faker?.sno}
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <div className="w-9 h-9 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker?.photo}
                            content={faker?.name}
                          />
                        </div>
                        <div className="ml-3.5">
                          <a className="font-medium whitespace-nowrap">
                            {faker?.name}
                          </a>
                          <div className="flex text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Product:
                            <a className="block ml-1 truncate w-44">
                              Purchased: {_.random(2, 10)} Items
                            </a>
                          </div>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="flex items-center text-primary">
                        <Lucide
                          icon="ExternalLink"
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ml-1.5 text-[13px] whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                          {faker?.orderId}
                        </div>
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div
                        className={clsx([
                          "flex items-center",
                          faker?.orderStatus?.textColor || "",
                        ])}
                      >
                        {faker?.orderStatus?.icon}
                        <div className="ml-1.5 whitespace-nowrap">
                          {faker?.orderStatus?.name}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="whitespace-nowrap">${faker?.amount}</div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="whitespace-nowrap">{faker?.orderDate}</div>
                    </Table.Td>

                  </Table.Tr>
                ))}
            {title === "Reset Entry" &&
              _.take(
                _.orderBy(
                  data,
                  ["sno"],
                  ["desc"]
                ),
                10).map((faker, fakerKey) => (
                  <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      {faker?.sno}
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <div className="w-9 h-9 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker?.photo}
                            content={faker?.name}
                          />
                        </div>
                        <div className="ml-3.5">
                          <a className="font-medium whitespace-nowrap">
                            {faker?.name}
                          </a>
                          <div className="flex text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Product:
                            <a className="block ml-1 truncate w-44">
                              Purchased: {_.random(2, 10)} Items
                            </a>
                          </div>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="flex items-center text-primary">
                        <Lucide
                          icon="ExternalLink"
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ml-1.5 text-[13px] whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                          {faker?.orderId}
                        </div>
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div
                        className={clsx([
                          "flex items-center",
                          faker?.orderStatus?.textColor || "",
                        ])}
                      >
                        {faker?.orderStatus?.icon}
                        <div className="ml-1.5 whitespace-nowrap">
                          {faker?.orderStatus?.name}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="whitespace-nowrap">${faker?.amount}</div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <div className="whitespace-nowrap">{faker?.orderDate}</div>
                    </Table.Td>

                  </Table.Tr>
                ))}
            {title === "Chargebacks" &&
              _.take(_.orderBy(data, ["sno"], ["desc"]), 10).map(
                (faker, _fakerKey) => (
                  <Table.Tr key={_fakerKey} className="[&_td]:last:border-b-0">
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="font-medium whitespace-nowrap">
                        {faker?.sno}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="font-medium whitespace-nowrap">
                        {faker?.code}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="font-medium whitespace-nowrap">
                        {faker?.merchant_order_id}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed w-44 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <div className="w-9 h-9 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker?.photo}
                            content={faker?.name}
                          />
                        </div>
                        <div className="ml-3.5">
                          <a className="font-medium whitespace-nowrap">
                            {faker?.name}
                          </a>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="font-medium whitespace-nowrap">
                        {faker?.amount}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="font-medium whitespace-nowrap">
                        {faker?.referance_date}
                      </a>
                    </Table.Td>
                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                      <a className="font-medium whitespace-nowrap">
                        {faker?.createdAt}
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
                            <Menu.Item onClick={() => openModal("Edit")}>
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-2"
                              />{" "}
                              Edit
                            </Menu.Item>
                            <Menu.Item
                              className="text-danger"
                              onClick={() => openModal("Delete")}
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                              Delete
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                )
              )}
            {title === "Payouts" &&
              _.take(
                _.orderBy(
                  _.filter(data, (o) => _.includes(status, o.status)),
                  ["sno"],
                  ["desc"]
                ),
                10
              ).map((faker, _fakerKey) => (
                <Table.Tr key={_fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <FormCheck.Input type="checkbox" />
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed w-20 dark:bg-darkmode-600" onClick={() => {
                    Roles({
                      sno: String(faker?.sno), // Convert number to string
                      id: faker?.id || "", // Ensure id exists
                      code: faker?.code,
                      confirmed: String(faker?.confirmed), // Convert boolean to string
                      payin_merchant_commission: String("0"), // Ensure commission exists
                      payin_vendor_commission: String("0"), // Ensure commission exists
                      amount: String(faker?.amount), // Convert number to string
                      status: faker?.status,
                      merchant_order_id: faker?.merchant_order_id,
                      merchant_code: faker?.merchant_code,
                      name: faker?.name,
                      user_submitted_utr: faker?.user_submitted_utr || "",
                      utr: faker?.utr || "",
                      method: faker?.method || "",
                      duration: 0, // Ensure duration exists
                      bank: "", // Ensure bank exists
                      updated_at: faker?.updated_at || "", // Ensure updated_at exists
                    });
                  }}>
                    <div className="flex items-center">
                      <div className="ml-3.5">{faker?.sno}</div>
                    </div>
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {
                    Roles({
                      sno: String(faker?.sno), // Convert number to string
                      id: faker?.id || "", // Ensure id exists
                      code: faker?.code,
                      confirmed: String(faker?.confirmed), // Convert boolean to string
                      payin_merchant_commission: String("0"), // Ensure commission exists
                      payin_vendor_commission: String("0"), // Ensure commission exists
                      amount: String(faker?.amount), // Convert number to string
                      status: faker?.status,
                      merchant_order_id: faker?.merchant_order_id,
                      merchant_code: faker?.merchant_code,
                      name: faker?.name,
                      user_submitted_utr: faker?.user_submitted_utr || "",
                      utr: faker?.utr || "",
                      method: faker?.method || "",
                      duration: 0, // Ensure duration exists
                      bank: "", // Ensure bank exists
                      updated_at: faker?.updated_at || "", // Ensure updated_at exists
                    });
                  }}>
                    <span className="ml-1.5 text-[13px] ">{faker?.amount}</span>
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {
                    Roles({
                      sno: String(faker?.sno), // Convert number to string
                      id: faker?.id || "", // Ensure id exists
                      code: faker?.code,
                      confirmed: String(faker?.confirmed), // Convert boolean to string
                      payin_merchant_commission: String("0"), // Ensure commission exists
                      payin_vendor_commission: String("0"), // Ensure commission exists
                      amount: String(faker?.amount), // Convert number to string
                      status: faker?.status,
                      merchant_order_id: faker?.merchant_order_id,
                      merchant_code: faker?.merchant_code,
                      name: faker?.name,
                      user_submitted_utr: faker?.user_submitted_utr || "",
                      utr: faker?.utr || "",
                      method: faker?.method || "",
                      duration: 0, // Ensure duration exists
                      bank: "", // Ensure bank exists
                      updated_at: faker?.updated_at || "", // Ensure updated_at exists
                    });
                  }}>
                    <div
                      className={`flex items-center gap-2 font-medium whitespace-nowrap ${getStatusStyles(faker?.status).color
                        }`}
                    >
                      {getStatusStyles(faker?.status).icon as React.ReactNode}
                      {faker?.status}
                    </div>
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {
                    Roles({
                      sno: String(faker?.sno), // Convert number to string
                      id: faker?.id || "", // Ensure id exists
                      code: faker?.code,
                      confirmed: String(faker?.confirmed), // Convert boolean to string
                      payin_merchant_commission: String("0"), // Ensure commission exists
                      payin_vendor_commission: String("0"), // Ensure commission exists
                      amount: String(faker?.amount), // Convert number to string
                      status: faker?.status,
                      merchant_order_id: faker?.merchant_order_id,
                      merchant_code: faker?.merchant_code,
                      name: faker?.name,
                      user_submitted_utr: faker?.user_submitted_utr || "",
                      utr: faker?.utr || "",
                      method: faker?.method || "",
                      duration: 0, // Ensure duration exists
                      bank: "", // Ensure bank exists
                      updated_at: faker?.updated_at || "", // Ensure updated_at exists
                    });
                  }}>
                    <span className="ml-1.5 text-[13px] ">
                      {faker?.merchant_code}
                    </span>
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {
                    Roles({
                      sno: String(faker?.sno), // Convert number to string
                      id: faker?.id || "", // Ensure id exists
                      code: faker?.code,
                      confirmed: String(faker?.confirmed), // Convert boolean to string
                      payin_merchant_commission: String("0"), // Ensure commission exists
                      payin_vendor_commission: String("0"), // Ensure commission exists
                      amount: String(faker?.amount), // Convert number to string
                      status: faker?.status,
                      merchant_order_id: faker?.merchant_order_id,
                      merchant_code: faker?.merchant_code,
                      name: faker?.name,
                      user_submitted_utr: faker?.user_submitted_utr || "",
                      utr: faker?.utr || "",
                      method: faker?.method || "",
                      duration: 0, // Ensure duration exists
                      bank: "", // Ensure bank exists
                      updated_at: faker?.updated_at || "", // Ensure updated_at exists
                    });
                  }}>
                    <span className="ml-1.5 text-[13px] ">
                      {faker?.merchant_code}
                    </span>
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600" onClick={() => {

                    Roles({
                      sno: String(faker?.sno), // Convert number to string
                      id: faker?.id || "", // Ensure id exists
                      code: faker?.code,
                      confirmed: String(faker?.confirmed), // Convert boolean to string
                      payin_merchant_commission: String("0"), // Ensure commission exists
                      payin_vendor_commission: String("0"), // Ensure commission exists
                      amount: String(faker?.amount), // Convert number to string
                      status: faker?.status,
                      merchant_order_id: faker?.merchant_order_id,
                      merchant_code: faker?.merchant_code,
                      name: faker?.name,
                      user_submitted_utr: faker?.user_submitted_utr || "",
                      utr: faker?.utr || "",
                      method: faker?.method || "",
                      duration: 0, // Ensure duration exists
                      bank: "", // Ensure bank exists
                      updated_at: faker?.updated_at || "", // Ensure updated_at exists
                    });
                  }}>
                    <span className="ml-1.5 text-[13px] ">
                      {faker?.bankDetails}
                    </span>
                  </Table.Td>

                  <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                    <div className="flex items-center justify-center">
                      <Menu className="h-5">
                        <Menu.Button className="w-5 h-5 text-slate-500">
                          {faker?.status === "Rejected" ? (
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

                        {faker?.status === "Initiated" ? (
                          <Menu.Items className="w-40">
                            <Menu.Item
                              onClick={() => setApprove(!approve)}
                            >
                              <Lucide icon="Check" className="w-4 h-4 mr-2" />{" "}
                              Approve
                            </Menu.Item>
                            <Menu.Item
                              className="text-danger"
                              onClick={() => setReject && setReject(!reject)}
                            >
                              <Lucide icon="X" className="w-4 h-4 mr-2" />{" "}
                              Reject
                            </Menu.Item>
                          </Menu.Items>
                        ) : (
                          <Menu.Items className="w-40">
                            <Menu.Item

                            >
                              <Lucide
                                icon="Bell"
                                className="w-4 h-4 mr-2 text-green-500"
                              />{" "}
                              Notify
                            </Menu.Item>
                            <Menu.Item
                              className="text-danger"
                              onClick={() => setReject && setReject(!reject)}
                            >
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
                  <Table.Td className="py-4 border-dashed w-20 dark:bg-darkmode-600">
                    <div className="flex items-center">
                      <div className="ml-3.5">
                        <a className="font-medium whitespace-nowrap">
                          {faker?.sno}
                        </a>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-30 dark:bg-darkmode-600">
                    <div className="flex items-center">
                      <div className="ml-3.5">
                        <a className="font-medium whitespace-nowrap">
                          ${faker?.amount}
                        </a>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-30 dark:bg-darkmode-600">
                    <div
                      className={clsx([
                        "flex items-center",
                        faker?.orderStatus?.textColor,
                      ])}
                    >
                      {faker?.orderStatus?.icon}
                      <div className="ml-1.5 whitespace-nowrap">
                        {faker?.orderStatus?.name}
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.name}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.orderDate}</div>
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
                          <Menu.Item onClick={() => setSettlement(true)}>
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={() => { setSettlementreject(true) }}
                          >
                            <Lucide icon="Trash2" className="w-4 h-4 mr-2"
                            />
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
                    {fakerKey + 1}
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                    <div className="flex items-center">
                      <div className="w-9 h-9 image-fit zoom-in">
                        <Tippy
                          as="img"
                          alt="Tailwise - Admin Dashboard Template"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          src={faker?.photo}
                          content={faker?.name}
                        />
                      </div>
                      <div className="ml-3.5">
                        <a className="font-medium whitespace-nowrap">
                          {faker?.name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker?.email}
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker?.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker?.department}
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
                    <div className="whitespace-nowrap">{faker?.joinedDate}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.manager}</div>
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
                          <Menu.Item onClick={() => {
                            openModal("Edit");
                            setVendorDetails({
                              sno: faker.sno,
                              code: faker.code,
                              vendor_commission: 0,
                              created_date: faker.createdAt || "",
                              created_by: "",
                              status: faker.status,
                              action: "",
                              confirmed: faker.confirmed,
                              amount: faker.amount,
                              merchant_order_id: faker.merchant_order_id,
                              merchant_code: faker.merchant_code,
                              photo: faker.photo,
                              name: faker.name,
                              user_submitted_utr: faker.user_submitted_utr || "",
                              utr: faker.utr || "",
                              position: faker.position,
                              method: faker.method ?? "",
                              id: faker.id || "",
                              updated_at: faker.updated_at
                            });
                          }}
                          >


                            {" "}
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={() => openModal("Delete")}
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

            {title === "Users" &&
              _.take(data, 10).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    {faker?.manager}
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                    <div className="flex items-center">
                      <div className="w-9 h-9 image-fit zoom-in">
                        <Tippy
                          as="img"
                          alt="Tailwise - Admin Dashboard Template"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          src={faker?.photo}
                          content={faker?.name}
                        />
                      </div>
                      <div className="ml-3.5">
                        <a className="font-medium whitespace-nowrap">
                          {faker?.name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker?.email}
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a className="font-medium whitespace-nowrap">
                      {faker?.position}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {faker?.department}
                    </div>
                  </Table.Td>

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.joinedDate}</div>
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
                  </Table.Td><Table.Td>
                    <Menu className="h-5">
                      <Menu.Button className="w-5 h-5 text-slate-500">
                        <Lucide
                          icon="MoreVertical"
                          className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item onClick={() => {
                          setUsersDetails({
                            name: faker.name || "",
                            position: faker.position || "",
                            photo: faker.photo || "",
                            email: faker.email || "",
                            phone: "",
                            department: faker.department || "",
                            location: "",
                            joinedDate: faker.joinedDate || "",
                            manager: faker.manager || "",
                            addressLine1: "",
                            addressLine2: "",
                            isActive: false,
                          })
                        }}
                        >
                          <Lucide
                            icon="CheckSquare"
                            className="w-4 h-4 mr-2"
                          />{" "}
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          className="text-danger"
                          onClick={() => openModal("Delete")}
                        >
                          <Lucide icon="Trash2" className="w-4 h-4 mr-2" />
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
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
                  <Table.Td className="py-4 border-dashed  dark:bg-darkmode-600 ">
                    {fakerKey + 1}
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a className="font-medium whitespace-nowrap">
                      {faker?.position}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {faker?.name}
                    </div>
                  </Table.Td>
                  {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker?.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker?.department}
                        </div>
                      </Table.Td> */}

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.manager}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.joinedDate}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.joinedDate}</div>
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
                            onClick={() => {
                              // Open the modal (you can call a function like openModal("Edit"))
                              openModal("Edit");

                              // Set the roles state with the selected role data
                              setRoles({
                                sno: fakerKey + 1,  // or however you want to generate the serial number
                                position: faker?.position ?? "",
                                name: faker?.name ?? "",
                                manager: faker?.manager ?? "",
                                joinedDate: faker?.joinedDate ?? "",
                                status: "Active",  // or whatever status logic you'd want to apply
                              });
                            }}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={() => openModal("Delete")}
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
            {title === "Designation" &&
              _.take(data, 20).map((faker, fakerKey) => (
                <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a className="font-medium whitespace-nowrap">
                      {faker?.position}
                    </a>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <a className="font-medium whitespace-nowrap">
                      {faker?.position}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {faker?.name}
                    </div>
                  </Table.Td>
                  {/* <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a  className="font-medium whitespace-nowrap">
                          {faker?.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker?.department}
                        </div>
                      </Table.Td> */}

                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.manager}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.joinedDate}</div>
                  </Table.Td>
                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                    <div className="whitespace-nowrap">{faker?.joinedDate}</div>
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
                            onClick={() => {
                              openModal("List")
                              if (setStatus) {
                                setStatus("merchantVerification");
                              }
                              setRoles({
                                sno: fakerKey + 1,  // or however you want to generate the serial number
                                position: faker?.position ?? "",
                                name: faker?.name ?? "",
                                manager: faker?.manager ?? "",
                                joinedDate: faker?.joinedDate ?? "",
                                status: "Active",  // or whatever status logic you'd want to apply
                              });
                            }}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />{" "}
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            className="text-danger"
                            onClick={() => openModal("Delete")}
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
