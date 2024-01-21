//"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logos/logo1.png";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import VehicleDropdown from "../components/VehicleDropdown";
import MenuDrawer from "../components/MenuDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// export async function searchProducts(formData: FormData) {
//   "use server";

//   const searchQuery = formData.get("searchQuery")?.toString();

//   if (searchQuery) {
//     redirect("/search?query=" + searchQuery);
//   }

// }

export default async function NavBar() {
  // const session = await getServerSession(authOptions);
  // const cart = await getCart();

  // const [nav, setNav] = useState(false)

  // const handleNav = () => {
  //   setNav(!nav)
  // }

  return (
    <div className="bg-primary absolute sm:fixed w-full z-[12]">
      <div className="navbar sm:flex hidden max-w-7xl m-auto flex-col sm:flex-row gap-2 p-[0.1px]">
        <div className="flex-1 p-3">
          <Link href="/">
            <Image src={logo} height={120} width={120} alt="mitsubishi logo" />
          </Link>
        </div>

        {/* navbar options */}

        <div className="flex-1">
          <h1 className="text-black font-semibold font-sans uppercase text-2xl">
            Mitsubishi motors Uganda
          </h1>
        </div>

        {/* services section */}

        <div className="text-black flex p-2">
          <VehicleDropdown />

          <Link href="/Servicing">
            <summary className="btn hover:bg-black hover:text-white p-2 btn-ghost">
              SERVICING
            </summary>
          </Link>

          <Link href="/Dealerships">
            <summary className="btn hover:bg-black hover:text-white p-2 btn-ghost">
              DEALERSHIPS
            </summary>
          </Link>
        </div>

        {/* menu section */}
        <div>
          <MenuDrawer />
        </div>
        <div className="flex-none gap-2">
          {/* <form action={searchProducts}>
                  <div className="form-control">
                    <input 
                    name="searchQuery"
                    placeholder="Search"
                    className="input input-bordered w-full min-w-[100px] p-2 h-8"
                    />
                  </div>
                </form> */}
          {/* <ShoppingCartButton cart={cart}/>
              <UserMenuButton session={session}/> */}
        </div>
      </div>
      {/* <MobileNavbar /> */}
    </div>
  );
}