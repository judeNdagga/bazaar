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
          <div className="w-64 h-48 space-y-4">
            <div className="text-5xl">
              <PiEngineLight />
            </div>
            <div>
              <h1>ENGINE</h1>
              <p className="font-light">Displacement (cc) : 2755</p>
              <p className="font-light">Fuel type : Diesel</p>
            </div>
          </div>
          {/* dimensions */}
          <div className="w-64 h-48 space-y-4">
            <div className="text-5xl">
              <RxDimensions />
            </div>
            <div>
              <h1>DIMENSIONS</h1>
              <p className="font-light">
                Dimensions (Lxwxh) in mm : 4795 x 1855 x 1835
              </p>
              <p className="font-light">Ground clearance (mm) : 279</p>
              <p className="font-light">Wheelbase (mm) : 2745</p>
            </div>
          </div>
          {/* transmission */}
          <div className="w-64 h-48 space-y-4">
            <div className="text-5xl">
              <TbManualGearbox />
            </div>
            <div>
              <h1>TRANSMISSION</h1>
              <p className="font-light">Gearbox : Automatic</p>
              <p className="font-light">Transmission : Part time manual 4x4</p>
            </div>
          </div>
          {/* weight */}
          <div className="w-64 h-48 space-y-4">
            <div className="text-5xl">
              <GiWeight />
            </div>
            <div>
              <h1>WEIGHT</h1>
              <p className="font-light">Curb weight (kg) : 2185</p>
              <p className="font-light">Fuel tank capacity (L) : 80</p>
            </div>
          </div>
          {/* warranty */}
          <div className="w-64 h-48 space-y-4">
            <div className="text-5xl">
              <GiSpanner />
            </div>
            <div>
              <h1>WARRANTY</h1>
              <p className="font-light">
                Manufacturer Warranty : 3 years / 100 000 Km
              </p>
              <p className="font-light">Retail Network : Mitsubishi Uganda</p>
            </div>
          </div>
          {/* brochure */}
          <div className="">
            <div className="flex flex-col gap-3">
              <a
                href="/docs/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wide btn"
              >
                <button>BROCHURE</button>
              </a>
              <a
                href="/docs/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wide btn"
              >
                <button>INFORMATION</button>
              </a>
              <div className="btn bg-slate-900 text-gray-200">
                <BookATestDrive />
              </div>
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
