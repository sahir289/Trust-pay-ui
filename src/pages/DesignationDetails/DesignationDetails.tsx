import {
  FormLabel,

} from "@/components/Base/Form";
import { Dialog, Menu } from '@/components/Base/Headless';

import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import React from "react";
import { FormInput } from "@/components/Base/Form";

// SubMerchant interface definition

// Roles interface definition
export interface Designation {
  sno: number; // Serial number or index
  position: string; // Position of the person
  name: string; // Person's name
  manager: string; // Manager's name
  joinedDate: string; // Date they joined
  status: string; // Status, perhaps active or inactive
  department?: string; // Optional department field
}

interface ModalProps {
  handleModal: () => void;
  title: string;
  transaction: Designation; // Type for transaction
}

const DesignationDetails: React.FC<ModalProps> = ({ handleModal, transaction }) => {

  return (
    <Dialog open={true} onClose={handleModal}>
      <Dialog.Panel>
        <Dialog.Title>
          <h2 className="mr-auto text-base font-medium">
            Designation Details
          </h2>
          <Lucide
            icon="X"
            className="w-5 h-5 ml-px stroke-[3]"
            // onClick={() => setNewMerchantModal(false)}
            onClick={handleModal}
          />
          <Menu className="sm:hidden">
            <Menu.Button
              as="a"
              className="block w-5 h-5"
              href="#"
            >
              <Lucide
                icon="MoreHorizontal"
                className="w-5 h-5 text-slate-500"
              />
            </Menu.Button>

          </Menu>
        </Dialog.Title>
        <div className="col-span-12 sm:col-span-6 mx-5 mt-2">
          <FormLabel htmlFor="modal-form-1">
            name
          </FormLabel>
          <FormInput
            id="modal-form-1"
            type="text"
            placeholder={transaction.name}
          />
        </div>
        <div></div>

        <Dialog.Description className="grid grid-cols-2 gap-4 gap-y-3">
          <div className="col-span-1">
            <FormLabel htmlFor="modal-form-1">
              Sno
            </FormLabel>
            <FormInput
              id="modal-form-1"
              type="text"
              placeholder={transaction.sno.toString()}
            />
          </div>
          <div className="col-span-1">
            <FormLabel htmlFor="modal-form-2">
              Position
            </FormLabel>
            <FormInput
              id="modal-form-2"
              type="text"
              placeholder={transaction.position}
            />
          </div>
          <div className="col-span-1">
            <FormLabel htmlFor="modal-form-3">
              Manager
            </FormLabel>
            <FormInput
              id="modal-form-3"
              type="text"
              placeholder={transaction.manager}
            />
          </div>
          <div className="col-span-1">
            <FormLabel htmlFor="modal-form-4">
              joinedDate
            </FormLabel>
            <FormInput
              id="modal-form-4"
              type="text"
              placeholder={transaction.joinedDate}
            />
          </div>
        </Dialog.Description>



        <Dialog.Description className="grid grid-cols-2 gap-4 gap-y-3">

          <div className="col-span-1 sm:col-span-1">
            <FormLabel htmlFor="modal-form-3">
              Status
            </FormLabel>
            <FormInput
              id="modal-form-3"
              type="text"
              placeholder={transaction.status}
            />
          </div>

          <div className="col-span-1 sm:col-span-1 mx-5">
            <FormLabel htmlFor="modal-form-3">
              Department
            </FormLabel>
            <FormInput
              id="modal-form-3"
              type="text"
              placeholder={transaction.department}
            />
          </div>
        </Dialog.Description>


        <Dialog.Footer className="mt-4">
          <Button
            type="button"
            variant="outline-secondary"
            onClick={handleModal
              // setNewMerchantModal(false);
            }
            className="w-20 mr-1"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="button"
            className="w-20 ml-3"
          // ref={sendButtonRef}
          >
            Save
          </Button>
        </Dialog.Footer>

      </Dialog.Panel>
    </Dialog>
  );
};

export default DesignationDetails;