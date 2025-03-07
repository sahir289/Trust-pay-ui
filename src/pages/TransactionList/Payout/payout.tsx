/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from 'react';
import { Tab } from '@/components/Base/Headless';
import AllPayOut from './allPayout';
import CompletedPayOut from './completedPayout';
import InProgressPayOut from './inProgressPayout';
import RejectedPayOut from './rejectedPayout';
import Lucide from '@/components/Base/Lucide';
import LoadingIcon from '@/components/Base/LoadingIcon';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { Status } from '@/constants';
import Notification, { NotificationElement } from '@/components/Base/Notification';
import { getAllPayOuts } from '@/redux-toolkit/slices/payout/payoutAPI';
import { getPayOuts } from '@/redux-toolkit/slices/payout/payoutSlice';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { getPaginationData } from '@/redux-toolkit/slices/common/params/paramsSelector';

interface PayOutProps {
  // setModalData: React.Dispatch<
  //   React.SetStateAction<{ open: boolean; type: string }>
  // >;
}

const PayOut: React.FC<PayOutProps> = () => {
  const params = useAppSelector(getPaginationData);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('');
  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current?.showToast();
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPayOutData();
  }, [JSON.stringify(params)]);

  const getPayOutData = async () => {
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    const payOuts = await getAllPayOuts(queryString);
    if (payOuts?.data) {
      const payload = {
        payout: payOuts.data.rows,
        totalCount: payOuts.data.totalCount,
      };
      dispatch(getPayOuts(payload));
    } else {
      setNotificationStatus(Status.ERROR);
      setNotificationMessage('No PayIns Found!');
      basicNonStickyNotificationToggle();
    }
  };

  return (
    <>
      <div className="flex flex-col p-5">
        <Tab.Group>
          <Tab.List variant="tabs">
            <Tab>
              <Tab.Button
                className="w-full py-2 flex items-center justify-center"
                as="button"
              >
                <Lucide icon="Globe" className="w-5 h-5 ml-px stroke-[2.5]" />
                &nbsp; All
              </Tab.Button>
            </Tab>
            <Tab>
              <Tab.Button
                className="w-full py-2 flex items-center justify-center"
                as="button"
              >
                <Lucide
                  icon="BadgeCheck"
                  className="w-5 h-5 ml-px stroke-[2.5]"
                />
                &nbsp; Completed
              </Tab.Button>
            </Tab>
            <Tab>
              <Tab.Button
                className="w-full py-2 flex items-center justify-center"
                as="button"
              >
                <LoadingIcon icon="ball-triangle" className="w-4 h-4" />
                &nbsp; In Progress
              </Tab.Button>
            </Tab>
            <Tab>
              <Tab.Button
                className="w-full py-2 flex items-center justify-center"
                as="button"
              >
                <Lucide icon="BadgeX" className="w-5 h-5 ml-px stroke-[2.5]" />
                &nbsp; Rejected
              </Tab.Button>
            </Tab>
          </Tab.List>
          <Tab.Panels className="border-b border-l border-r">
            <Tab.Panel className="py-5 leading-relaxed">
              <AllPayOut />
            </Tab.Panel>
            <Tab.Panel className="py-5 leading-relaxed">
              <CompletedPayOut />
            </Tab.Panel>
            <Tab.Panel className="py-5 leading-relaxed">
              <InProgressPayOut />
            </Tab.Panel>
            <Tab.Panel className="py-5 leading-relaxed">
              <RejectedPayOut />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      {notificationMessage && (
        <div className="text-center">
          <Notification
            getRef={(el) => {
              basicNonStickyNotification.current = el;
            }}
            options={{
              duration: 3000,
            }}
            className="flex flex-col sm:flex-row"
          >
            {notificationStatus === Status.SUCCESS ? (
              <Lucide icon="BadgeCheck" className="text-primary" />
            ) : (
              <Lucide icon="X" className="text-danger" />
            )}
            <div className="font-medium ml-4 mr-4">
              <div className="font-medium">{notificationMessage}</div>
            </div>
          </Notification>
        </div>
      )}
    </>
  );
};

export default PayOut;
