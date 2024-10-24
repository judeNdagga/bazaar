// axios cars details
"use client";

import { RxDimensions } from "react-icons/rx";
import { PiEngineLight } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";
import { GiSpanner } from "react-icons/gi";
import BookATestDrive from "../../components/BookATestDrive";
import axios from "axios";
import { useState, useEffect } from "react";

// interface SpecificationsProps {
//   transmission: String;
//   gearbox: String;
//   fuelType: String;
//   displacement: String;
//   fuelTankCapacity: String;
//   dimensions: String;
//   groundClearance: String;
//   wheelbase: String;
//   curbWeight: String;
//   image: String
// }

// export default function Specifications({
//   transmission,
//   gearbox,

//   fuelType,

//   displacement,
//   fuelTankCapacity,
//   dimensions,
//   groundClearance,
//   wheelbase,

//   curbWeight,
//   image,
// }: SpecificationsProps){
export default function Specifications() {
  // const [cars, setCars] = useState([]);
  // useEffect(()=>{}, []);

  return (
    <div className="text-black font-bold">
      <h1 className="text-3xl pb-16 text-center">SPECIFICATIONS</h1>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-16">
          {/* engine */}
          <div className="space-y-4">
            <div className="text-5xl">
              <PiEngineLight className="text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl">ENGINE</h1>
              <p className="font-medium text-gray-400 ">Displacement (cc) : 2755</p>
              <p className="font-medium text-gray-400 ">Fuel type : Diesel</p>
            </div>
          </div>
          {/* dimensions */}
          <div className="space-y-4">
            <div className="text-5xl">
              <RxDimensions className="text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl">DIMENSIONS</h1>
              <p className="font-medium text-gray-400 ">
                Dimensions (Lxwxh) in mm : 4795 x 1855 x 1835
              </p>
              <p className="font-medium text-gray-400 ">Ground clearance (mm) : 279</p>
              <p className="font-medium text-gray-400 ">Wheelbase (mm) : 2745</p>
            </div>
          </div>
          {/* transmission */}
          <div className="space-y-4">
            <div className="text-5xl">
              <TbManualGearbox className="text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl">TRANSMISSION</h1>
              <p className="font-medium text-gray-400 ">Gearbox : Automatic</p>
              <p className="font-medium text-gray-400 ">Transmission : Part time manual 4x4</p>
            </div>
          </div>
          {/* weight */}
          <div className="space-y-4">
            <div className="text-5xl">
              <GiWeight className="text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl">WEIGHT</h1>
              <p className="font-medium text-gray-400 ">Curb weight (kg) : 2185</p>
              <p className="font-medium text-gray-400 ">Fuel tank capacity (L) : 80</p>
            </div>
          </div>
          {/* warranty */}
          <div className="space-y-4">
            <div className="text-5xl">
              <GiSpanner className="text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl">WARRANTY</h1>
              <p className="font-medium text-gray-400 ">
                Manufacturer Warranty : 3 years / 100 000 Km
              </p>
              <p className="font-medium text-gray-400 ">Retail Network : Mitsubishi Uganda</p>
            </div>
          </div>
          {/* brochure */}
          <div className="">
            <div className="flex flex-col gap-3">
              <a
                href="/docs/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-[15em] hover:w-[16em] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200"
              >
                <button>BROCHURE</button>
              </a>
              <a
                href="/docs/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-[15em] hover:w-[16em] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200"
              >
                <button>INFORMATION</button>
              </a>
              
                <BookATestDrive />
              
            </div>
          </div>
        </div>
        {/* cars picture */}
        {/* <div className="text-right">
              <img src={image}
              alt="cars pic" 
              width={500}
              className="p-6"
              />
            </div> */}
      </div>
    </div>
  );
}
