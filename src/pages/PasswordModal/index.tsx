import { useRef, useState } from "react";
import { Dialog, Menu } from "@/components/Base/Headless";  
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import { FormLabel, FormInput, FormSelect } from "@/components/Base/Form"; 
interface PasswordVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: () => void;
}

const PasswordVerificationModal: React.FC<PasswordVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerify,
}) => {
  const sendButtonRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog open={isOpen} onClose={onClose} initialFocus={sendButtonRef}>
      <Dialog.Panel>
        <Dialog.Title>
          <h2 className="mr-auto text-base font-medium">Password Verification</h2>
          <Lucide
            icon="X"
            className="w-5 h-5 ml-px stroke-[3]"
            onClick={onClose}
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

        <fieldset className="col-span-12 sm:col-span-12 border-2 rounded-lg border-gray-200 mx-5 my-2">
          <legend className="ml-4 pt-1 px-2">Password</legend>
          <Dialog.Description>
            <div className="relative col-span-12 sm:col-span-12">
              <FormInput
                id="modal-form-1"
                placeholder="Type here..."
                type={showPassword ? "text" : "password"} // Toggle password visibility
                className="w-full pr-10" // Space for icon
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Lucide icon="EyeOff" /> : <Lucide icon="Eye" />}
              </button>
            </div>
          </Dialog.Description>
        </fieldset>

        <Dialog.Footer>
          <Button
            variant="primary"
            type="button"
            className="w-20"
            ref={sendButtonRef}
            onClick={onVerify}
          >
            Verify
          </Button>
        </Dialog.Footer>
      </Dialog.Panel>
    </Dialog>
  );
};

export default PasswordVerificationModal;
