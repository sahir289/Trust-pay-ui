import _ from "lodash";
import Lucide from "@/components/Base/Lucide";
import { Tab } from "@/components/Base/Headless";
import AddData from "./AddDataHistory";
import CheckUtrHistory from "./CheckUtrHistory";
import ResetHistory from "./ResetHistory";

function Payin() {

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Data Entries
          </div>
        </div>
        <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
          <div className="flex flex-col p-5 box box--stacked">
            <Tab.Group>
              <Tab.List variant="tabs">
                <Tab>
                  <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
                    <Lucide
                      icon="FileCheck"
                      className="w-5 h-5 ml-px stroke-[2.5]"
                    />&nbsp;
                    Add Data
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
                    <Lucide
                      icon="CheckCircle"
                      className="w-5 h-5 ml-px stroke-[2.5]"
                    />&nbsp;
                    Check UTR
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button className="w-full py-2 flex items-center justify-center" as="button">
                    <Lucide
                      icon="History"
                      className="w-5 h-5 ml-px stroke-[2.5]"
                    />&nbsp;
                    Reset Entry
                  </Tab.Button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="border-b border-l border-r">
                <Tab.Panel className="p-5 leading-relaxed">
                  <AddData />
                </Tab.Panel>
                <Tab.Panel className="p-5 leading-relaxed">
                  <CheckUtrHistory />
                </Tab.Panel>
                <Tab.Panel className="p-5 leading-relaxed">
                  <ResetHistory />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payin;
