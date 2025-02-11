import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import { FormInput, FormSelect } from "@/components/Base/Form";
import merchants from "@/fakers/merchants";
import Button from "@/components/Base/Button";
import _ from "lodash";
import { JSX } from "react";
import { useRef, useState } from "react";
import Modal from "../Modal/modal";
import CustomTable from "@/components/TableComponent";

export interface Merchant {
    name: string;
    photo: string;
    code: string;
    site: string;
    apikey: string;
    public_api_key: string;
    balance: string;
    payin_range: string;
    payin_commission: string;
    payout_range: string;
    payout_commission: string;
    test_mode: string;
    allow_intent: string;
    created_at: string;
    actions: string;
}

function Main(): JSX.Element {
    const [newMerchantModal, setNewMerchantModal] = useState(false);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [editModal, setEditModal] = useState<boolean>(false)
    const sendButtonRef = useRef(null);
    const merchantModal = () => {
        setNewMerchantModal(!newMerchantModal)
    }
    const handleRowClick = (fakerKey: number): void => {
        setExpandedRow((prevRow) => (prevRow === fakerKey ? null : fakerKey));
    };

    const tableHeaders: string[] = [
        "Sub Merchants",
        "Code",
        "Site",
        "API Key",
        "Public API Key",
        "Balance",
        "PayIn Range",
        "PayIn Commission",
        "PayOut Range",
        "PayOut Commission",
        "Test Mode",
        "Allow Intent",
        "Created at (IST)",
        "Actions",
    ];
    return (
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
           
      


            <div className="col-span-12">
                <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                    <div className="text-base font-medium group-[.mode--light]:text-white">
                        Merchant
                    </div>

                    <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                        <Modal handleModal={merchantModal} sendButtonRef={sendButtonRef} title="Add Merchant" forOpen={newMerchantModal} />
                    </div>
                </div>
                <div className="flex flex-col gap-8 mt-3.5">
                    <div className="flex flex-col p-5 box box--stacked">
                        <div className="grid grid-cols-4 gap-5">
                            <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                                <div className="text-base text-slate-500">Registered Merchants</div>
                                <div className="mt-1.5 text-2xl font-medium">457,204</div>
                                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                                    <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                                        3%
                                        <Lucide
                                            icon="ChevronDown"
                                            className="w-4 h-4 ml-px stroke-[1.5]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                                <div className="text-base text-slate-500">Active Merchants</div>
                                <div className="mt-1.5 text-2xl font-medium">122,721</div>
                                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                                    <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                                        2%
                                        <Lucide
                                            icon="ChevronUp"
                                            className="w-4 h-4 ml-px stroke-[1.5]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                                <div className="text-base text-slate-500">New Merchants</div>
                                <div className="mt-1.5 text-2xl font-medium">489,223</div>
                                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                                    <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                                        3%
                                        <Lucide
                                            icon="ChevronDown"
                                            className="w-4 h-4 ml-px stroke-[1.5]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                                <div className="text-base text-slate-500">Login Activity</div>
                                <div className="mt-1.5 text-2xl font-medium">411,259</div>
                                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                                    <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                                        8%
                                        <Lucide
                                            icon="ChevronUp"
                                            className="w-4 h-4 ml-px stroke-[1.5]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col box box--stacked">
                        <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
                            <div>
                                <div className="relative">
                                    <Lucide
                                        icon="Search"
                                        className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                                    />
                                    <FormInput
                                        type="text"
                                        placeholder="Search Merchants..."
                                        className="pl-9 sm:w-64 rounded-[0.5rem]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
                                <Menu>
                                    <Menu.Button
                                        as={Button}
                                        variant="outline-secondary"
                                        className="w-full sm:w-auto"
                                    >
                                        <Lucide
                                            icon="Download"
                                            className="stroke-[1.3] w-4 h-4 mr-2"
                                        />
                                        Export
                                        <Lucide
                                            icon="ChevronDown"
                                            className="stroke-[1.3] w-4 h-4 ml-2"
                                        />
                                    </Menu.Button>
                                    <Menu.Items className="w-40">
                                        <Menu.Item>
                                            <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />{" "}
                                            PDF
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />
                                            CSV
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                                <Popover className="inline-block">
                                    {({ close }: { close: () => void }) => (
                                        <>
                                            <Popover.Button
                                                as={Button}
                                                variant="outline-secondary"
                                                className="w-full sm:w-auto"
                                            >
                                                <Lucide
                                                    icon="ArrowDownWideNarrow"
                                                    className="stroke-[1.3]  w-4 h-4 mr-2"
                                                />
                                                Filter
                                                <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100 dark:bg-darkmode-400">
                                                    3
                                                </div>
                                            </Popover.Button>
                                            <Popover.Panel placement="bottom-end">
                                                <div className="p-2">
                                                    <div>
                                                        <div className="text-left text-slate-500">
                                                            Position
                                                        </div>
                                                        <FormSelect className="flex-1 mt-2">
                                                            {_.take(merchants.fakeMerchants(), 5).map(
                                                                (faker, fakerKey) => (
                                                                    <option key={fakerKey} value={faker.name}>
                                                                        {faker.name}
                                                                    </option>
                                                                )
                                                            )}
                                                        </FormSelect>
                                                    </div>
                                                    <div className="mt-3">
                                                        <div className="text-left text-slate-500">
                                                            Department
                                                        </div>
                                                        <FormSelect className="flex-1 mt-2">
                                                            {_.take(merchants.fakeMerchants(), 5).map(
                                                                (faker, fakerKey) => (
                                                                    <option
                                                                        key={fakerKey}
                                                                        value={faker.name}
                                                                    >
                                                                        {faker.name}
                                                                    </option>
                                                                )
                                                            )}
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
                        <CustomTable columns={tableHeaders}
                            data={merchants.fakeMerchants().map((merchant, index) => ({
                                sno: index + 1,
                                code: merchant.code,
                                confirmed: true,
                                amount: 0,
                                status: "active",
                                merchant_order_id: "",
                                merchant_code: merchant.code,
                                photo: merchant.code,
                                name: merchant.name,
                                user_submitted_utr: "",
                                utr: "",
                                site: merchant.site,
                                apikey: merchant.apikey,
                                public_api_key: merchant.public_api_key,
                                balance: Number(merchant.balance),
                                payin_range: merchant.payin_range,
                                payin_commission: merchant.payin_commission,
                                payout_range: merchant.payout_range,
                                payout_commission: merchant.payout_commission,
                                test_mode: merchant.test_mode === "true",
                                allow_intent: merchant.allow_intent === "true",
                                created_at: merchant.created_at,
                                actions: merchant.actions,
                                method: "",
                                id: "",
                                updated_at: "",
                                submerchant: merchant.submerchant.map((sub) => ({
                                    ...sub,
                                    balance: Number(sub.balance),
                                    test_mode: sub.test_mode === "true",
                                    allow_intent: sub.allow_intent === "true",
                                }))
                            }))} title={"Merchants"} status={[]} editModal={editModal.toString()} setEditModal={() => setEditModal(!editModal)} setStatus={()=>{}} expandedRow={expandedRow ?? 20} handleRowClick={(index: number) => handleRowClick(index)} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;



