import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import ReportDonutChart2 from "@/components/ReportDonutChart2";
import payins from "@/fakers/payins";
import payouts from "@/fakers/payouts";

function VendorBoard() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-5 mt-3.5">
          <div className="flex flex-col col-span-12 p-5 md:col-span-6  box box--stacked">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="BadgeIndianRupee"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="font-medium text-4xl">
                  Deposits
                </div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart2 className="relative z-10" height={400} inputData={payins.fakePayins()} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success/90"></div>
                <div className="ml-2.5">Initiated</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-info/90"></div>
                <div className="ml-2.5">Assigned</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/90"></div>
                <div className="ml-2.5">Success</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-warning/90"></div>
                <div className="ml-2.5">Pending / Image Pending</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-warning/90"></div>
                <div className="ml-2.5">Duplicate / Dispute / Bank Mismatch</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-danger/90"></div>
                <div className="ml-2.5">Dropped / Failed</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6  box box--stacked">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="Calculator"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-4xl font-medium">
                  Calculations
                </div>
              </div>
            </div>
            <div className="justify-center gap-y-3 gap-x-5 mt-5">
              <fieldset className="border-2 rounded-lg border-gray-200 my-2">
                <legend className="ml-4 pt-1 px-2">Entries</legend>
                <div className="flex items-center justify-between mx-2 mb-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full border-primary/10 bg-primary/10">
                      <Lucide
                        icon="BadgeIndianRupee"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                    <div className="ml-2.5 text-lg">Deposits</div>
                  </div>
                  <div className="justify-end ml-2.5 text-lg">₹0.00</div>
                </div>
                <div className="flex items-center justify-between mx-2 mt-2 mb-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full border-primary/10 bg-primary/10">
                      <Lucide
                        icon="ArrowRightCircle"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                    <div className="ml-2.5 text-lg">Withdrawals</div>
                  </div>
                  <div className="justify-end ml-2.5 text-lg">₹0.00</div>
                </div>
                <div className="flex items-center justify-between mx-2 mt-2 mb-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full border-primary/10 bg-primary/10">
                      <Lucide
                        icon="ArrowRightCircle"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                    <div className="ml-2.5 text-lg">Reverse Withdrawals</div>
                  </div>
                  <div className="justify-end ml-2.5 text-lg">₹0.00</div>
                </div>
                <div className="flex items-center justify-between mx-2 mt-2 mb-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full border-primary/10 bg-primary/10">
                      <Lucide
                        icon="BadgePercent"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                    <div className="ml-2.5 text-lg">Commission</div>
                  </div>
                  <div className="justify-end ml-2.5 text-lg">₹0.00</div>
                </div>
                <div className="flex items-center justify-between mx-2 mt-2 mb-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full border-primary/10 bg-primary/10">
                      <Lucide
                        icon="NotebookText"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                    <div className="ml-2.5 text-lg">Settlements</div>
                  </div>
                  <div className="justify-end ml-2.5 text-lg">₹0.00</div>
                </div>
                <div className="flex items-center justify-between mx-2 mt-2 mb-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 border rounded-full border-primary/10 bg-primary/10">
                      <Lucide
                        icon="ArrowLeftCircle"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                    <div className="ml-2.5 text-lg">ChargeBacks</div>
                  </div>
                  <div className="justify-end ml-2.5 text-lg">₹0.00</div>
                </div>
              </fieldset>
              <fieldset className="border-2 rounded-lg border-gray-200 my-2">
                <legend className="ml-4 pt-1 px-2 text-success/90">Current Balance</legend>
              <div className="flex items-center justify-between mx-2 my-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full border-primary/10 bg-primary/10">
                    <Lucide
                      icon="Globe"
                      className="w-6 h-6 text-primary fill-primary/10"
                    />
                  </div>
                  <div className="ml-2.5 text-2xl text-success/90">Current Balance</div>
                </div>
                <div className="justify-end ml-2.5 text-2xl text-success/90">₹0.00</div>
              </div>
              </fieldset>
              <fieldset className="border-2 rounded-lg border-gray-200 my-2">
                <legend className="ml-4 pt-1 px-2 text-info/90">Net Balance</legend>
              <div className="flex items-center justify-between mx-2 my-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full border-primary/10 bg-primary/10">
                    <Lucide
                      icon="Globe"
                      className="w-8 h-8 text-primary fill-primary/10"
                    />
                  </div>
                  <div className="ml-2.5 text-info/90 text-4xl">Net Balance</div>
                </div>
                <div className="justify-end ml-2.5 text-info/90 text-4xl">₹0.00</div>
              </div>
              </fieldset>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 box box--stacked">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="ArrowRightCircle"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-4xl font-medium">
                  Withdrawals
                </div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart2 className="relative z-10" height={400} inputData={payouts.fakePayouts()} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/90"></div>
                <div className="ml-2.5">Approved</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success/90"></div>
                <div className="ml-2.5">Initiated</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-danger/90"></div>
                <div className="ml-2.5">Rejected</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6  box box--stacked">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="NotebookText"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-4xl font-medium">
                  Settlements
                </div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart2 className="relative z-10" height={400} inputData={payouts.fakePayouts()} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/90"></div>
                <div className="ml-2.5">Approved</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success/90"></div>
                <div className="ml-2.5">Initiated</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-danger/90"></div>
                <div className="ml-2.5">Rejected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorBoard;
