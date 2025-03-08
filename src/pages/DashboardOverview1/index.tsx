/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from "@/components/Base/Headless";
import Modal from "@/components/Modal/modal";
import Lucide from "@/components/Base/Lucide";
import { useRef, useState } from "react";
import MerchantBoard from "./MerchantBoard";
import VendorBoard from "./VendorBoard";
import { Role } from "@/constants";

function Main() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] = useState("Merchant");
  const transactionRef = useRef(null);
  const userData = localStorage.getItem("userData");
  const parsedData = userData ? JSON.parse(userData) : null;
  const userRole = parsedData?.designation;
  const transactionModal = () => {
    setNewTransactionModal(!newTransactionModal)
  }

  return (
    <>
      <div className="flex flex-col h-10 w-full px-2">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            DashBoard
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Modal handleModal={transactionModal} sendButtonRef={transactionRef} forOpen={newTransactionModal} title={`${title} Board`} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-2">
        <div className="col-span-12">
          <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked"><Tab.Group>
              <Tab.List variant="tabs">
                {[Role.ADMIN, Role.TRANSACTIONS, Role.MERCHANT_ADMIN, Role.MERCHANT].includes(userRole) && (
                  <Tab>
                    <Tab.Button
                      className="w-full py-2 flex items-center justify-center"
                      as="button"
                      onClick={() => setTitle("Merchant")}
                    >
                      <Lucide icon="CreditCard" className="w-5 h-5 ml-px stroke-[2.5]" />
                      &nbsp;Merchant Board
                    </Tab.Button>
                  </Tab>
                )}
                {[Role.ADMIN, Role.TRANSACTIONS, Role.VENDOR].includes(userRole) && (
                  <Tab>
                    <Tab.Button
                      className="w-full py-2 flex items-center justify-center"
                      as="button"
                      onClick={() => setTitle("Vendor")}
                    >
                      <Lucide icon="Store" className="w-5 h-5 ml-px stroke-[2.5]" />
                      &nbsp;Vendor Board
                    </Tab.Button>
                  </Tab>
                )}
              </Tab.List>
              <Tab.Panels className="border-b border-l border-r">
                {[Role.ADMIN, Role.TRANSACTIONS, Role.MERCHANT_ADMIN, Role.MERCHANT].includes(userRole) && (
                  <Tab.Panel className="p-5 leading-relaxed">
                    <MerchantBoard />
                  </Tab.Panel>
                )}
                {[Role.ADMIN, Role.TRANSACTIONS, Role.VENDOR].includes(userRole) && (
                  <Tab.Panel className="p-5 leading-relaxed">
                    <VendorBoard />
                  </Tab.Panel>
                )}
              </Tab.Panels>
            </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
