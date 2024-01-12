import logo from "../../../public/images/logos/logo1.png";
import Image from "next/image";
import BookATestDrive from "./BookATestDrive";
import { GiHamburgerMenu } from "react-icons/gi";
export default function MenuDrawer() {
  return (
    <div className="drawer drawer-end z-40">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost text-black drawer-button text-3xl"
        >
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-primary text-black">
          {/* Sidebar content here */}
          <Image src={logo} alt="logo" />
          <li className="pt-4">
            <a href="/pages/buy">Buy Vehicle</a>
          </li>
          <li>
            <a>
              <BookATestDrive />
            </a>
          </li>
          <div className="divider mt-[0.01rem] mb-[0.01rem]"></div>
          <li>
            <a href="/Servicing">Service My Vehicle</a>
          </li>
          <li>
            <a href="/Servicing/spareparts">Our Spare Parts</a>
          </li>

          <li>
            <a href="/Safety">Safety</a>
          </li>
          <div className="divider mt-[0.01rem] mb-[0.01rem]"></div>
          <li>
            <a>Fleet</a>
          </li>
          <li>
            <a>Our Mobility Solutions</a>
          </li>
          <div className="divider mt-[0.01rem] mb-[0.01rem]"></div>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Mistsubishi Uganda</a>
          </li>
          <li>
            <a>Contact My Dealership</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
