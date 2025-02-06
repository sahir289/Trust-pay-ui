import React from "react";
import { Tab } from "@/components/Base/Headless";
import AllPayin from "./allPayin";
import CompletedPayin from "./completedPayin";
import InProgressPayin from "./inProgressPayin";
import DroppedPayin from "./droppedPayin";
import Lucide from "@/components/Base/Lucide";
interface PayinProps {
  resetModal: boolean; // Expecting a boolean prop to control modal reset
  setResetModal: React.Dispatch<React.SetStateAction<boolean>>; // The setter function for resetModal
  approve: boolean; // Expecting a boolean prop to control modal reset
  setApprove: React.Dispatch<React.SetStateAction<boolean>>
  setStatus: React.Dispatch<React.SetStateAction<string>>
  status : string;
}
const Payin: React.FC<PayinProps> =({ resetModal, setResetModal, setStatus, status, approve, setApprove })=> {

  return (
    <div className="flex flex-col p-5 ">
      <Tab.Group>
        <Tab.List variant="tabs">
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide
                icon="Globe"
                className="w-5 h-5 ml-px stroke-[2.5]"
              />&nbsp;
              All
            </Tab.Button>
          </Tab>
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide
                icon="BadgeCheck"
                className="w-5 h-5 ml-px stroke-[2.5]"
              />&nbsp;
              Completed
            </Tab.Button>
          </Tab>
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide
                icon="TrendingUp"
                className="w-5 h-5 ml-px stroke-[2.5]"
              />&nbsp;
              Inprogress
            </Tab.Button>
          </Tab>
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide
                icon="Trash2"
                className="w-5 h-5 ml-px stroke-[2.5]"
              />&nbsp;
              Dropped
            </Tab.Button>
          </Tab>
        </Tab.List>
        <Tab.Panels className="border-b border-l border-r">
          <Tab.Panel className="py-5 leading-relaxed">
            <AllPayin resetModal={resetModal} setResetModal={setResetModal} status={status} setStatus={setStatus}/>
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <CompletedPayin />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <InProgressPayin resetModal={resetModal} setResetModal={setResetModal} status={status} setStatus={setStatus} approve={approve} setApprove={setApprove}/>
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <DroppedPayin />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Payin;
