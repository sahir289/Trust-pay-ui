/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from "react";
import { Tab } from "@/components/Base/Headless";
import AllPayin from "./allPayin";
import CompletedPayin from "./completedPayin";
import InProgressPayin from "./inProgressPayin";
import DroppedPayin from "./droppedPayin";
import Lucide from "@/components/Base/Lucide";
import Notification, {
  NotificationElement,
} from "@/components/Base/Notification";
import { getAllPayins } from "@/redux-toolkit/slices/payin/payinAPI";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { getPayins } from "@/redux-toolkit/slices/payin/payinSlice";
import { Status } from "@/constants";

interface PayinProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const PayinComponent: React.FC<PayinProps> = ({ setStatus, setId }) => {
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
    getPayinData();
  }, [JSON.stringify(params)]);

  const getPayinData = async () => {
    const queryString = new URLSearchParams(params).toString();
    const payins = await getAllPayins(queryString);
    if (payins?.data) {
      const payload = {
        payin: payins.data.rows,
        totalCount: payins.data.totalCount,
      }
      dispatch(getPayins(payload));
    } else {
      setNotificationStatus(Status.ERROR);
      setNotificationMessage("No Payins Found!");
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
                <AllPayin
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
              <Tab.Panel className="py-5 leading-relaxed">
                <CompletedPayin
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
              <Tab.Panel className="py-5 leading-relaxed">
                <InProgressPayin
                  setStatus={setStatus}
                  setId={setId}
                  params={params}
                  setParams={setParams}
                />
              </Tab.Panel>
              <Tab.Panel className="py-5 leading-relaxed">
                <DroppedPayin
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

export default PayinComponent;
