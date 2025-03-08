/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from '@/components/Base/Headless';
import PayInComponent from './Payin/payin';
import PayOut from './Payout/payout';
import Modal from '@/components/Modal/modals';
import Lucide from '@/components/Base/Lucide';
import { useState, useRef } from 'react';
import Notification, {
  NotificationElement,
} from '@/components/Base/Notification';
import { createPayIn } from '@/redux-toolkit/slices/payin/payinAPI';
import { getTransactionFormFields, Status } from '@/constants';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { getParentTabs } from '@/redux-toolkit/slices/common/tabs/tabSelectors';
import { setParentTab } from '@/redux-toolkit/slices/common/tabs/tabSlice';
import DynamicForm from '@/components/CommonForm';
import { onload as payInLoader, setRefreshPayIn } from '@/redux-toolkit/slices/payin/payinSlice';
import { onload as payOutLoader, setRefreshPayOut } from '@/redux-toolkit/slices/payout/payoutSlice';
import { createPayOut } from '@/redux-toolkit/slices/payout/payoutAPI';

function Main() {
  const dispatch = useAppDispatch();
  const parentTab = useAppSelector(getParentTabs); // Get parent tab from Redux
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [title, setTitle] = useState(parentTab === 0 ? 'PayIns' : 'PayOuts');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('');
  const merchants = [
    { value: '', label: 'Select Merchant' },
    { value: 'ljjuyr', label: 'ljjuyr' },
    { value: '2', label: 'Merchant Two' },
    { value: '3', label: 'Merchant Three' },
  ];

  const notificationRef = useRef<NotificationElement>();

  const handleCreate = async (data: any) => {
    let res;
    // const apiData = data
    //   data.status === Status.BANK_MISMATCH
    //     ? { type: 'PAYIN', ...data }
    //     : { ...data };
    // const url =
    //   data.status === Status.BANK_MISMATCH
    //     ? `/update-deposit-status/${data.id}`
    //     : `/dispute-duplicate/${data.id}`;
    if (title === 'PayIns') {
      const queryString = new URLSearchParams(
        data as Record<string, string>,
      ).toString();
      dispatch(payInLoader());
      res = await createPayIn(queryString);
    } else {
      const api_key = '23e3223e32we'
      dispatch(payOutLoader());
      res = await createPayOut(data, api_key);
    }

    if (res.meta.message) {
      setNotificationMessage(res.meta.message);
      setNotificationStatus(Status.SUCCESS);
      transactionModal();
      if (title === 'PayIns') {
        dispatch(setRefreshPayIn(true));
      } else {
        dispatch(setRefreshPayOut(true));
      }
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
          <div className="text-xl font-medium">{title}</div>
          <Modal
            handleModal={transactionModal}
            forOpen={newTransactionModal}
            title={`Add ${title}`}
          >
            <DynamicForm
              sections={
                title === 'PayIns'
                  ? getTransactionFormFields(merchants).PAYIN
                  : getTransactionFormFields(merchants).PAYOUT
              }
              onSubmit={handleCreate}
              defaultValues={{}}
              isEditMode={false}
              handleCancel={transactionModal}
            />
          </Modal>
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
                  <PayInComponent />
                </Tab.Panel>
                <Tab.Panel className="p-5">
                  <PayOut />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>

      {/* {modalData.open && (
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
      )} */}

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
