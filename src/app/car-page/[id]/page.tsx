"use client"

import Specifications from "./Specifications";
import Accessories from "./Accessories";
import Gallery from "./Gallery";
import axios from 'axios';
import { useState, useEffect } from "react";
import { cache } from "react";

interface CarPageProps {
  params: {
    id: string;
  };
}

export default function CarPage({ params: { id } }: CarPageProps, ) {
  const [car, setCars] = useState({});
  const [transmission, setTransmission] = useState('');
  const [gearbox, setGearbox] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [displacement, setDisplacement] = useState('');
  const [fuelTankCapacity, setFuelTankCapacity] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [groundClearance, setGroundClearance] = useState('');
  const [wheelbase, setWheelbase] = useState('');
  const [curbWeight, setCurbWeight] = useState('');
  const apiEndPoint = `http://localhost:8000/cars/${id}/`
   useEffect(()=>{

    const getCars = cache(async () =>{

      try {
        const {data: res} = await axios.get(apiEndPoint);
        setCars(res.car);
        setTransmission(res.car.details.transmission.join(', '));
        setGearbox(res.car.details.gearbox.join(', '));
        setFuelType(res.car.details.fuel_type.join(', '));
        setDisplacement(res.car.details.displacement.join(', '));
        setFuelTankCapacity(res.car.details.fuel_tank_capacity.join(', '));
        setDimensions(res.car.details.dimensions.join(', '));
        setGroundClearance(res.car.details.ground_clearance.join(', '));
        setWheelbase(res.car.details.wheelbase.join(', '));
        setCurbWeight(res.car.details.curb_weight.join(', '));

      } catch(e) {
        console.log('Error:', e)
      }
    });

    getCars();
  }, [apiEndPoint, id]);

  return (
    <div>
      <div className="bg-slate-300 text-black text-right">
        <h1 className="pr-8">FAQ</h1>
      </div>

      <div className="card-body p-4  min-h-screen bg-white ">
        {/* Car Name */}
        <div className="text-center text-black font-bold">
          <h1 className="text-3xl p-4 pb-8">{car.name}</h1>
          <p>
            {car.description}            
          </p>
        </div>
        <div className="divider w-full p-6"></div>

        {/* Specifications */}

        {/* <Specifications key={car.id}/> */}
        <Specifications
          key={car.id}
          transmission={transmission}
          gearbox={gearbox}
          fuelType={fuelType}
          displacement={displacement}
          fuelTankCapacity={fuelTankCapacity}
          dimensions={dimensions}
          groundClearance={groundClearance}
          wheelbase={wheelbase}
          curbWeight={curbWeight}
          image={car.image}
        />
        <div className="divider w-full p-12"></div>

        {/* Accessories */}

        <div className="text-center text-black font-bold">
          <h1 className="text-3xl p-4 pb-8">ACCESSORIES</h1>
        </div>
        <Accessories/>
        <div className="divider w-full p-12"></div>

        {/* Gallery */}
        <div className="text-center text-black font-bold">
          <h1 className="text-3xl p-4 pb-8">GALLERY</h1>
        </div>
        <Gallery/>
      </div>
    </div>
  );
}
