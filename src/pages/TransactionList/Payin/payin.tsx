import React from "react";
import { Tab } from "@/components/Base/Headless";
import AllPayin from "./allPayin";
import CompletedPayin from "./completedPayin";
import InProgressPayin from "./inProgressPayin";
import DroppedPayin from "./droppedPayin";
import Lucide from "@/components/Base/Lucide";
interface PayinProps {
 
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export interface Payins {
  sno: number;
  
  code: string;
  confirmed: boolean;
  amount: number;
  merchant_order_id: string;
  merchant_code: string;
  photo: string;
  name: string;
  user_submitted_utr: string;
  utr: string;
  method: string;
  id: string;
  updated_at: string;
}

const Payin: React.FC<PayinProps> = ({ setStatus }) => {

  return (
    <div className="flex flex-col p-5 ">
     <>
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
            <AllPayin  setStatus={setStatus}  />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <CompletedPayin/>
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <InProgressPayin   setStatus={setStatus}  />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <DroppedPayin />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group></>
    </div>
  );
}

export default Payin;
