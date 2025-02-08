import Lucide from "@/components/Base/Lucide";
import {  Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormCheck, FormInput, FormSelect, FormSwitch } from "@/components/Base/Form";
import merchants from "@/fakers/merchants";

import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";
import React, { useRef, useState } from "react";
import Modal from "../Modal/modal";

function Merchant() {
    const [newMerchantModal, setNewMerchantModal] = useState(false);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const sendButtonRef = useRef(null);
    const merchantModal = () => {
        setNewMerchantModal(!newMerchantModal)
    }

 


    const handleRowClick = (fakerKey: number): void => {
        setExpandedRow((prevRow) => (prevRow === fakerKey ? null : fakerKey));
        setClick(!click);
    };

    const [click, setClick] = useState(false)
    console.log(expandedRow, "expanded")
    return (
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
            <div className="col-span-12">
                <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                    <div className="text-base font-medium group-[.mode--light]:text-white">
                        Merchant
                    </div>

                    <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                        <Modal  handleModal={merchantModal} sendButtonRef={sendButtonRef} title="Add Merchant" forOpen={newMerchantModal} />
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
                                <div className="mt-1.5 text-2xl font-mediumm">489,223</div>
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
                                <div className="mt-1.5 text-2xl font-mediumm">411,259</div>
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
                        <div className="overflow-auto">
                            <Table className="border-b border-slate-200/60">
                                <Table.Thead>
                                    <Table.Tr >
                                        <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            <FormCheck.Input type="checkbox" />
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Sub Merchants
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Code
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t w-52 bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Site
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            API Key
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Public API Key
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Balance
                                        </Table.Td><Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            PayIn Range
                                        </Table.Td>
                                        <Table.Td className="w-20 py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            PayIn Commission
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            PayOut Range
                                        </Table.Td>
                                        <Table.Td className="w-20 py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            PayOut Commission
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Test Mode
                                        </Table.Td>
                                        <Table.Td className="w-20 py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Allow Intent
                                        </Table.Td>
                                        <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Created at (IST)
                                        </Table.Td>
                                        <Table.Td className="w-20 py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500 dark:bg-darkmode-400">
                                            Actions
                                        </Table.Td>

                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                {/* {_.take(_.orderBy(chargebacks.fakeChargeBacks(), ['sno'], ['desc']), 10).map( */}

                                    {_.take(_.orderBy(merchants.fakeMerchants(),['sno'],['desc']), 10).map((faker, fakerKey) => (
                                        <React.Fragment key={fakerKey}>
                                            {/* Main row */}
                                            <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <FormCheck.Input type="checkbox" />
                                                </Table.Td>
                                                <Table.Td>
                                                    <div
                                                        className="flex mt-2 text-xs text-center bg-blue-500 rounded-full w-7 h-7"
                                                        onClick={() => handleRowClick(fakerKey)}
                                                    >
                                                        <Lucide
                                                            icon={expandedRow === fakerKey ? "Minus" : "Plus"}
                                                            className="block text-white  mx-auto my-auto stroke-3 justify-center items-center"
                                                        />
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.code}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.site}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.apikey}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.public_api_key}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.balance}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.payin_range}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.payin_commission}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.payout_range}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.payout_commission}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <FormSwitch className="dark:bg-darkmode-200 dark:border-red-500 rounded-lg">
                                                        <FormSwitch.Label htmlFor="show-example-1" className="ml-0">
                                                            {faker.test_mode}
                                                            <FormSwitch.Input
                                                                id="show-example-1"
                                                                className="ml-0 mr-0 border-2 border-slate-300"
                                                                type="checkbox"
                                                            />
                                                        </FormSwitch.Label>
                                                    </FormSwitch>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <FormSwitch>
                                                        <FormSwitch.Label htmlFor="show-example-1" className="ml-0 sm:ml-2">
                                                            {faker.allow_intent}
                                                            <FormSwitch.Input
                                                                id="show-example-1"
                                                                className="ml-3 mr-0 border-2 border-slate-300"
                                                                type="checkbox"
                                                            />
                                                        </FormSwitch.Label>
                                                    </FormSwitch>
                                                </Table.Td>
                                                <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                    <div  className="font-medium whitespace-nowrap">
                                                        {faker.created_at}
                                                    </div>
                                                </Table.Td>
                                                <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                                                    <div className="flex items-center justify-center">
                                                        <Menu className="h-5">
                                                            <Menu.Button className="w-5 h-5 text-slate-500">
                                                                <Lucide
                                                                    icon="MoreVertical"
                                                                    className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                                                                />
                                                            </Menu.Button>
                                                            <Menu.Items className="w-40">
                                                                <Menu.Item>
                                                                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" /> Edit
                                                                </Menu.Item>
                                                                <Menu.Item className="text-danger">
                                                                    <Lucide icon="Trash2" className="w-4 h-4 mr-2" /> Delete
                                                                </Menu.Item>
                                                            </Menu.Items>
                                                        </Menu>
                                                    </div>
                                                </Table.Td>
                                            </Table.Tr>

                                            {/* Expanded row */}
                                            {expandedRow === fakerKey && faker.submerchant.map((sub, subKey) => (
                                                <Table.Tr key={`sub-${subKey}`} className="bg-gray-100">
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"></Table.Td> 
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600"></Table.Td> 

                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.code}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.site}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.apikey}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.public_api_key}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.balance}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.payin_range}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.payin_commission}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.payout_range}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.payout_commission}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <FormSwitch>
                                                            <FormSwitch.Label>{sub.test_mode}
                                                                <FormSwitch.Input type="checkbox" />
                                                            </FormSwitch.Label>
                                                        </FormSwitch>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <FormSwitch>
                                                            <FormSwitch.Label>{sub.allow_intent}
                                                                <FormSwitch.Input type="checkbox" />
                                                            </FormSwitch.Label>
                                                        </FormSwitch>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <div  className="font-medium whitespace-nowrap">{sub.created_at}</div>
                                                    </Table.Td>
                                                    <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                                        <Lucide icon="MoreVertical" className="w-5 h-5" />
                                                    </Table.Td>
                                                </Table.Tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </Table.Tbody>

                            </Table>
                        </div>
                        <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                            <Pagination className="flex-1 w-full mr-auto sm:w-auto">
                                <Pagination.Link>
                                    <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                                </Pagination.Link>
                                <Pagination.Link>
                                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                                </Pagination.Link>
                                <Pagination.Link>...</Pagination.Link>
                                <Pagination.Link>1</Pagination.Link>
                                <Pagination.Link active>2</Pagination.Link>
                                <Pagination.Link>3</Pagination.Link>
                                <Pagination.Link>...</Pagination.Link>
                                <Pagination.Link>
                                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                                </Pagination.Link>
                                <Pagination.Link>
                                    <Lucide icon="ChevronsRight" className="w-4 h-4" />
                                </Pagination.Link>
                            </Pagination>
                            <FormSelect className="sm:w-20 rounded-[0.5rem]">
                                <option>10</option>
                                <option>25</option>
                                <option>35</option>
                                <option>50</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Merchant;



