import React, { useState, useEffect } from "react";
import { Dialog } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import DynamicForm from "../../components/CommonForm"; // Import our dynamic form

interface ModalProps {
  handleModal: () => void;
  sendButtonRef?: React.RefObject<HTMLButtonElement>;
  title: string;
  forOpen: boolean;
  formFields: any[];
  existingData?: any;
}

const Modal: React.FC<ModalProps> = ({ handleModal, sendButtonRef, title, forOpen, formFields, existingData }) => {

  // Determine if we are editing
  const isEditMode = !!existingData;

  // Set initial values if editing
  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    if (isEditMode) {
      setDefaultValues(existingData);
    } else {
      setDefaultValues({});
    }
  }, [existingData]);

  const handleSubmit = (data: any) => {
    if (isEditMode) {
      console.log("Updated Data:", data);
      // Call API to update existing record
    } else {
      console.log("New Data:", data);
      // Call API to create new record
    }
    handleModal();
  };

  return (
    <Dialog open={forOpen} onClose={handleModal} initialFocus={sendButtonRef}>
      <Dialog.Panel className="pt-2 pb-4">
        <Dialog.Title className="flex justify-between">
          <h2>{isEditMode ? "Edit Form" : "Add Form"}</h2>
          <Lucide icon="X" className="w-5 h-5 cursor-pointer" onClick={handleModal} />
        </Dialog.Title>
          <DynamicForm fields={formFields || []} onSubmit={handleSubmit} defaultValues={defaultValues} isEditMode={isEditMode}/>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;

