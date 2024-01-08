"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function MobileNavbar(){
    const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return(
    <div className="w-full h-full absolute">
        {/* mobile button */}

        <div onClick={handleNav} className="block sm:hidden z-[4] text-4xl text-white absolute">
                
        {nav ? <AiOutlineClose/> : <GiHamburgerMenu/>}

      </div>

      {/* mobile menu */}

      <div 
      className={ 
        nav 
        ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
      :
      "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" }>
      <ul>
        <li className="p-4 text-4xl hover:text-gray-500">
        <a href="/pages/buy">Vehicles</a>
        </li>
        <li className="p-4 text-4xl hover:text-gray-500">
        <a href="/Servicing">Servicing</a>
        </li>
        <li className="p-4 text-4xl hover:text-gray-500">
        <a href="/Dealerships">Dealerships</a>
        </li>
        
      </ul>
      </div>

      </div>
  )
}