/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from "react";
import { Tab } from "@/components/Base/Headless";
import AllPayIn from "./allPayin";
import CompletedPayIn from "./completedPayin";
import InProgressPayIn from "./inProgressPayin";
import DroppedPayIn from "./droppedPayin";
import Lucide from "@/components/Base/Lucide";
import Notification, {
  NotificationElement,
} from "@/components/Base/Notification";
import { getAllPayIns } from "@/redux-toolkit/slices/payin/payinAPI";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { getPayIns } from "@/redux-toolkit/slices/payin/payinSlice";
import { Status } from "@/constants";

interface PayInProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const PayInComponent: React.FC<PayInProps> = ({ setStatus, setId }) => {
  const [params, setParams] = useState<{ [key: string]: string }>({
    page: "1",
    limit: "10",
  });
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationStatus, setNotificationStatus] = useState("");
  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current?.showToast();
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPayInData();
  }, [JSON.stringify(params)]);

  const getPayInData = async () => {
    const queryString = new URLSearchParams(params).toString();
    const payins = await getAllPayIns(queryString);
    if (payins?.data) {
      const payload = {
        payin: payins.data.rows,
        totalCount: payins.data.totalCount,
      };
      dispatch(getPayIns(payload));
    } else {
      setNotificationStatus(Status.ERROR);
      setNotificationMessage("No PayIns Found!");
      basicNonStickyNotificationToggle();
    }
  };

  return (
    <>
      <div className="flex flex-col p-5 ">
        <>
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
                  &nbsp; InProgress
                </Tab.Button>
              </Tab>
              <Tab>
                <Tab.Button
                  className="w-full py-2 flex items-center justify-center"
                  as="button"
                >
                  <Lucide
                    icon="Trash2"
                    className="w-5 h-5 ml-px stroke-[2.5]"
                  />
                  &nbsp; Dropped
                </Tab.Button>
              </Tab>
            </Tab.List>
            <Tab.Panels className="border-b border-l border-r">
              <Tab.Panel className="py-5 leading-relaxed">
                <AllPayIn
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
              <Tab.Panel className="py-5 leading-relaxed">
                <CompletedPayIn
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
              <Tab.Panel className="py-5 leading-relaxed">
                <InProgressPayIn
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
              <Tab.Panel className="py-5 leading-relaxed">
                <DroppedPayIn
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </>
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

export default PayInComponent;
