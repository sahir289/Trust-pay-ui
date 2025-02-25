/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from "@/components/Base/Headless";


import Lucide from "@/components/Base/Lucide";
import AccountReports from "./AccountReports";
import VendorAccountReports from "./VendorAccountReports";
import { useState } from "react";
function Main() {
  const [title, setTitle] = useState("Merchant Account Reports")

  return (
    <>
      <div className="flex flex-col h-10 w-full px-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium group-[.mode--light]:text-white ">
            Reports
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-2">
        <div className="col-span-12">

          <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <Tab.Group>
                <Tab.List variant="tabs">
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={() => setTitle("Merchant Account Reports")} title={title}>
                      <Lucide
                        icon="BadgeIndianRupee"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Merchant Reports
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={() => setTitle("Vendor Account Reports")} title={title}>
                      <Lucide
                        icon="ArrowRightCircle"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Vendor Reports
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="border-b border-l border-r">
                  <Tab.Panel className="p-5 leading-relaxed">
                    <AccountReports />
                  </Tab.Panel>
                  <Tab.Panel className="p-5 leading-relaxed">
                    <VendorAccountReports />
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
