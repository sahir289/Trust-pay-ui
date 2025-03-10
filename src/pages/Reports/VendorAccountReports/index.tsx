/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Lucide from "@/components/Base/Lucide";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import _ from "lodash";
import CustomTable from "@/components/TableComponent/CommonTable";
import { FormInput, FormSelect } from "@/components/Base/Form";
import { useCallback, useEffect, useState } from "react";
import { Popover } from "@/components/Base/Headless";
// import TomSelect from "@/components/Base/TomSelect";

import React from "react";
import { getApi } from "@/redux-toolkit/api";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { getVendorReports } from "@/redux-toolkit/slices/reports/reportAPI";
import { getVendorReportsSlice } from "@/redux-toolkit/slices/reports/reportSlice";
import { selectReports } from "@/redux-toolkit/slices/reports/reportSelectors";

// import { getApi } from "@/stores/api";
export interface VendorReports {
  sno: number;
  upi_short_code: string;
  amount: string;
  status: string;
  is_notified: boolean;
  merchant_order_id: string;
  user: string;
  currency: string;
  bank_acc_id: string;
  merchant_id: boolean;
  bank_response_id: string;
  payin_merchant_commission: string;
  payin_vendor_commission: string;
  user_submitted_utr: string;
  duration: string;
  is_url_expires: string;
  expiration_date: string;
};

function VendorAccountReports() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vendorCode, setVendorCode] = useState('')
  const dispatch = useAppDispatch();
  const allvendorReports = useAppSelector(selectReports);
  const fetchVendorReports = useCallback(async () => {
    const vendorReport = await getVendorReports();
    dispatch(getVendorReportsSlice(vendorReport));
    console.log(vendorReport, allvendorReports, "vendorReport")
  }, [dispatch]);

  useEffect(() => {
    fetchVendorReports();
  }, [fetchVendorReports]);

  const tableHeaders = [
    { label: "Code", key: "code", type: "text" as const },
    { label: "Id", key: "id", type: "text" as const },
    { label: "Total Payin Count", key: "total_payin_count", type: "text" as const },
    { label: "Total Payin Amount", key: "total_payin_amount", type: "text" as const },
    { label: "Total Payin Commission", key: "total_payin_commission", type: "text" as const },
    { label: "Total Payout Count", key: "total_payout_count", type: "text" as const },
    { label: "Total Payout Amount", key: "total_payout_amount", type: "text" as const },
    { label: "Total Payout Commission", key: "total_payout_commission", type: "text" as const },
    { label: "Total Settlement Count", key: "total_settlement_count", type: "text" as const },
    { label: "Total Settlement Amount", key: "total_settlement_amount", type: "text" as const },
    { label: "Total Chargeback Count", key: "total_chargeback_count", type: "text" as const },
    { label: "Total Chargeback Amount", key: "total_chargeback_amount", type: "text" as const },
    { label: "Current Balance", key: "current_balance", type: "text" as const },
    { label: "Net Balance", key: "net_balance", type: "text" as const },
    { label: "Created At", key: "created_at", type: "text" as const },
    { label: "Updated At", key: "updated_at", type: "text" as const },
    { label: "Calculation User Id", key: "calculation_user_id", type: "text" as const },
    { label: "User Id", key: "vendor_user_id", type: "text" as const },
  ];
  // const [selectedUser, setSelectedUser] = useState("1");

  const handleVendorCode = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setVendorCode(e.target.value)
  }
  async function getVendor() {
    const response = await getApi(`/reports/get-vendors-reports?code=${vendorCode}`, {}, true);
    console.log(response, "response12")
  }

  return (
    <>
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 mt-4 gap-y-3 md:items-center md:flex-row mx-6">
          <div className="text-base text-xl font-medium group-[.mode--light]:text-white">
            Vendor Account Reports
          </div>
          <div className="flex flex-col sm:flex-row gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 mr-3"
              />{" "}
              My Profile
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-row py-10 sm:px-6 ">
          <div className="flex w-full flex-row gap-y-7 md:flex-row px-4 sm:px-2 py-2 sm:py-2  rounded-lg">
            <div className="p-5 w-full flex flex-row mt-3.5 box box--stacked justify-between">
              <div className="mr-2">
                <label className="my-4 px-2">Vendor Codes</label>
                <FormInput
                  type="text"
                  placeholder="Vendor Codes"
                  className="py-3 mt-3 mx-1 h-13"
                  onChange={handleVendorCode}
                  value={vendorCode}
                />
              </div>
              <div className="flex gap-3 mt-3 mx-1">
                <input
                  type="date"
                  placeholder="Start Date"
                  value={startDate}
                  className="py-3 my-2 rounded-lg dark:bg-darkmode-600"
                  onChange={(e) => setStartDate(e.target.value)}

                />
                <input
                  type="date"
                  placeholder="End Date"
                  value={endDate}
                  className="py-3 my-2 rounded-lg dark:bg-darkmode-600"
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <div className="flex gap-3 ">
                  <Button
                    rounded
                    variant="primary"
                    className="px-4 w-35 my-2 border-primary/50 rounded-lg"
                    onClick={getVendor}
                  >
                    Download Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="grid grid-cols-12 gap-y-10 gap-x-6  border-2 border-slate-600 rounded-lg">
        <div className="col-span-12">
          <div className="mt-3.5">
            <div className="flex flex-col ">
              <div className="flex flex-col py-5 sm:items-center sm:flex-row gap-y-2 mx-6">
                <div>
                  <div className="relative">
                    <Lucide
                      icon="Search"
                      className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                    />
                    <FormInput
                      type="text"
                      placeholder="Search PayOuts..."
                      className="pl-9 sm:w-64 rounded-[0.5rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto ">

                  <Popover className="inline-block">
                    {({ }) => (
                      <>
                        <Popover.Panel placement="bottom-end">
                          <div className="p-2">
                            <div>
                              <div className="text-left text-slate-500">User</div>
                              <FormSelect className="flex-1 mt-2">
                                {users.fakeUsers().map((faker, fakerKey) => (
                                  <option key={fakerKey} value={fakerKey}>
                                    {faker.name}
                                  </option>
                                ))}
                              </FormSelect>
                            </div>
                            <div className="mt-3">
                              <div className="text-left text-slate-500">
                                Status
                              </div>
                              <FormSelect className="flex-1 mt-2">

                              </FormSelect>
                            </div>
                            <div className="flex items-center mt-4">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  close();
                                }}
                                className="w-32 ml-auto"
                              >
                                Close
                              </Button>
                              <Button variant="primary" className="w-32 ml-2">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
              <CustomTable
                columns={tableHeaders}
                data={{ rows: allvendorReports, totalCount: 100 }} handleDeleteData={function (): void {
                  throw new Error("Function not implemented.");
                } }              />
            </div>
          </div>
        </div>
      </div></>
  );
}

export default VendorAccountReports;
