import {
    PreviewComponent,
    Preview,
} from "@/components/Base/PreviewComponent";
import {
    FormLabel,
    FormSwitch,

} from "@/components/Base/Form";
import { Dialog } from '@/components/Base/Headless';

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

    { console.log("heko", id) }
    return (


        <Dialog open={state} onClose={handleModal}>
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
                <Dialog.Description className="mt-4">
                    <Button type="button" variant="outline-secondary" onClick={handleModal} className="w-20 mr-1">
                        Cancel
                    </Button>
                    <Button variant="primary" type="button" className="w-20 ml-3" ref={sendButtonRef}>
                        Save
                    </Button>
                </Dialog.Description>
            </Dialog.Panel>
        </Dialog>


    );
};

export default ModalTransactionDetails;


