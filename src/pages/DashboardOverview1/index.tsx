import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import Modal from "@/pages/Modal/modal";
import Lucide from "@/components/Base/Lucide";
import { useRef, useState } from "react";
import MerchantBoard from "./MerchantBoard";
import VendorBoard from "./VendorBoard";

function Main() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] = useState("Merchant");
  const transactionRef = useRef(null);
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
            <div className="flex flex-col p-5 box box--stacked">
              <Tab.Group>
                <Tab.List variant="tabs">
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={() => setTitle("Merchant")}>
                      <Lucide
                        icon="CreditCard"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Merchant Board
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={() => setTitle("Vendor")}>
                      <Lucide
                        icon="Store"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Vendor Board
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="border-b border-l border-r">
                  <Tab.Panel className="p-5 leading-relaxed">
                    <MerchantBoard />
                  </Tab.Panel>
                  <Tab.Panel className="p-5 leading-relaxed">
                    <VendorBoard />
                  </Tab.Panel>
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
