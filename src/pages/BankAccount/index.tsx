/* eslint-disable no-undef */
import Lucide from "@/components/Base/Lucide";
import { FormInput } from "@/components/Base/Form";
import bankaccounts from "@/fakers/bankaccount";
import Modal from "../Modal/modal";
import { useState, useRef, JSX } from "react";
import CustomTable from "@/components/TableComponent";


export interface BankAccount {
  accountName: string;
  bankDetails: string;
  accountNumber: string;
  upiId: string;
  limits: string;
  balance: number;
  bankUsedFor: string;
  vendors: string;
  createdAt: string;
  lastScheduledAt: string;
  allowIntent: boolean;
  allowQR: boolean;
  allowPhonePay: boolean;
  showBank: boolean;
  status: string;
}

function Main(): JSX.Element {
  const [newUserModal, setNewUserModal] = useState<boolean>(false);
      const [editModal, setEditModal] = useState<string>("");
  
  const [title] = useState<string>("Add Bank Account");
  const userRef = useRef<HTMLButtonElement | null>(null);

  const userModal = (): void => {
    setNewUserModal((prev) => !prev);
  };

  const tableHeaders: string[] = [
    "SNO.",
    "Account Name",
    "UPI ID",
    "Limits",
    "Balance",
    "Bank Used For",
    "Vendors",
    "Allow Intent?",
    "Allow QR?",
    "Allow PhonePay",
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
            </div>
            <CustomTable 
              columns={tableHeaders} 
              data={bankaccounts.fakeBankAccounts() as BankAccount[]} 
              title={"Bankaccounts"} 
              status={[]} 
              setEditModal={setEditModal}
              editModal={editModal}
              setStatus={() => {}} 
              setParams={() => {}}
              approve={false} 
              setApprove={() => {}} 
              reject={false}
              setReject={() => {}} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
