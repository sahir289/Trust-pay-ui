import {
    PreviewComponent,
    Preview,
} from "@/components/Base/PreviewComponent";
import {
    FormLabel,
    FormSwitch,
 
} from "@/components/Base/Form";
import { Dialog } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import React from "react";

interface ModalProps {
    handleModal: () => void;
    sendButtonRef: React.RefObject<HTMLButtonElement>;
    title: string;
    forOpen: boolean;
    state: boolean;
    id: string;
    sno: number;
    code: string;
    confirmed: string;
    commission: string;
    amount: string;
    status: string;
    merchant_order_id: string;
    merchant_code: string;
    name: string;
    user_submitted_utr: string;
    utr: string;
    method: string;
    duration: number;
    bank: string;
    updated_at: string;
}

const ModalTransactionDetails: React.FC<ModalProps> = ({
    handleModal,
    sendButtonRef,
    title,
    forOpen,
    state,
    id,
    sno,
    code,
    confirmed,
    commission,
    amount,
    status,
    merchant_order_id,
    merchant_code,
    name,
    user_submitted_utr,
    utr,
    method,
    duration,
    bank,
    updated_at,
}) => {
    const fields = [
        { label: 'ID', value: id },
        { label: 'S.No', value: sno },
        { label: 'Code', value: code },
        { label: 'Confirmed', value: confirmed },
        { label: 'Commission', value: commission },
        { label: 'Amount', value: amount },
        { label: 'Status', value: status },
        { label: 'Merchant Order ID', value: merchant_order_id },
        { label: 'Merchant Code', value: merchant_code },
        { label: 'Name', value: name },
        { label: 'User Submitted UTR', value: user_submitted_utr },
        { label: 'UTR', value: utr },
        { label: 'Method', value: method },
        { label: 'Duration', value: duration },
        { label: 'Bank', value: bank },
        { label: 'Updated At', value: updated_at },
    ];

    { console.log("heko", id) }
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                <PreviewComponent>
                    {() => (
                        <Preview>
                            {!state && (
                                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                                    <Button
                                        variant="primary"
                                        className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
                                        as="a"
                                        href="#"
                                        onClick={(event: React.MouseEvent) => {
                                            event.preventDefault();
                                            handleModal();
                                        }}
                                    >
                                        <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" /> {title}
                                    </Button>
                                </div>
                            )}

                            <Dialog open={true} onClose={handleModal}>
                                <Dialog.Panel>
                                    <Dialog.Title>
                                        <h2 className="mr-auto text-base font-medium">Transaction Detail</h2>
                                        <Lucide icon="X" className="w-5 h-5 ml-px stroke-[3]" onClick={handleModal} />
                                    </Dialog.Title>

                                    <div className="col-span-12 sm:col-span-6 mx-5 mt-4 flex justify-between">
                                    <FormLabel htmlFor="merchant-code">Transaction Id :</FormLabel>
                                        <FormLabel htmlFor="merchant-code">{id}</FormLabel>
                                    </div>

                                    <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                                        <legend className="ml-4 pt-1 px-2">Payment Details</legend>
                                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="site-url">Confirmed : {confirmed}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="return-site">Commission : {commission}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="callback-url">Amount : {amount}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="payout-callback">Status : {status}</FormLabel>
                                            </div>
                                        </Dialog.Description>
                                    </fieldset>
                                    {/* <div className="col-span-12 sm:col-span-6 mx-7 my-1 mt-4 flex flex-col justify-between">
                                    <FormLabel htmlFor="merchant-code">Merchant Order Id : </FormLabel>
                                        <FormLabel htmlFor="merchant-code">{merchant_order_id}</FormLabel>
                                    </div> */}
                                    <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                        <legend className="ml-5 pt-1 px-1">Merchant Details</legend>
                                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="min-payin">Code: {merchant_code}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="max-payin">Name : {name}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="max-payin">Amount Code : {code}</FormLabel>
                                            </div>
                                        </Dialog.Description>
                                    </fieldset>

                                    <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                        <legend className="ml-5 pt-1 px-2">UTR Details</legend>
                                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="min-payout">USR: {user_submitted_utr}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="max-payout">UTR: {utr}</FormLabel>
                                            </div>
                                        </Dialog.Description>
                                    </fieldset>

                                    <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                        <legend className="ml-5 pt-1 px-1">Paid Through</legend>
                                        <legend className="ml-5 pt-1 px-2"></legend>
                                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="min-payout">Method : {method}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="max-payout">Duration : {duration}</FormLabel>
                                            </div>
                                        </Dialog.Description>
                                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="min-payout">Bank : {bank}</FormLabel>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <FormLabel htmlFor="max-payout">Updated at : {updated_at}</FormLabel>
                                            </div>
                                        </Dialog.Description>
                                   
                                    
                                  </fieldset>
                                    <Dialog.Footer className="mt-4">
                                        <Button type="button" variant="outline-secondary" onClick={handleModal} className="w-20 mr-1">
                                            Cancel
                                        </Button>
                                        <Button variant="primary" type="button" className="w-20 ml-3" ref={sendButtonRef}>
                                            Save
                                        </Button>
                                    </Dialog.Footer>
                                </Dialog.Panel>
                            </Dialog>
                            
                        </Preview>
                    )}
                </PreviewComponent>
            </div>



        </div>
    );
};

export default ModalTransactionDetails;


