import Button from '@/components/Base/Button';
import { FormInput, FormLabel } from '@/components/Base/Form';
import { Dialog } from '@/components/Base/Headless';
import Lucide from '@/components/Base/Lucide';
import React, { FC } from 'react';
interface Field {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}
interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: Field[];
  singleField : Field[];
  buttonText: string;
  onSubmit: () => void;
  onReset: () => void;
  // eslint-disable-next-line no-undef
  resetRef: React.RefObject<HTMLButtonElement>;
}
const ModalPopUp: FC<ModalDialogProps> = ({ 
  open, 
  onClose, 
  title, 
  fields, 
  singleField,
  buttonText, 
  onSubmit, 
  onReset, 
  resetRef 
}) => {
  return (
    <Dialog open={open} onClose={onClose} initialFocus={resetRef}>
      <Dialog.Panel className="pt-2 pb-4">
        <Dialog.Title className="justify-between">
          <h2>{title}</h2>
          <Lucide
            icon="X"
            className="w-5 h-5 ml-px stroke-[3]"
            onClick={onClose}
          />
        </Dialog.Title>
        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
          {fields?.map((field, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 mx-2">
              <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
              <FormInput
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </Dialog.Description>
        
        <Dialog.Description className="mx-1">

          {singleField?.map((val, key) => (
            <div key={key} className="mx-2 mb-2">
              <FormLabel htmlFor={val.id}>{val.label}</FormLabel>
              <FormInput
                id={val.id}
                type={val.type}
                placeholder={val.placeholder}
              />
            </div>
          ))}
        </Dialog.Description>
        <Dialog.Description className="mt-4 flex justify-end">
          <Button
            type="button"
            variant="outline-secondary"
            onClick={onReset}
            className="w-20 mr-1"
          >
            Reset
          </Button>
          <Button
            variant="primary"
            type="button"
            className="w-30 ml-3"
            onClick={onSubmit}
          >
            {buttonText}
          </Button>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ModalPopUp;
