import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import AllPayout from "./allPayout";
import CompletedPayout from "./completedPayout";
import InProgressPayout from "./inProgressPayout";
import { BadgeCheck, BadgeX, Globe, Trash2, TrendingUp } from "lucide-react";
import RejectedPayout from "./rejectedPayout";

function Payin() {

  return (
    <div className="flex flex-col p-5 box box--stacked"><Tab.Group>
      <Tab.List variant="tabs">
        <Tab>
          <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
            <Globe className="w-5 h-5" />&nbsp;
            All
          </Tab.Button>
        </Tab>
        <Tab>
          <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
            <BadgeCheck className="w-5 h-5" />&nbsp;
            Completed
          </Tab.Button>
        </Tab>
        <Tab>
          <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
            <TrendingUp className="w-5 h-5" />&nbsp;
            Inprogress
          </Tab.Button>
        </Tab>
        <Tab>
          <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
            <BadgeX className="w-5 h-5" />&nbsp;
            Rejected
          </Tab.Button>
        </Tab>
      </Tab.List>
      <Tab.Panels className="border-b border-l border-r">
        <Tab.Panel className="p-5 leading-relaxed">
          <AllPayout />
        </Tab.Panel>
        <Tab.Panel className="p-5 leading-relaxed">
          <CompletedPayout />
        </Tab.Panel>
        <Tab.Panel className="p-5 leading-relaxed">
          <InProgressPayout />
        </Tab.Panel>
        <Tab.Panel className="p-5 leading-relaxed">
          <RejectedPayout />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}

export default Payin;
