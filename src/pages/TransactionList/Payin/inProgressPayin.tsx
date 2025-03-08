/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Lucide from '@/components/Base/Lucide';
import { Menu, Popover } from '@/components/Base/Headless';
import users from '@/fakers/users';
import transactionStatus from '@/fakers/transaction-status';
import Button from '@/components/Base/Button';
import CustomTable from '../../../components/TableComponent/CommonTable';
import { FormInput, FormSelect } from '@/components/Base/Form';
import { Columns, Status } from '@/constants';
import { getAllPayInData, getRefreshPayIn } from '@/redux-toolkit/slices/payin/payinSelectors';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { getPaginationData } from '@/redux-toolkit/slices/common/params/paramsSelector';
import Notification, {
  NotificationElement,
} from '@/components/Base/Notification';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { getAllPayIns } from '@/redux-toolkit/slices/payin/payinAPI';
import { getPayIns, onload, setRefreshPayIn } from '@/redux-toolkit/slices/payin/payinSlice';

interface PayInProps {
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  setId?: React.Dispatch<React.SetStateAction<string>>;
  setParams?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  params?: Record<string, any>;
}

const InProgressPayIn: React.FC<PayInProps> = () => {
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
  const refreshPayIn = useAppSelector(getRefreshPayIn);

  useEffect(() => {
    getPayInData();
  }, [JSON.stringify(params)]);

  useEffect(() => {
    if (refreshPayIn) {
      getPayInData();
      dispatch(setRefreshPayIn(false));
    }
  }, [refreshPayIn, dispatch]);

  const getPayInData = useCallback(async () => {
    const newParams = { ...params };
    newParams.status = Status.ASSIGNED;
    const queryString = new URLSearchParams(
      newParams as Record<string, string>,
    ).toString();
    dispatch(onload());
    const payins = await getAllPayIns(queryString);
    if (payins?.data) {
      dispatch(getPayIns(payins?.data));
    } else {
      setNotificationStatus(Status.ERROR);
      setNotificationMessage('No PayIns Found!');
      basicNonStickyNotificationToggle();
    }
  }, [dispatch, params]);
  const payins = useAppSelector(getAllPayInData);

  return (
    <>
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12">
          <div className="mt-3.5">
            <div className="flex flex-col">
              <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
                <div>
                  <div className="relative">
                    <Lucide
                      icon="Search"
                      className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                    />
                    <FormInput
                      type="text"
                      placeholder="Search PayIns..."
                      className="pl-9 sm:w-64 rounded-[0.5rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
                  <Menu>
                    <Menu.Button
                      as={Button}
                      variant="outline-secondary"
                      className="w-full sm:w-auto"
                    >
                      <Lucide
                        icon="Download"
                        className="stroke-[1.3] w-4 h-4 mr-2"
                      />
                      Export
                      <Lucide
                        icon="ChevronDown"
                        className="stroke-[1.3] w-4 h-4 ml-2"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />{' '}
                        PDF
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />
                        CSV
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Popover className="inline-block">
                    {({ close }: { close: () => void }) => (
                      <>
                        <Popover.Button
                          as={Button}
                          variant="outline-secondary"
                          className="w-full sm:w-auto"
                        >
                          <Lucide
                            icon="ArrowDownWideNarrow"
                            className="stroke-[1.3] w-4 h-4 mr-2"
                          />
                          Filter
                          <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100 dark:bg-darkmode-400">
                            3
                          </div>
                        </Popover.Button>
                        <Popover.Panel placement="bottom-end">
                          <div className="p-2">
                            <div>
                              <div className="text-left text-slate-500">
                                User
                              </div>
                              <FormSelect className="flex-1 mt-2">
                                {users.fakeUsers().map((faker, fakerKey) => (
                                  <option key={fakerKey} value={fakerKey}>
                                    {faker.name}
                                  </option>
                                ))}
                              </FormSelect>
                            </div>
                            <div className="mt-3">
                              <div className="text-left text-slate-500">
                                Status
                              </div>
                              <FormSelect className="flex-1 mt-2">
                                {transactionStatus
                                  .fakeTransactionStatus()
                                  .map((faker, fakerKey) => (
                                    <option key={fakerKey} value={fakerKey}>
                                      {faker.name}
                                    </option>
                                  ))}
                              </FormSelect>
                            </div>
                            <div className="flex items-center mt-4">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  close();
                                }}
                                className="w-32 ml-auto"
                              >
                                Close
                              </Button>
                              <Button variant="primary" className="w-32 ml-2">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </div>
              </div>

              <CustomTable
                columns={Columns.PAYIN}
                data={{
                  rows: payins.payin,
                  totalCount: payins.totalCount,
                }}
              />
            </div>
          </div>
        </div>
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

export default InProgressPayIn;
