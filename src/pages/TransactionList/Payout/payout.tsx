import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import AllPayout from "./allPayout";
import CompletedPayout from "./completedPayout";
import InProgressPayout from "./inProgressPayout";
import RejectedPayout from "./rejectedPayout";
import Lucide from "@/components/Base/Lucide";
interface PayinProps {
  reject: boolean; // Expecting a boolean prop to control modal reset
  setReject: React.Dispatch<React.SetStateAction<boolean>>; // The setter function for reject
  approve: boolean; // Expecting a boolean prop to control modal reset
  setApprove: React.Dispatch<React.SetStateAction<boolean>>
}
const Payin: React.FC<PayinProps> =({ reject, setReject, approve, setApprove  })=> {

  return (
    <div className="flex flex-col p-5"><Tab.Group>
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
                icon="BadgeX"
                className="w-5 h-5 ml-px stroke-[2.5]"
              />&nbsp;
            Rejected
          </Tab.Button>
        </Tab>
      </Tab.List>
      <Tab.Panels className="border-b border-l border-r">
        <Tab.Panel className="py-5 leading-relaxed">
          <AllPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove}/>
        </Tab.Panel>
        <Tab.Panel className="py-5 leading-relaxed">
          <CompletedPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove}/>
        </Tab.Panel>
        <Tab.Panel className="py-5 leading-relaxed">
          <InProgressPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove}/>
        </Tab.Panel>
        <Tab.Panel className="py-5 leading-relaxed">
          <RejectedPayout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove}/>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}

export default Payin;
