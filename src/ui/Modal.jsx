import { HiOutlineXMark } from "react-icons/hi2";
import LinkButton from "./LinkButton";
import { IoHomeOutline } from "react-icons/io5";

import { BsShop } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineManageAccounts } from "react-icons/md";


function Modal({ setIsOpenModal }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-[4px] bg-indigo-50/20 z-50 transition-all duration-700 ">
      <div className="fixed top-0 left-0 w-5/12 h-screen bg-indigo-50 modal">
        <button onClick={() => setIsOpenModal(false)}>
          <HiOutlineXMark size="40px" />
        </button>
        <ul className="flex flex-col gap-8 mt-10 px-4">
          <LinkButton to="/">
            <IoHomeOutline size="28px" color="oklch(0.54 0.01 0)" /> Home
          </LinkButton>
          <LinkButton to="/shop">
            <BsShop size="28px" color="oklch(0.54 0.01 0)" />
            Shop
          </LinkButton>
          <LinkButton to="/aboutus">
            <AiOutlineExclamationCircle
              size="28px"
              color="oklch(0.54 0.01 0)"
            />
            AboutUs
          </LinkButton>
          <LinkButton to="/contactus">
            <LiaPhoneVolumeSolid size="28px" color="oklch(0.54 0.01 0)" />
            ContactUs
          </LinkButton>
          <LinkButton to="/login">
            <MdOutlineManageAccounts size="28px" color="oklch(0.54 0.01 0)" />
            Account
          </LinkButton>
        </ul>
      </div>
    </div>
  );
}

export default Modal
