/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import React from "react";
import { Dialog } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
interface ModalProps {
  handleModal: () => void;
  sendButtonRef?: React.RefObject<HTMLButtonElement>;
  title?: string;
  forOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  handleModal,
  sendButtonRef,
  title,
  forOpen,
  children
}) => {

  return (
    <>
      {title && <Button
        variant="primary"
        className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
        as="a"
        href="#"
        onClick={() => {
          // event.preventDefault();
          handleModal();
        }}
      >
        <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />
        {title}
      </Button>}
      <Dialog open={forOpen} onClose={handleModal} initialFocus={sendButtonRef}>
        <Dialog.Panel className="p-6 pt-2 pb-4">
          <Dialog.Title className="flex justify-between">
            <h2>
              {/* {!isEditMode ? 'Add' : 'Edit'}{" "} */}
              {title}
            </h2>
            <Lucide
              icon="X"
              className="w-5 h-5 cursor-pointer"
              onClick={handleModal}
            />
          </Dialog.Title>
          {children}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Modal;
