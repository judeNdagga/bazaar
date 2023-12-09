import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import prisma from "@/lib/db/prisma";
export default async function VehicleDropdown() {

  const cars = await prisma.car.findMany();

  return (
    <div>
      <div className="dropdown dropdown-hover">
        <Link href="/pages/buy">
          <summary className="btn hover:bg-black hover:text-white p-2 btn-ghost">
            VEHICLES
          </summary>
        </Link>
          <ul
            tabIndex={0}
            className="menu grid sm:grid-cols-1 
            md:grid-cols-2 xl:grid-cols-3 
            dropdown-content z-[1] shadow 
            rounded-box w-[28rem] bg-white"
          >
            {cars.map((car) => (
                <Link href={"../../cars/" + car.id}>
                  <li key={car.id}>
                    <img src={car.imageUrl} alt="pic"/>
                    <h2 className="justify-center text-black">{car.name}</h2>
                  </li>
              </Link>
            ))}
          </ul>
      </div>
    </div>
  );
}
