/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from "@/components/Base/Headless";
import Payin from "./Payin/payin";
import Payout from "./Payout/payout";
import Modal from "@/pages/Modal/modal";

import Lucide from "@/components/Base/Lucide";
import { useRef, useState } from "react";
import ModalPopUp from "../ModalPopUp";
function Main() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] = useState("Payins")
  const transactionRef = useRef(null);
  const transactionModal = () => {
    setNewTransactionModal(!newTransactionModal)
  }
  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);
  const [status, setStatus] = useState<string>("");

  const resetRef = useRef<| null>(null)
  const handleReject = () => {
    setReject(!reject)
  }

  const handleApprove = () => {
    setApprove(false)
  }
  const handleClose = () => {
    setStatus("")

  }
  return (
    <>
      <div className="flex flex-col h-10 w-full px-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium group-[.mode--light]:text-white ">
            Transactions
          </div>
          <Modal handleModal={transactionModal} sendButtonRef={transactionRef} forOpen={newTransactionModal} title={title} />


          {status === "Bank Mismatch" && (

            <ModalPopUp
              open={true}
              onClose={handleClose}
              title="Update Transaction"
              fields={[
               
              ]}
              singleField={[
                { id: "bank name", label: "Bank Name", type: "text", placeholder: "Bank Name" }

              ]}
              buttonText="Success"
              onSubmit={() => {/* Handle Success */ }}
              onReset={handleClose}
          
              resetRef={resetRef}
            />
          )}

          {status === "Dispute" && (

            <ModalPopUp
              open={true}
              onClose={handleClose}
              title="Update Transaction"
              fields={[
                { id: "amount", label: "Amount", type: "text", placeholder: "Amount" },
                { id: "confirmAmount", label: "Confirm Amount", type: "text", placeholder: "Confirm Amount" },
              ]}
              singleField={[
                { id: "merchantOrderId", label: "Merchant Order ID", type: "text", placeholder: "Merchant Order ID" }

              ]}
              buttonText="Success"
              onSubmit={() => {/* Handle Success */ }}
              onReset={handleClose}

              resetRef={resetRef}
            />
          )}



          {approve && (
            <ModalPopUp
              open={true}
              onClose={handleApprove}
              title="Update Transaction"
              fields={[
                { id: "method", label: "Method", type: "text", placeholder: "Method" },
                { id: "selectBank", label: "Select Bank", type: "text", placeholder: "Select Bank" },
              ]}
              singleField={[
                { id: "utrNumber", label: "UTR Number", type: "text", placeholder: "UTR Number" }

              ]}
              buttonText="Approve"
              onSubmit={() => {/* Handle Approve */ }}
              onReset={handleApprove}

              resetRef={resetRef}
            />
          )}

          {reject && (
            <ModalPopUp
              open={reject}
              onClose={handleReject}
              title="Update Transaction"
              fields={[]}
              singleField={[
                { id: "rejectReason", label: "Reject Reason", type: "text", placeholder: "Reject Reason" }
              ]}
              buttonText="Reject"
              onSubmit={() => {/* Handle Reject */ }}
              onReset={handleReject}

              resetRef={resetRef}
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-2">
        <div className="col-span-12">

          <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <Tab.Group>
                <Tab.List variant="tabs">
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={() => setTitle("Payins")}>
                      <Lucide
                        icon="BadgeIndianRupee"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Payins
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button className="w-full py-2 flex items-center justify-center" as="button" onClick={() => setTitle("Payouts")}>
                      <Lucide
                        icon="ArrowRightCircle"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />&nbsp;
                      Payouts
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="border-b border-l border-r">
                  <Tab.Panel className="p-5 leading-relaxed">
                    <Payin setStatus={setStatus} />
                  </Tab.Panel>
                  <Tab.Panel className="p-5 leading-relaxed">
                    <Payout reject={reject} setReject={setReject} approve={approve} setApprove={setApprove} />
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
