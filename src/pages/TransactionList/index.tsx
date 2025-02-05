import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import Payin from "./Payin/payin";
import Payout from "./Payout/payout";
import Modal from "@/pages/Modal/modal";

import Lucide from "@/components/Base/Lucide";
import { useRef, useState } from "react";

function Main() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] =useState("Payins")
  const transactionRef = useRef(null);
  const transactionModal = () => {
    setNewTransactionModal(!newTransactionModal)
  }

  return (
    <>
      <div className="flex flex-col h-10 w-full px-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium group-[.mode--light]:text-white ">
            Transactions
          </div>
          <Modal handleModal={transactionModal} sendButtonRef={transactionRef} forOpen={newTransactionModal} title={title} />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-2">
        <div className="col-span-12">

          <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <Tab.Group>
                <Tab.List variant="tabs">
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={()=>setTitle("Payins")}>
                      <Lucide
                        icon="BadgeIndianRupee"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Payins
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={()=>setTitle("Payouts")}>
                      <Lucide
                        icon="Landmark"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Payouts
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="border-b border-l border-r">
                  <Tab.Panel className="p-5 leading-relaxed">
                    <Payin />
                  </Tab.Panel>
                  <Tab.Panel className="p-5 leading-relaxed">
                    <Payout />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div></>
  );
}

export default Main;
