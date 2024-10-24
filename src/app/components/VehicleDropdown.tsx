import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import prisma from "@/lib/db/prisma";
export default async function VehicleDropdown() {

  const cars = await prisma.car.findMany();

  return (
    <div>
      <div className="dropdown dropdown-hover">
        <Link className="font-bold hover:text-white p-2 btn-ghost" href="/pages/buy">
          
            VEHICLES
          
        </Link>
          <ul
            tabIndex={0}
            className="menu grid sm:grid-cols-1 
            md:grid-cols-2 xl:grid-cols-3 
            dropdown-content z-[1] shadow 
            rounded-box w-[60em] -inset-x-80 bg-black bg-opacity-40"
          >
            {cars.map((car) => (
                <Link href={"../../cars/" + car.id}>
                  <li key={car.id}>
                    <img src={car.imageUrl} alt="pic" className="w-[30em] h-[16em] object-cover hover:scale-110 transition duration-300"/>
                    <h2 className="justify-center text-white tracking-wide font-medium hover:text-red-300">{car.name}</h2>
                  </li>
              </Link>
            ))}
          </ul>
      </div>
    </div>
  );
}
