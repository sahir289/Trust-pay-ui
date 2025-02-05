import _ from "lodash";
import { Tab } from "@/components/Base/Headless";
import AllPayout from "./allPayout";
import CompletedPayout from "./completedPayout";
import InProgressPayout from "./inProgressPayout";

function Payin() {

  return (
    // <div className="grid grid-cols-12 gap-y-10 gap-x-6">
    //   <div className="col-span-12">
    //     <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
    //       <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <Tab.Group>
                <Tab.List variant="tabs">
                  <Tab>
                    <Tab.Button
                      className="w-full py-2"
                      as="button"
                    >
                      All
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      className="w-full py-2"
                      as="button"
                    >
                      Completed
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      className="w-full py-2"
                      as="button"
                    >
                      InProgress
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
                </Tab.Panels>
              </Tab.Group>
            </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Payin;
