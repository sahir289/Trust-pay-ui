/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Tab } from '@/components/Base/Headless';
import AllPayIn from './allPayin';
import CompletedPayIn from './completedPayin';
import InProgressPayIn from './inProgressPayin';
import DroppedPayIn from './droppedPayin';
import Lucide from '@/components/Base/Lucide';
import LoadingIcon from '@/components/Base/LoadingIcon';
import { useAppDispatch } from '@/redux-toolkit/hooks/useAppDispatch';
import { useAppSelector } from '@/redux-toolkit/hooks/useAppSelector';
import { setActiveTab } from '@/redux-toolkit/slices/common/tabs/tabSlice';
import { getTabs } from '@/redux-toolkit/slices/common/tabs/tabSelectors';

interface PayInProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const PayInComponent: React.FC<PayInProps> = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(getTabs);

  const handleTabChange = (index: number) => {
    dispatch(setActiveTab(index));
  };

  return (
    <div className="flex flex-col p-5 ">
      <Tab.Group selectedIndex={activeTab} onChange={handleTabChange}>
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
              <Lucide icon="Trash2" className="w-5 h-5 ml-px stroke-[2.5]" />
              &nbsp; Dropped
            </Tab.Button>
          </Tab>
        </Tab.List>
        <Tab.Panels className="border-b border-l border-r">
          <Tab.Panel className="py-5 leading-relaxed">
            <AllPayIn />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <CompletedPayIn />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <InProgressPayIn />
          </Tab.Panel>
          <Tab.Panel className="py-5 leading-relaxed">
            <DroppedPayIn />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default PayInComponent;
