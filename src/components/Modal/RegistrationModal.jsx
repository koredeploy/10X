import { Button, Dialog } from "@material-tailwind/react";
import successIcon from "../../assets/Success Icon.svg";
import close from "../../assets/close-purchaseform.svg"
import { useState } from "react";
import ThanyouModal from "./ThanyouModal";
import PurchaseForm from "../../pages/external/SalesPage/PurchaseForm/PurchaseForm";

const RegistrationModal = ({ openReg, setOpenReg }) => {

  const closeForm = ()=>{
    setOpenReg(false)
  }
  
  return (
    <div>
      <Dialog
        size="lg md:sm lg:xs"
        open={openReg}
        handler={openReg}
        className="flex py-7 px-4 flex-col items-center justify-center gap-2"
      >
      <div className="w-full">
        <img className="absolute top-4 right-4" onClick={closeForm} src={close} alt="" />
      <PurchaseForm/>
      </div>
      </Dialog>
    </div>
  );
};

export default RegistrationModal;
