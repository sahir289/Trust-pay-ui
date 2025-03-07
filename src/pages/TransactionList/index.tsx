/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from '@/components/Base/Headless';
import PayInComponent from './Payin/payin';
import PayOut from './Payout/payout';
import Modal from '@/components/Modal/modal';
import Lucide from '@/components/Base/Lucide';
import { useState, useRef } from 'react';
import ModalPopUp from '../ModalPopUp';
import Notification, {
  NotificationElement,
} from '@/components/Base/Notification';
import { updatePayIns } from '@/redux-toolkit/slices/payin/payinAPI';
import { formFields, Status } from '@/constants';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { getParentTabs } from '@/redux-toolkit/slices/common/tabs/tabSelectors';
import { setParentTab } from '@/redux-toolkit/slices/common/tabs/tabSlice';

function Main() {
  const dispatch = useAppDispatch();
  const parentTab = useAppSelector(getParentTabs); // Get parent tab from Redux
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] = useState(parentTab === 0 ? 'PayIns' : 'PayOuts');
  const [status, setStatus] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('');
  const [modalData, setModalData] = useState<{ open: boolean; type: string }>({
    open: false,
    type: '',
  });

  const notificationRef = useRef<NotificationElement>();
  const resetRef = useRef<null>(null);
  // const transactionRef = useRef(null);

  // const toggleModal = () => setNewTransactionModal((prev) => !prev);
  const closeModal = () => setModalData({ open: false, type: '' });

  const handleSubmit = async (data: Record<string, string>) => {
    const apiData =
      status === Status.BANK_MISMATCH
        ? { type: 'PAYIN', ...data }
        : { ...data };
    const url =
      status === Status.BANK_MISMATCH
        ? `/update-deposit-status/${id}`
        : `/dispute-duplicate/${id}`;
    const res = await updatePayIns(url, apiData);

    if (res?.data?.data?.message) {
      setNotificationMessage(res.data.data.message);
      setNotificationStatus(Status.SUCCESS);
    } else {
      setNotificationMessage(res?.data?.error?.message || 'An error occurred');
      setNotificationStatus(Status.ERROR);
    }
    notificationRef.current?.showToast();
  };

  const handleParentTabChange = (index: number) => {
    dispatch(setParentTab(index)); // Update Redux state
    setTitle(index === 0 ? 'PayIns' : 'PayOuts');
  };

  // const userRef = useRef(null);
  const transactionModal = () => {
    setNewTransactionModal(!newTransactionModal);
  };

  return (
    <>
      <div className="flex flex-col h-10 w-full px-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium">Transactions</div>
          <Modal
            handleModal={transactionModal}
            forOpen={newTransactionModal}
            title={title}
            formFields={title === 'PayIns' ? formFields.PAYIN : formFields.PAYOUT}
            handleSubmitData={transactionModal}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-2">
        <div className="col-span-12">
          <div className="p-5 box box--stacked">
            <Tab.Group
              selectedIndex={parentTab}
              onChange={handleParentTabChange}
            >
              <Tab.List variant="tabs">
                <Tab>
                  <Tab.Button
                    className="w-full py-2 flex items-center justify-center"
                    as="button"
                  >
                    <Lucide icon="BadgeIndianRupee" className="w-5 h-5" />{' '}
                    &nbsp; PayIns
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button
                    className="w-full py-2 flex items-center justify-center"
                    as="button"
                  >
                    <Lucide icon="ArrowRightCircle" className="w-5 h-5" />{' '}
                    &nbsp; PayOuts
                  </Tab.Button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="border-b border-l border-r">
                <Tab.Panel className="p-5">
                  <PayInComponent setStatus={setStatus} setId={setId} />
                </Tab.Panel>
                <Tab.Panel className="p-5">
                  <PayOut />
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
            modalData.type === 'approve'
              ? [
                  {
                    id: 'method',
                    label: 'Method',
                    type: 'text',
                    placeholder: 'Method',
                  },
                ]
              : modalData.type === 'reject'
              ? []
              : [
                  {
                    id: 'amount',
                    label: 'Amount',
                    type: 'text',
                    placeholder: 'Amount',
                  },
                ]
          }
          singleField={
            modalData.type === 'approve'
              ? [
                  {
                    id: 'utrNumber',
                    label: 'UTR Number',
                    type: 'text',
                    placeholder: 'UTR Number',
                  },
                ]
              : modalData.type === 'reject'
              ? [
                  {
                    id: 'rejectReason',
                    label: 'Reject Reason',
                    type: 'text',
                    placeholder: 'Reject Reason',
                  },
                ]
              : [
                  {
                    id: 'merchantOrderId',
                    label: 'Merchant Order ID',
                    type: 'text',
                    placeholder: 'Merchant Order ID',
                  },
                ]
          }
          buttonText={
            modalData.type === 'approve'
              ? 'Approve'
              : modalData.type === 'reject'
              ? 'Reject'
              : 'Success'
          }
          onSubmit={handleSubmit}
          onReset={closeModal}
          resetRef={resetRef}
        />
      )}

      {notificationMessage && (
        <div className="text-center">
          <Notification
            getRef={(el) => (notificationRef.current = el)}
            options={{ duration: 3000 }}
          >
            <Lucide
              icon={notificationStatus === Status.SUCCESS ? 'BadgeCheck' : 'X'}
              className={
                notificationStatus === Status.SUCCESS
                  ? 'text-primary'
                  : 'text-danger'
              }
            />
            <div className="ml-4 font-medium">{notificationMessage}</div>
          </Notification>
        </div>
      )}
    </>
  );
}

export default Main;
