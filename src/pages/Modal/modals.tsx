import React, { useState, useEffect } from "react";
import { Dialog } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import DynamicForm from "../../components/CommonForm"; // Import our dynamic form
interface ModalProps {
  handleModal: () => void;
  sendButtonRef?: React.RefObject<HTMLButtonElement>;
  title: string;
  forOpen: boolean;
  formFields: any;
  existingData?: any;
  setEditData?: any;
  handleSubmitData: (data: any, isEditMode?: boolean | undefined) => void;
}

const Modal: React.FC<ModalProps> = ({
  handleModal,
  sendButtonRef,
  title,
  forOpen,
  formFields,
  existingData,
  handleSubmitData
}) => {
  console.log(existingData, 'existingData');
  // Determine if we are editing
  const isEditMode = !!existingData;
  const initialValues = isEditMode ? existingData : {};
  console.log(isEditMode, "edit mode flag")
  // Set initial values if editing
  const [defaultValues, setDefaultValues] = useState(initialValues);
  const [key, setKey] = useState(0); // Key to force re-render on reset

  useEffect(() => {
    if (isEditMode) {
      setDefaultValues(existingData);
    } else {
      setDefaultValues({});
    }
  }, [existingData]);

  const handleSubmit = (data: any) => {
    if (isEditMode) {
      handleSubmitData( data, isEditMode)
      console.log('Updated Data:', data);
      // Call API to update existing record
    } else {
      handleSubmitData(data);
      console.log('New Data:', data);
      // Call API to create new record
    }
    handleModal();
  };

  const handleCancel = () => {
    if (isEditMode) {
      console.log('Updated Data:');
      // Call API to update existing record
    } else {
      console.log('New Data:');
      // Call API to create new record
    }
    handleModal();
  };

  const handleReset = () => {
    setDefaultValues(initialValues);
    setKey((prev) => prev + 1); // Force form to reset
  };

  return (
    <>
      <Button
        variant="primary"
        className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
        as="a"
        href="#"
        onClick={() => {
          // event.preventDefault();
          handleModal();
        }}
      >
        <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" /> {title}
      </Button>
      <Dialog open={forOpen} onClose={handleModal} initialFocus={sendButtonRef}>
        <Dialog.Panel className="p-6 pt-2 pb-4">
          <Dialog.Title className="flex justify-between">
            <h2>{title}</h2>
            <Lucide
              icon="X"
              className="w-5 h-5 cursor-pointer"
              onClick={handleModal}
            />
          </Dialog.Title>
          <DynamicForm
            key={key}
            sections={formFields}
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            isEditMode={isEditMode}
            handleCancel={handleCancel}
            handleReset={handleReset}
          />
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Modal;
