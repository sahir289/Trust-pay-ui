import React, { useState } from "react";
import { Tab } from "@/components/Base/Headless";
import AllPayout from "./allPayout";
import CompletedPayout from "./completedPayout";
import InProgressPayout from "./inProgressPayout";
import RejectedPayout from "./rejectedPayout";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";

interface PayoutProps {
  setModalData: React.Dispatch<React.SetStateAction<{ open: boolean; type: string }>>;
}

const Payout: React.FC<PayoutProps> = ({ setModalData }) => {
  // ✅ Define missing state variables
  const [reject, setReject] = useState(false);
  const [approve, setApprove] = useState(false);
  console.log(setModalData({ open: false, type: "" }))

  return (
    <div className="flex flex-col p-5">
      <Tab.Group>
        <Tab.List variant="tabs">
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />
              &nbsp; All
            </Tab.Button>
          </Tab>
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide icon="BadgeCheck" className="w-5 h-5 ml-px stroke-[2.5]" />
              &nbsp; Completed
            </Tab.Button>
          </Tab>
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <LoadingIcon icon="ball-triangle" className="w-4 h-4" />
              &nbsp; In Progress
            </Tab.Button>
          </Tab>
          <Tab>
            <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
              <Lucide icon="BadgeX" className="w-5 h-5 ml-px stroke-[2.5]" />
              &nbsp; Rejected
            </Tab.Button>
          </Tab>
        </Tab.List>
        <Tab.Panels className="border-b border-l border-r">
          <Tab.Panel className="py-5 leading-relaxed">
            <AllPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove} />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <CompletedPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove} />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <InProgressPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove} />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <RejectedPayout />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Payout;
