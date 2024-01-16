import logo from "../../../public/images/logos/logo1.png";
import Image from "next/image";
import BookATestDrive from "./BookATestDrive";
import { GiHamburgerMenu } from "react-icons/gi";
export default function MenuDrawer() {
  return (
    <div className="drawer z-40 absolute">
      <input id="my-drawer-8" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-8"
          className="btn btn-circle bg-slate-900 border-slate-900 text-white animate-pulse drawer-button text-3xl"
        >
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-8"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-black text-center ease-in duration-300">
          {/* Sidebar content here */}
          <li className="p-4 text-4xl text-gray-200 hover:text-gray-400 font-thin">
        <a href="/">Home</a>
        </li>
        <li className="p-4 text-4xl text-gray-200 hover:text-gray-400 font-thin">
        <a href="/pages/buy">Vehicles</a>
        </li>
        <li className="p-4 text-4xl text-gray-200 hover:text-gray-400 font-thin">
        <a href="/Servicing">Servicing</a>
        </li>
        <li className="p-4 text-4xl text-gray-200 hover:text-gray-400 font-thin">
        <a href="/Dealerships">Dealerships</a>
        </li>
                  </ul>
      </div>
    </div>
  );
}