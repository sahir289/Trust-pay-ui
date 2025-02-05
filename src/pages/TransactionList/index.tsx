import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import Payin from "./Payin/payin";
import Payout from "./Payout/payout";
import { BadgeIndianRupee, Landmark } from "lucide-react";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Transactions
          </div>
        </div>
        <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
          <div className="flex flex-col p-5 box box--stacked">
            <Tab.Group>
              <Tab.List variant="tabs">
                <Tab>
                  <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
                    <BadgeIndianRupee className="w-5 h-5" />&nbsp;
                    Payins
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
                    <Landmark className="w-5 h-5" />&nbsp;
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
    </div>
  );
}

export default Main;
