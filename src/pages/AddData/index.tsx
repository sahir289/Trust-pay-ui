/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Lucide from '@/components/Base/Lucide';
import { Tab } from '@/components/Base/Headless';
import AddData from './AddDataHistory';
import CheckUtrHistory from './CheckUtrHistory';
import ResetHistory from './ResetHistory';
import Modal from '../../components/Modal/modals';
import { useRef, useState } from 'react';
import { getDataEntriesFormFields, Status } from '@/constants';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { getTabs } from '@/redux-toolkit/slices/common/tabs/tabSelectors';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import DynamicForm from '@/components/CommonForm';
import { setActiveTab } from '@/redux-toolkit/slices/common/tabs/tabSlice';
import { onload, setRefreshDataEntries } from '@/redux-toolkit/slices/dataEntries/dataEntrySlice';
import { createBankResponses } from '@/redux-toolkit/slices/dataEntries/dataEntryAPI';
import Notification, {
  NotificationElement,
} from '@/components/Base/Notification';

function DataEntries() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(getTabs);
  const [title, setTitle] = useState('Bank Response');
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('');
  const notificationRef = useRef<NotificationElement>();
  const merchants = [
    { value: '', label: 'Select Merchant' },
    { value: 'ljjuyr', label: 'ljjuyr' },
    { value: '2', label: 'Merchant Two' },
    { value: '3', label: 'Merchant Three' },
  ];

  const handleTabChange = (index: number) => {
    dispatch(setActiveTab(index));
  };

  // const userRef = useRef(null);
  const transactionModal = () => {
    setNewTransactionModal(!newTransactionModal);
  };

  const handleCreate = async (data: any) => {
    let res;
    dispatch(onload());
    if (title === 'Bank Response') {
      res = await createBankResponses(data);
    }

    if (res.meta.message) {
      setNotificationMessage(res.meta.message);
      setNotificationStatus(Status.SUCCESS);
      transactionModal();
      dispatch(setRefreshDataEntries(true));
    } else {
      setNotificationMessage(res.error.message || 'An error occurred');
      setNotificationStatus(Status.ERROR);
    }
    notificationRef.current?.showToast();
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="flex items-center h-10 justify-between mb-3 mx-1">
            <div className="text-lg font-medium group-[.mode--light]:text-white">
              Data Entries
            </div>
            <div>
              <Modal
                handleModal={transactionModal}
                forOpen={newTransactionModal}
                title={`Add ${title}`}
              >
                <DynamicForm
                  sections={
                    title === 'Bank Response'
                      ? getDataEntriesFormFields(merchants).BANK_RESPONSE
                      : getDataEntriesFormFields(merchants).BANK_RESPONSE
                  }
                  onSubmit={handleCreate}
                  defaultValues={{}}
                  isEditMode={false}
                  handleCancel={transactionModal}
                />
              </Modal>
            </div>
          </div>
          <div className="relative flex flex-col col-span-12 lg:col-span-12 xl:col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <Tab.Group selectedIndex={activeTab} onChange={handleTabChange}>
                <Tab.List variant="tabs">
                  <Tab>
                    <Tab.Button
                      className="w-full py-2 flex items-center justify-center"
                      as="button"
                      onClick={() => {
                        setTitle('Bank Response');
                      }}
                    >
                      <Lucide
                        icon="FileCheck"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />
                      &nbsp; Add Data
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      className="w-full py-2 flex items-center justify-center"
                      as="button"
                      onClick={() => {
                        setTitle('Check UTR');
                      }}
                    >
                      <Lucide
                        icon="CheckCircle"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />
                      &nbsp; Check UTR
                    </Tab.Button>
                  </Tab>
                  <Tab>
                    <Tab.Button
                      className="w-full py-2 flex items-center justify-center"
                      as="button"
                      onClick={() => {
                        setTitle('Reset Entry');
                      }}
                    >
                      <Lucide
                        icon="History"
                        className="w-5 h-5 ml-px stroke-[2.5]"
                      />
                      &nbsp; Reset Entry
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="border-b border-l border-r">
                  <Tab.Panel className="py-5 leading-relaxed">
                    <AddData />
                  </Tab.Panel>
                  <Tab.Panel className="py-5 leading-relaxed">
                    <CheckUtrHistory />
                  </Tab.Panel>
                  <Tab.Panel className="py-5 leading-relaxed">
                    <ResetHistory />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>

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

export default DataEntries;
