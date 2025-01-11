import { FaDollarSign } from "react-icons/fa";
import { GiNotebook, GiSteeringWheel } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function BottomNavbar() {
  return (
    <div className="fixed hidden  bottom-0 left-0 right-0 items-center justify-center bg-black h-12 shadow-lg z-50 text-white text-sm md:flex gap-6 font-semibold">
      <a
        className="flex cursor-pointer gap-3 w-[13em]"
        href="/docs/brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GiNotebook className="text-xl" /> BROCHURE
      </a>
      <a
        className="flex cursor-pointer gap-3 w-[13em]"
        href="/docs/brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDollarSign className="text-xl" /> FINANCE QUOTE
      </a>
      <a className="flex cursor-pointer gap-3 w-[16em] h-[5em] bg-red-600 justify-center pt-4 rounded-md">
        <GiSteeringWheel className="text-xl" /> BOOK TEST DRIVE
      </a>
      <a className="flex cursor-pointer gap-3 w-[13em]" href="../Dealerships">
        <IoLocation className="text-xl" /> FIND A DEALER
      </a>
      <a className="flex cursor-pointer gap-3 w-[13em]">
        <RiCustomerService2Fill className="text-xl" /> CUSTOMER SUPPORT
      </a>
    </div>
  );
}
