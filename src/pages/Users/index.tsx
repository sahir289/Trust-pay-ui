/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Lucide from "@/components/Base/Lucide";
import {  FormInput } from "@/components/Base/Form";
import Modal from "../../components/Modal/modals";
import React, { useCallback, useEffect, useState } from "react";
import CustomTable from "@/components/TableComponent/CommonTable";
import { useAppDispatch } from "@/redux-toolkit/hooks/useAppDispatch";
import { createUser, getAllUsers } from "@/redux-toolkit/slices/user/userAPI";
import { addUser, getUsers, onload } from "@/redux-toolkit/slices/user/userSlice";
import { useAppSelector } from "@/redux-toolkit/hooks/useAppSelector";
import { selectAllUsers } from "@/redux-toolkit/slices/user/userSelectors";
import LoadingIcon from '@/components/Base/LoadingIcon';
import DynamicForm from "../../components/CommonForm"; 
import { Columns, getUserFormFields } from "@/constants";

const Users: React.FC = () => {
  const [newUserModal, setNewUserModal] = useState(false);
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(selectAllUsers);  

  const existingMerchant = {
    first_name: "John's Store",
    last_name: 500,
    user_name: "upi",
    email: true,
  };
 const designation = [
    { value: "1", label: "Admin" },
    { value: "2", label: "User" },
  ];
  const roles = [
    { value: "1", label: "Admin" },
    { value: "2", label: "User" },
  ];

  // const userRef = useRef(null);
  const userModal = () => {
    setNewUserModal(!newUserModal);
  };

  const fetchUsers = useCallback(async () => {
    // tempory disabled this functionality
    // const queryString = new URLSearchParams(params).toString();
    dispatch(onload());
    const userList = await getAllUsers("");
    dispatch(getUsers(userList));
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSubmit = (data: Record<string, unknown>) => {
    if (existingMerchant) {
      // Call API to update existing record
    } else {
      console.log('New Data:', data);
      // Call API to create new record
    }
    userModal();
  };

  const handleCreateUser = async () => {
    const newUser = await createUser({
      email: 'test@example.com',
      password: 'password123',
      first_name: 'John',
    });
    dispatch(addUser(newUser));
  };
  console.log(handleCreateUser, 'handleCreateUser');

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Users
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Modal
              handleModal={userModal}
              forOpen={newUserModal}
              title="Add User"
            >
            <DynamicForm
            sections={getUserFormFields(designation, roles)}
            onSubmit={handleSubmit}
            defaultValues={existingMerchant || {}}
            isEditMode={false}
            handleCancel={userModal}
          />
            </Modal>
            {/* <Modal handleModal={userModal} forOpen={newUserModal} title="Add User" formFields={formFields} existingData={existingMerchant}/> */}
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col p-5 box box--stacked">
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Registered Users</div>
                <div className="mt-1.5 text-2xl font-medium">4,204</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                    3%
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Active Users</div>
                <div className="mt-1.5 text-2xl font-medium">1,721</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                    2%
                    <Lucide
                      icon="ChevronUp"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">New Users</div>
                <div className="mt-1.5 text-2xl font-mediumm">223</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                    3%
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Login Activity</div>
                <div className="mt-1.5 text-2xl font-mediumm">259</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                    8%
                    <Lucide
                      icon="ChevronUp"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search users..."
                    className="pl-9 sm:w-64 rounded-[0.5rem]"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-auto xl:overflow-visible">
            {allUsers.loading ? <div className="flex justify-center items-center w-full h-screen">
              <LoadingIcon icon="ball-triangle" className="w-[5%] h-auto" />
            </div> :
              <CustomTable
                columns={Columns.USERS} 
                data={{rows: allUsers.users, totalCount: 100}}
              />
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
