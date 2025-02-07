import {
    PreviewComponent,
    Preview,
} from "@/components/Base/PreviewComponent";
import {
    FormLabel,
    FormSwitch,
    FormInput,
    FormSelect,
} from "@/components/Base/Form";
import { Dialog } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import Litepicker from "@/components/Base/Litepicker";
import React, { useState, useRef } from "react";
interface ModalProps {
    handleModal: () => void; // Function that takes no arguments and returns nothing
    sendButtonRef: React.RefObject<HTMLButtonElement>;
    title: string; // Title as a string
    forOpen: boolean;
    state: boolean;
}
const Modal: React.FC<ModalProps> = ({ handleModal, sendButtonRef, title, forOpen, state }) => {
    const [generalReportFilter, setGeneralReportFilter] = useState<string>();


    return (
        <div className="">
            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                    {/* {state && */}
                <PreviewComponent>
                    {({ toggle }) => (
                        <>
                            <Preview>
                                {!state &&
                                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                                    <Button
                                        variant="primary"
                                        className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
                                        as="a"
                                        href="#"

                                        onClick={(event: React.MouseEvent) => {
                                            event.preventDefault();
                                            handleModal()
                                        }}
                                    >
                                        <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
                                        {title}
                                    </Button>
                                </div>}

                                {  title === "Transaction Details"  && 
                                         <Dialog
                                         open={true}
                                         onClose={
                                            handleModal
                                         }
                                        //  initialFocus={sendButtonRef}
                                     >
                                         <Dialog.Panel>
                                             <Dialog.Title>
                                                 <h2 className="mr-auto text-base font-medium">
                                                     Add Merchant
                                                 </h2>
                                                 <Lucide
                                                     icon="X"
                                                     className="w-5 h-5 ml-px stroke-[3]"
                                                    //  onClick={handleModal}
                                                 />
                                             </Dialog.Title>
                                             <div className="col-span-12 sm:col-span-6 mx-5 mt-2">
                                                 <FormLabel htmlFor="modal-form-1">
                                                     Code
                                                 </FormLabel>
                                                 <FormInput
                                                     id="modal-form-1"
                                                     type="text"
                                                     placeholder="Merchant Code"
                                                 />
                                             </div>
                                             <div>
                                                 
                                             </div>
                                             <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                                                 <legend className="ml-4 pt-1 px-2">URLs</legend>
                                                 <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-1">
                                                             Site
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-1"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-2">
                                                             Return Site
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-2"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-3">
                                                             Callback
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-3"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-4">
                                                             Payout Callback
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-4"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                 </Dialog.Description>
                                             </fieldset>
                                             <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                                 <legend className="ml-5 pt-1 px-2">Pay In</legend>
                                                 <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-3">
                                                             Min PayIn
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-3"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-3">
                                                             Max PayIn
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-3"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                 </Dialog.Description>
                                                 <div className="col-span-12 sm:col-span-6 mx-5">
                                                     <FormLabel htmlFor="modal-form-3">
                                                         PayIn Commission
                                                     </FormLabel>
                                                     <FormInput
                                                         id="modal-form-3"
                                                         type="text"
                                                         placeholder="example@gmail.com"
                                                     />
                                                 </div>
                                             </fieldset>
                                             <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                                 <legend className="ml-5 pt-1 px-2">Pay Out</legend>
                                                 <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-4">
                                                             Min PayOut
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-4"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>

                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-4">
                                                             Max PayOut
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-4"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div></Dialog.Description>

                                                 <div className="col-span-12 sm:col-span-6 mx-5">
                                                     <FormLabel htmlFor="modal-form-4">
                                                         PayOut Commission
                                                     </FormLabel>
                                                     <FormInput
                                                         id="modal-form-4"
                                                         type="text"
                                                         placeholder="example@gmail.com"
                                                     />
                                                 </div>
                                             </fieldset>
                                             <div className="flex flex-row justify-between mx-10">
                                                 <div className="col-span-12 flex flex-row sm:col-span-6 px-4 pt-2 justify-center">
                                                     <FormLabel htmlFor="modal-form-4 " className="px-3 pt-2">
                                                         Test Mode :
                                                     </FormLabel>
                                                     <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                         <FormSwitch.Label
                                                             htmlFor="show-example-1 "
                                                             className="ml-0 "
                                                         >
                                                             <FormSwitch.Input
                                                                 id="show-example-1"
                                                                 //   onClick={}
                                                                 className="ml-0 mr-0 border-2 border-slate-300  "
                                                                 type="checkbox"
                                                             />
                                                         </FormSwitch.Label>
                                                     </FormSwitch>
                                                 </div>
                                                 <div className="col-span-12 flex flex-row sm:col-span-6 px-4 pt-2 justify-center">
                                                     <FormLabel htmlFor="modal-form-4" className="px-3 pt-2">
                                                         Allow Intent :
                                                     </FormLabel>
                                                     <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                         <FormSwitch.Label
                                                             htmlFor="show-example-1 "
                                                             className="ml-0 "
                                                         >

                                                             <FormSwitch.Input
                                                                 id="show-example-1"
                                                                 //   onClick={}
                                                                 className="ml-0 mr-0 border-2 border-slate-300  "
                                                                 type="checkbox"
                                                             />
                                                         </FormSwitch.Label>
                                                     </FormSwitch>
                                                 </div>
                                             </div>

                                             <Dialog.Footer className="mt-4">
                                                 <Button
                                                     type="button"
                                                     variant="outline-secondary"
                                                     onClick={handleModal
                                                     }
                                                     className="w-20 mr-1"
                                                 >
                                                     Cancel
                                                 </Button>
                                                 <Button
                                                     variant="primary"
                                                     type="button"
                                                     className="w-20 ml-3"
                                                     ref={sendButtonRef}
                                                 >
                                                     Save
                                                 </Button>
                                             </Dialog.Footer>

                                         </Dialog.Panel>
                                     </Dialog>
                                        }


                                        {  title === "Add Merchant"  && 
                                         <Dialog
                                         open={forOpen}
                                         onClose={
                                            handleModal
                                         }
                                         initialFocus={sendButtonRef}
                                     >
                                         <Dialog.Panel>
                                             <Dialog.Title>
                                                 <h2 className="mr-auto text-base font-medium">
                                                     Add Merchant
                                                 </h2>
                                                 <Lucide
                                                     icon="X"
                                                     className="w-5 h-5 ml-px stroke-[3]"
                                                     onClick={handleModal}
                                                 />
                                             </Dialog.Title>
                                             <div className="col-span-12 sm:col-span-6 mx-5 mt-2">
                                                 <FormLabel htmlFor="modal-form-1">
                                                     Code
                                                 </FormLabel>
                                                 <FormInput
                                                     id="modal-form-1"
                                                     type="text"
                                                     placeholder="Merchant Code"
                                                 />
                                             </div>
                                             <div>
                                                 
                                             </div>
                                             <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                                                 <legend className="ml-4 pt-1 px-2">URLs</legend>
                                                 <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-1">
                                                             Site
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-1"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-2">
                                                             Return Site
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-2"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-3">
                                                             Callback
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-3"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-4">
                                                             Payout Callback
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-4"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                 </Dialog.Description>
                                             </fieldset>
                                             <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                                 <legend className="ml-5 pt-1 px-2">Pay In</legend>
                                                 <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-3">
                                                             Min PayIn
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-3"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-3">
                                                             Max PayIn
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-3"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>
                                                 </Dialog.Description>
                                                 <div className="col-span-12 sm:col-span-6 mx-5">
                                                     <FormLabel htmlFor="modal-form-3">
                                                         PayIn Commission
                                                     </FormLabel>
                                                     <FormInput
                                                         id="modal-form-3"
                                                         type="text"
                                                         placeholder="example@gmail.com"
                                                     />
                                                 </div>
                                             </fieldset>
                                             <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                                 <legend className="ml-5 pt-1 px-2">Pay Out</legend>
                                                 <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-4">
                                                             Min PayOut
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-4"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div>

                                                     <div className="col-span-12 sm:col-span-6">
                                                         <FormLabel htmlFor="modal-form-4">
                                                             Max PayOut
                                                         </FormLabel>
                                                         <FormInput
                                                             id="modal-form-4"
                                                             type="text"
                                                             placeholder="example@gmail.com"
                                                         />
                                                     </div></Dialog.Description>

                                                 <div className="col-span-12 sm:col-span-6 mx-5">
                                                     <FormLabel htmlFor="modal-form-4">
                                                         PayOut Commission
                                                     </FormLabel>
                                                     <FormInput
                                                         id="modal-form-4"
                                                         type="text"
                                                         placeholder="example@gmail.com"
                                                     />
                                                 </div>
                                             </fieldset>
                                             <div className="flex flex-row justify-between mx-10">
                                                 <div className="col-span-12 flex flex-row sm:col-span-6 px-4 pt-2 justify-center">
                                                     <FormLabel htmlFor="modal-form-4 " className="px-3 pt-2">
                                                         Test Mode :
                                                     </FormLabel>
                                                     <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                         <FormSwitch.Label
                                                             htmlFor="show-example-1 "
                                                             className="ml-0 "
                                                         >
                                                             <FormSwitch.Input
                                                                 id="show-example-1"
                                                                 //   onClick={}
                                                                 className="ml-0 mr-0 border-2 border-slate-300  "
                                                                 type="checkbox"
                                                             />
                                                         </FormSwitch.Label>
                                                     </FormSwitch>
                                                 </div>
                                                 <div className="col-span-12 flex flex-row sm:col-span-6 px-4 pt-2 justify-center">
                                                     <FormLabel htmlFor="modal-form-4" className="px-3 pt-2">
                                                         Allow Intent :
                                                     </FormLabel>
                                                     <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                         <FormSwitch.Label
                                                             htmlFor="show-example-1 "
                                                             className="ml-0 "
                                                         >

                                                             <FormSwitch.Input
                                                                 id="show-example-1"
                                                                 //   onClick={}
                                                                 className="ml-0 mr-0 border-2 border-slate-300  "
                                                                 type="checkbox"
                                                             />
                                                         </FormSwitch.Label>
                                                     </FormSwitch>
                                                 </div>
                                             </div>

                                             <Dialog.Footer className="mt-4">
                                                 <Button
                                                     type="button"
                                                     variant="outline-secondary"
                                                     onClick={handleModal
                                                     }
                                                     className="w-20 mr-1"
                                                 >
                                                     Cancel
                                                 </Button>
                                                 <Button
                                                     variant="primary"
                                                     type="button"
                                                     className="w-20 ml-3"
                                                     ref={sendButtonRef}
                                                 >
                                                     Save
                                                 </Button>
                                             </Dialog.Footer>

                                         </Dialog.Panel>
                                     </Dialog>
                                        }



                                {title === "Payins" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>New Payment Link</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                <FormLabel htmlFor="modal-form-1">
                                                    Merchant
                                                </FormLabel>
                                                <FormInput
                                                    id="modal-form-1"
                                                    type="text"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        User ID
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Amount
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <div className="flex flex-row col-span-12 sm:col-span-6 mx-6">
                                                <div className="items-center mt-2">  <FormLabel htmlFor="modal-form-3 ">
                                                    One time payment link ?
                                                </FormLabel></div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-4" className="px-3 pt-2">
                                                        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                            <FormSwitch.Label
                                                                htmlFor="show-example-1 "
                                                                className="ml-4"
                                                            >

                                                                <FormSwitch.Input
                                                                    id="show-example-1"
                                                                    //   onClick={}
                                                                    className="ml-0 mr-0 border-2 border-slate-300  "
                                                                    type="checkbox"
                                                                />
                                                            </FormSwitch.Label></FormSwitch>
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-20 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Save
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Payouts" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}>
                                        <Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>Payout</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                <div className="col-span-12 sm:col-span-6 mx-4 ">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Merchant
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        User ID
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                                                <legend className="ml-4 pt-1 px-2">Account Details</legend>

                                                <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Account Number
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                        <FormLabel htmlFor="modal-form-1">
                                                            Account Holder Name
                                                        </FormLabel>
                                                        <FormInput
                                                            id="modal-form-1"
                                                            type="text"
                                                            placeholder="example@gmail.com"
                                                        />
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                        <FormLabel htmlFor="modal-form-1">
                                                            IFSC code
                                                        </FormLabel>
                                                        <FormInput
                                                            id="modal-form-1"
                                                            type="text"
                                                            placeholder="example@gmail.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                        <FormLabel htmlFor="modal-form-1">
                                                            Bank Name
                                                        </FormLabel>
                                                        <FormInput
                                                            id="modal-form-1"
                                                            type="text"
                                                            placeholder="example@gmail.com"
                                                        />
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-6 mx-4 my-4">
                                                        <FormLabel htmlFor="modal-form-1">
                                                            Amount
                                                        </FormLabel>
                                                        <FormInput
                                                            id="modal-form-1"
                                                            type="text"
                                                            placeholder="example@gmail.com"
                                                        />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="flex flex-row col-span-12 sm:col-span-6 mx-6">
                                                <div className="items-center mt-2">  <FormLabel htmlFor="modal-form-3 ">
                                                    One time payment link ?
                                                </FormLabel></div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-4" className="px-3 pt-2">
                                                        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                            <FormSwitch.Label
                                                                htmlFor="show-example-1 "
                                                                className="ml-4"
                                                            >

                                                                <FormSwitch.Input
                                                                    id="show-example-1"
                                                                    //   onClick={}
                                                                    className="ml-0 mr-0 border-2 border-slate-300  "
                                                                    type="checkbox"
                                                                />
                                                            </FormSwitch.Label>
                                                        </FormSwitch>
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-20 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Save
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {/* <Dialog
                                             open={forOpen}
                                            onClose={() => {
                                                // setNewMerchantModal(false);
                                                handleModal()
                                            }}
                                            initialFocus={sendButtonRef}
                                        >
                                            <Dialog.Panel>
                                                <Dialog.Title>
                                                    <h2 className="mr-auto text-base font-medium">
                                                       {title}
                                                    </h2>
                                                    <Lucide
                                                        icon="X"
                                                        className="w-5 h-5 ml-px stroke-[3]"
                                                        // onClick={() => setNewMerchantModal(false)}
                                                        onClick={handleModal}
                                                    />
                                                    <Menu className="sm:hidden">
                                                        <Menu.Button
                                                            as="a"
                                                            className="block w-5 h-5"
                                                            href="#"
                                                        >
                                                            <Lucide
                                                                icon="MoreHorizontal"
                                                                className="w-5 h-5 text-slate-500"
                                                            />
                                                        </Menu.Button>

                                                    </Menu>
                                                </Dialog.Title>
                                                <div className="col-span-12 sm:col-span-6 mx-5 mt-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Code
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="Merchant Code"
                                                    />
                                                </div>
                                                <div></div>
                                                <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2">
                                                    <legend className="ml-4 pt-1 px-2">URLs</legend>
                                                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-1">
                                                                Site
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-1"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-2">
                                                                Return Site
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-2"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-3">
                                                                Callback
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-3"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-4">
                                                                Payout Callback
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-4"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>
                                                    </Dialog.Description>
                                                </fieldset>
                                                <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                                    <legend className="ml-5 pt-1 px-2">Pay In</legend>
                                                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-3">
                                                                Min PayIn
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-3"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-3">
                                                                Max PayIn
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-3"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>
                                                    </Dialog.Description>
                                                    <div className="col-span-12 sm:col-span-6 mx-5">
                                                        <FormLabel htmlFor="modal-form-3">
                                                            PayIn Commission
                                                        </FormLabel>
                                                        <FormInput
                                                            id="modal-form-3"
                                                            type="text"
                                                            placeholder="example@gmail.com"
                                                        />
                                                    </div>
                                                </fieldset>
                                                <fieldset className="border-2 rounded-lg border-gray-200 mx-5 my-2 pb-4">
                                                    <legend className="ml-5 pt-1 px-2">Pay Out</legend>
                                                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-4">
                                                                Min PayOut
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-4"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div>

                                                        <div className="col-span-12 sm:col-span-6">
                                                            <FormLabel htmlFor="modal-form-4">
                                                                Max PayOut
                                                            </FormLabel>
                                                            <FormInput
                                                                id="modal-form-4"
                                                                type="text"
                                                                placeholder="example@gmail.com"
                                                            />
                                                        </div></Dialog.Description>

                                                    <div className="col-span-12 sm:col-span-6 mx-5">
                                                        <FormLabel htmlFor="modal-form-4">
                                                            PayOut Commission
                                                        </FormLabel>
                                                        <FormInput
                                                            id="modal-form-4"
                                                            type="text"
                                                            placeholder="example@gmail.com"
                                                        />
                                                    </div>
                                                </fieldset>
                                                <div className="flex flex-row justify-between mx-10">
                                                    <div className="col-span-12 flex flex-row sm:col-span-6 px-4 pt-2 justify-center">
                                                        <FormLabel htmlFor="modal-form-4 " className="px-3 pt-2">
                                                            Test Mode :
                                                        </FormLabel>
                                                        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                            <FormSwitch.Label
                                                                htmlFor="show-example-1 "
                                                                className="ml-0 "
                                                            >
                                                                <FormSwitch.Input
                                                                    id="show-example-1"
                                                                    //   onClick={}
                                                                    className="ml-0 mr-0 border-2 border-slate-300  "
                                                                    type="checkbox"
                                                                />
                                                            </FormSwitch.Label>
                                                        </FormSwitch>
                                                    </div>
                                                    <div className="col-span-12 flex flex-row sm:col-span-6 px-4 pt-2 justify-center">
                                                        <FormLabel htmlFor="modal-form-4" className="px-3 pt-2">
                                                            Allow Intent :
                                                        </FormLabel>
                                                        <FormSwitch className=" dark:border-red-500 rounded-lg">
                                                            <FormSwitch.Label
                                                                htmlFor="show-example-1 "
                                                                className="ml-0 "
                                                            >

                                                                <FormSwitch.Input
                                                                    id="show-example-1"
                                                                    //   onClick={}
                                                                    className="ml-0 mr-0 border-2 border-slate-300  "
                                                                    type="checkbox"
                                                                />
                                                            </FormSwitch.Label>
                                                        </FormSwitch>
                                                    </div>
                                                </div>

                                                <Dialog.Footer className="mt-4">
                                                    <Button
                                                        type="button"
                                                        variant="outline-secondary"
                                                        onClick={handleModal
                                                            // setNewMerchantModal(false);
                                                        }
                                                        className="w-20 mr-1"
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="primary"
                                                        type="button"
                                                        className="w-20 ml-3"
                                                        ref={sendButtonRef}
                                                    >
                                                        Save
                                                    </Button>
                                                </Dialog.Footer>

                                            </Dialog.Panel>
                                        </Dialog> */}

                                {title === "Merchant Settlement" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>Merchant Settlement</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                <FormLabel htmlFor="modal-form-1">
                                                    Merchant
                                                </FormLabel>
                                                <FormInput
                                                    id="modal-form-1"
                                                    type="text"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Amount
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        Method
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-20 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Save
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Vendor Settlement" &&

                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                <FormLabel htmlFor="modal-form-1">
                                                    Vendor
                                                </FormLabel>
                                                <FormInput
                                                    id="modal-form-1"
                                                    type="text"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Amount
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        Method
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-20 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Save
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Add Chargeback" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <div className="col-span-12 sm:col-span-6 mx-4 mt-4">
                                                <FormLabel htmlFor="modal-form-1">
                                                    Merchant
                                                </FormLabel>
                                                <FormInput
                                                    id="modal-form-1"
                                                    type="text"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Merchant Order ID
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        User ID
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Amount
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        Reference Date
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="date"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>

                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"

                                                    className="w-20 mr-1"
                                                    ref={sendButtonRef}
                                                >
                                                    Reset
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-30 ml-3"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                >
                                                    Add Chargeback
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Add User" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Full Name
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        User Name
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        Password
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6  ">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Role
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-20 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Save
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Add Data" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Bank
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Amount
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-2">
                                                        Amount Code
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-2"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                                <div className="col-span-12 sm:col-span-6  ">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        UTR
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-20 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Save
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Check UTR" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Merchant Order ID
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>

                                                <div className="col-span-12 sm:col-span-6">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        UTR
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Reset
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-30 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Check UTR
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Reset Entry" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description >
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Merchant Order ID
                                                    </FormLabel>
                                                    <FormInput
                                                        id="modal-form-1"
                                                        type="text"
                                                        placeholder="example@gmail.com"
                                                    />
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    type="button"
                                                    variant="outline-secondary"
                                                    onClick={handleModal
                                                        // setNewMerchantModal(false);
                                                    }
                                                    className="w-20 mr-1"
                                                >
                                                    Reset
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-30 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Reset Deposit
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Merchant Board" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description >
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Merchant
                                                    </FormLabel>
                                                    <FormSelect id="modal-form-1" >
                                                        <option value="custom-date">Tom</option>
                                                        <option value="daily">Tony</option>
                                                        <option value="weekly">Stark</option>
                                                        <option value="monthly">Bruce</option>
                                                        <option value="yearly">Thor</option>
                                                    </FormSelect>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6 mx-2 mt-4">
                                                    <div className="relative">
                                                        <Lucide
                                                            icon="Calendar"
                                                            className="absolute group-[.mode--light]:!text-slate-200 inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                                                        />
                                                        <Litepicker
                                                            value={generalReportFilter}
                                                            onChange={(e) => {
                                                                setGeneralReportFilter(e.target.value);
                                                            }}
                                                            options={{
                                                                autoApply: false,
                                                                singleMode: false,
                                                                numberOfColumns: 2,
                                                                numberOfMonths: 2,
                                                                showWeekNumbers: true,
                                                                dropdowns: {
                                                                    minYear: 1990,
                                                                    maxYear: null,
                                                                    months: true,
                                                                    years: true,
                                                                },
                                                            }}
                                                            className="pl-9 sm:w-64 rounded-[0.5rem] group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
                                                        />
                                                    </div>
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-30 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Search
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                                {title === "Vendor Board" &&
                                    <Dialog open={forOpen}
                                        onClose={() => {
                                            handleModal()
                                        }}
                                        initialFocus={sendButtonRef}><Dialog.Panel className="pt-2 pb-4">
                                            <Dialog.Title className="justify-between">
                                                <h2>{title}</h2>
                                                <Lucide
                                                    icon="X"
                                                    className="w-5 h-5 ml-px stroke-[3]"
                                                    // onClick={() => setNewMerchantModal(false)}
                                                    onClick={handleModal}
                                                />
                                            </Dialog.Title>
                                            <Dialog.Description >
                                                <div className="col-span-12 sm:col-span-6 mx-2">
                                                    <FormLabel htmlFor="modal-form-1">
                                                        Vendor
                                                    </FormLabel>
                                                    <FormSelect id="modal-form-1" >
                                                        <option value="custom-date">Tom</option>
                                                        <option value="daily">Tony</option>
                                                        <option value="weekly">Stark</option>
                                                        <option value="monthly">Bruce</option>
                                                        <option value="yearly">Thor</option>
                                                    </FormSelect>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6 mx-2 mt-4">
                                                    <div className="relative">
                                                        <Lucide
                                                            icon="Calendar"
                                                            className="absolute group-[.mode--light]:!text-slate-200 inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                                                        />
                                                        <Litepicker
                                                            value={generalReportFilter}
                                                            onChange={(e) => {
                                                                setGeneralReportFilter(e.target.value);
                                                            }}
                                                            options={{
                                                                autoApply: false,
                                                                singleMode: false,
                                                                numberOfColumns: 2,
                                                                numberOfMonths: 2,
                                                                showWeekNumbers: true,
                                                                dropdowns: {
                                                                    minYear: 1990,
                                                                    maxYear: null,
                                                                    months: true,
                                                                    years: true,
                                                                },
                                                            }}
                                                            className="pl-9 sm:w-64 rounded-[0.5rem] group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
                                                        />
                                                    </div>
                                                </div>
                                            </Dialog.Description>
                                            <Dialog.Footer className="mt-4">
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-30 ml-3"
                                                    ref={sendButtonRef}
                                                >
                                                    Search
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Panel>
                                    </Dialog>
                                }
                            </Preview>
                        </>
                    )}
                </PreviewComponent>
            </div>
        </div>
    );
}

export default Modal;
