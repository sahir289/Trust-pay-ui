import React, { useState } from "react";

const BankAccountModal = () => {
  const [selectedOption, setSelectedOption] = useState("PayIn"); // State to track selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update state when option changes
  };

  return (
    <Dialog.Panel>
      <Dialog.Title>
        <h2 className="mr-auto text-base font-medium">Add Bank Account</h2>
      </Dialog.Title>
      <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-7">
        {/* Other fields */}
        <div className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="modal-form-6">PayIn/PayOut:</FormLabel>
          <FormSelect id="modal-form-6" onChange={handleOptionChange} value={selectedOption}>
            <option value="PayIn">PayIn</option>
            <option value="PayOut">PayOut</option>
          </FormSelect>
        </div>

        {/* Conditional Rendering for PayIn Fields */}
        {selectedOption === "PayIn" && (
          <fieldset className="col-span-12 sm:col-span-12 border-2 rounded-lg border-gray-200 mx-5 my-2">
            <legend className="ml-4 pt-1 px-2">Pay IN</legend>
            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-7">
              <div className="col-span-12 sm:col-span-6">
                <FormLabel htmlFor="modal-form-1">Min Payin:</FormLabel>
                <FormInput id="modal-form-1" type="Number" />
              </div>
              <div className="col-span-12 sm:col-span-6">
                <FormLabel htmlFor="modal-form-1">Max Payin:</FormLabel>
                <FormInput id="modal-form-1" type="Number" />
              </div>
            </Dialog.Description>
          </fieldset>
        )}

        {/* Conditional Rendering for PayOut Field */}
        {selectedOption === "PayOut" && (
          <div className="col-span-12 sm:col-span-12">
            <FormLabel htmlFor="modal-form-1">Max Payout:</FormLabel>
            <FormInput id="modal-form-1" type="Number" />
          </div>
        )}

        {/* Other fields */}
        <div className="col-span-12 sm:col-span-12 flex justify-between items-center">
          {/* Enabled, QR, Bank Switches */}
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between">
            <FormLabel htmlFor="modal-form-1" className="mr-2">Enabled:</FormLabel>
            <FormSwitch className="dark:border-red-500 rounded-lg">
              <FormSwitch.Label htmlFor="show-example-1" className="ml-0">
                <FormSwitch.Input
                  id="show-example-1"
                  className="ml-0 mr-0 border-2 border-slate-300"
                  type="checkbox"
                />
              </FormSwitch.Label>
            </FormSwitch>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between">
            <FormLabel htmlFor="modal-form-1" className="mr-2">QR?:</FormLabel>
            <FormSwitch className="dark:border-red-500 rounded-lg">
              <FormSwitch.Label htmlFor="show-example-1" className="ml-0">
                <FormSwitch.Input
                  id="show-example-1"
                  className="ml-0 mr-0 border-2 border-slate-300"
                  type="checkbox"
                />
              </FormSwitch.Label>
            </FormSwitch>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between">
            <FormLabel htmlFor="modal-form-1" className="mr-2">Bank?:</FormLabel>
            <FormSwitch className="dark:border-red-500 rounded-lg">
              <FormSwitch.Label htmlFor="show-example-1" className="ml-0">
                <FormSwitch.Input
                  id="show-example-1"
                  className="ml-0 mr-0 border-2 border-slate-300"
                  type="checkbox"
                />
              </FormSwitch.Label>
            </FormSwitch>
          </div>
        </div>
      </Dialog.Description>
      <Dialog.Footer>
        <Button
          type="button"
          variant="outline-secondary"
          onClick={() => setHeaderFooterModalPreview(false)}
          className="w-20 mr-1"
        >
          Cancel
        </Button>
        <Button variant="primary" type="button" className="w-20" ref={sendButtonRef}>
          OK
        </Button>
      </Dialog.Footer>
    </Dialog.Panel>
  );
};

export default BankAccountModal;