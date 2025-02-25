
import {
    FormLabel,

} from "@/components/Base/Form";
import { Dialog } from '@/components/Base/Headless';

import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import React from "react";

interface ModalProps {
    handleModal: () => void;
    title: string;
    transaction: {
        sno?: string;
        id?:string;
        code?: string;
        confirmed?: string;
        commission?: string;
        amount?: string;
        status?: string;
        merchant_order_id?: string;
        merchant_code?: string;
        name?: string;
        user_submitted_utr?: string;
        utr?: string;
        method?: string;
        duration?: number;
        bank?: string;
        updated_at?: string;
    };
}

const ModalTransactionDetails: React.FC<ModalProps> = ({ handleModal, transaction }) => {
    return (
        <Dialog open={true} onClose={handleModal}>
            <Dialog.Panel>
                <Dialog.Title>
                    <h2 className="mr-auto text-base font-medium">Transaction Detail</h2>
                    <Lucide icon="X" className="w-5 h-5 ml-px stroke-[3]" onClick={handleModal} />
                </Dialog.Title>

                <div className="col-span-12 sm:col-span-6 mx-5 my-4 flex justify-between">
                    <FormLabel>Transaction Id:</FormLabel>
                    <FormLabel>{transaction.id}</FormLabel>
                </div>
                <fieldset className="border-2 rounded-lg border-gray-200 mx-5">
                    <legend className="ml-5 pt-1 px-1">Merchant Details</legend>
                    <Dialog.Description className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Code: {transaction.merchant_code}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Name: {transaction.name}</FormLabel>
                        </div> 
                    </Dialog.Description>
                </fieldset>

                <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                    <legend className="ml-4 pt-1 px-2">Payment Details</legend>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Confirmed: {transaction.confirmed}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Commission: {transaction.commission}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Amount: {transaction.amount}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Status: {transaction.status}</FormLabel>
                        </div>
                    </Dialog.Description>
                </fieldset>

               
                <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                    <legend className="ml-5 pt-1 px-2">UTR Details</legend>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>USR: {transaction.user_submitted_utr}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>UTR: {transaction.utr}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Amount Code: {transaction.code}</FormLabel>
                        </div>
                    </Dialog.Description>
                </fieldset>

                <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 ">
                    <legend className="ml-5 pt-1 px-1">Paid Through</legend>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Method: {transaction.method}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Duration: {transaction.duration}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Bank: {transaction.bank}</FormLabel>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <FormLabel>Updated at: {transaction.updated_at}</FormLabel>
                        </div>
                    </Dialog.Description>
                </fieldset>

                <Dialog.Description className="flex justify-end">
                    <Button type="button" variant="outline-secondary" onClick={handleModal} className="w-20 mr-1">
                        Cancel
                    </Button>
                    <Button variant="primary" type="button" className="w-20 ml-3">
                        Save
                    </Button>
                </Dialog.Description>
            </Dialog.Panel>
        </Dialog>
    );
};

export default ModalTransactionDetails;



