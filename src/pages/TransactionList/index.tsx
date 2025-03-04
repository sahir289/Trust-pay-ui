/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from "@/components/Base/Headless";
import PayInComponent from "./Payin/payin";
import Payout from "./Payout/payout";
import Modal from "@/pages/Modal/modal";
import Lucide from "@/components/Base/Lucide";
import { useState, useRef } from "react";
import ModalPopUp from "../ModalPopUp";
import Notification, { NotificationElement } from "@/components/Base/Notification";
import { updatePayIns } from "@/redux-toolkit/slices/payin/payinAPI";
import { Status } from "@/constants";

function Main() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] = useState("PayIns");
  const [status, setStatus] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationStatus, setNotificationStatus] = useState("");
  const [modalData, setModalData] = useState<{ open: boolean; type: string }>({ open: false, type: "" });
  const transactionRef = useRef(null);
  
  const notificationRef = useRef<NotificationElement>();
  const resetRef = useRef<null>(null);

  const toggleModal = () => setNewTransactionModal((prev) => !prev);
  const closeModal = () => setModalData({ open: false, type: "" });

  const handleSubmit = async (data: Record<string, string>) => {
    const apiData = status === Status.BANK_MISMATCH
      ? { type: "PAYIN", ...data }
      : { ...data };
    
    const url = status === Status.BANK_MISMATCH
      ? `/update-deposit-status/${id}`
      : `/dispute-duplicate/${id}`;
    
    const res = await updatePayIns(url, apiData);
    if (res?.data?.data?.message) {
      setNotificationMessage(res.data.data.message);
      setNotificationStatus(Status.SUCCESS);
    } else {
      setNotificationMessage(res?.data?.error?.message || "An error occurred");
      setNotificationStatus(Status.ERROR);
    }
    notificationRef.current?.showToast();
  };

  return (
    <>
      <div className="flex flex-col h-10 w-full px-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium">Transactions</div>
          <Modal handleModal={toggleModal} sendButtonRef={transactionRef} forOpen={newTransactionModal} title={title} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-2">
        <div className="col-span-12">
          <div className="p-5 box box--stacked">
            <Tab.Group>
              <Tab.List variant="tabs">
                <Tab>
                  <Tab.Button className="w-full py-2" as="button" onClick={() => setTitle("PayIns")}>
                    <Lucide icon="BadgeIndianRupee" className="w-5 h-5" /> &nbsp; PayIns
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button className="w-full py-2" as="button" onClick={() => setTitle("Payouts")}>
                    <Lucide icon="ArrowRightCircle" className="w-5 h-5" /> &nbsp; Payouts
                  </Tab.Button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="border-b border-l border-r">
                <Tab.Panel className="p-5">
                  <PayInComponent setStatus={setStatus} setId={setId} />
                </Tab.Panel>
                <Tab.Panel className="p-5">
                  <Payout setModalData={setModalData} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>

      {modalData.open && (
        <ModalPopUp
          open={true}
          onClose={closeModal}
          title="Update Transaction"
          fields={
            modalData.type === "approve"
              ? [
                  { id: "method", label: "Method", type: "text", placeholder: "Method" },
                  { id: "selectBank", label: "Select Bank", type: "text", placeholder: "Select Bank" },
                ]
              : modalData.type === "reject"
              ? []
              : [
                  { id: "amount", label: "Amount", type: "text", placeholder: "Amount" },
                  { id: "confirmed", label: "Confirm Amount", type: "text", placeholder: "Confirm Amount" },
                ]
          }
          singleField={
            modalData.type === "approve"
              ? [{ id: "utrNumber", label: "UTR Number", type: "text", placeholder: "UTR Number" }]
              : modalData.type === "reject"
              ? [{ id: "rejectReason", label: "Reject Reason", type: "text", placeholder: "Reject Reason" }]
              : [{ id: "merchantOrderId", label: "Merchant Order ID", type: "text", placeholder: "Merchant Order ID" }]
          }
          buttonText={modalData.type === "approve" ? "Approve" : modalData.type === "reject" ? "Reject" : "Success"}
          onSubmit={handleSubmit}
          onReset={closeModal}
          resetRef={resetRef}
        />
      )}

      {notificationMessage && (
        <div className="text-center">
          <Notification getRef={(el) => (notificationRef.current = el)} options={{ duration: 3000 }}>
            <Lucide icon={notificationStatus === Status.SUCCESS ? "BadgeCheck" : "X"} className={notificationStatus === Status.SUCCESS ? "text-primary" : "text-danger"} />
            <div className="ml-4 font-medium">{notificationMessage}</div>
          </Notification>
        </div>
      )}
    </>
  );
}

export default Main;
