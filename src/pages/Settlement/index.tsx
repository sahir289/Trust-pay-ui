import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import MerchantSettlement from "./MerchantSettlement";
import VendorSettlement from "./VendorSettlement";
import Modal from "../Modal/modal";
import { useRef, useState } from "react";

function Main() {
    const [newSettlementModal, setNewSettlementModal] = useState(false);
      const [title, setTitle] =useState("Merchant Settlement")
      const transactionRef = useRef(null);
      const settlementModal = () => {
        setNewSettlementModal(!newSettlementModal)
      }
    return (
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
            <div className="col-span-12">
                <div className="flex items-center h-10 mx-3 my-2 justify-between">
                    <div className="text-lg font-medium group-[.mode--light]:text-white">
                        Settlements
                    </div>
                    <div>
                        <Modal state={false} handleModal={settlementModal} sendButtonRef={transactionRef} forOpen={newSettlementModal} title={title}/>
                    </div>
                </div>
                <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
                    <div className="flex flex-col p-5 box box--stacked">
                        <Tab.Group>
                            <Tab.List variant="tabs">
                                <Tab>
                                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={()=>setTitle("Merchant Settlement")}>
                                        <Lucide
                                            icon="CreditCard"
                                            className="w-5 h-5 ml-px stroke-[2.5]"
                                        />&nbsp;
                                        Merchant Settlement
                                    </Tab.Button>
                                </Tab>
                                <Tab>
                                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={()=>setTitle("Vendor Settlement")}>
                                        <Lucide
                                            icon="Store"
                                            className="w-5 h-5 ml-px stroke-[2.5]"
                                        />&nbsp;
                                        Vendor Settlement
                                    </Tab.Button>
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="border-b border-l border-r">
                                <Tab.Panel className="py-5 leading-relaxed">
                                    <MerchantSettlement />
                                </Tab.Panel>
                                <Tab.Panel className="py-5 leading-relaxed">
                                    <VendorSettlement />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
