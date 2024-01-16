import PriceTag from "@/app/components/PriceTag";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementCarQuantity } from "./actions";
import Specifications from "./Specifications";
import Accessories from "./Accessories";
import Gallery from "./Gallery";
import MobileNavbar2 from "@/app/components/MobileNavbar2";
interface CarPageProps {
  params: {
    id: string;
  };
}

const getCar = cache(async (id: string) => { 
  const car = await prisma.car.findUnique({ where: { id } });

  if (!car) notFound();
  return car;
})
export async function generateMetadata({ params: { id } }: CarPageProps): Promise<Metadata>{
  const car = await getCar(id);
  return{
    title: car.name + " - Bazaar",
    description: car.description,
    openGraph: {
      images: [{url: car.imageUrl}]
    }
  }
}

export default async function CarPage({ params: { id } }: CarPageProps) {
  
  const car = await getCar(id);

  return(
    // <div className="flex flex-col lg:flex-row gap-4 lg:items-center p-4 bg-base-100 min-h-screen">
    //     <div className="text-right">
    //     <Image
    //     src={car.imageUrl}
    //     alt={car.name}
    //     width={500}
    //     height={500}
    //     className="rounded-lg"
    //     priority
    //     />
    //     </div>
    //     <div>
    //         <h1 className="text-5xl font-bold">{car.name}</h1>
    //         <PriceTag price={car.price} className="mt-4" />
    //         <p className="py-6">{car.description}</p>
    //         <AddToCartButton carId={car.id} 
    //         incrementCarQuantity={incrementCarQuantity}/>
    //     </div>
    // </div>

    
      

      <div className="card-body min-h-screen bg-white ">
         <MobileNavbar2 />
        {/* Car Name */}
        <div className="text-center text-black font-bold pt-20 pb-8">
          <h1 className="text-3xl">{car.name}</h1>
         
        </div>
        <div className="divider w-full pt-2 pb-6"></div>

        {/* Specifications */}

        {/* <Specifications key={car.id}/> */}
        <div className="flex justify-center">
          <div className="p-4">
        <Specifications
          // key={car.id}
          // transmission={transmission}
          // gearbox={gearbox}
          // fuelType={fuelType}
          // displacement={displacement}
          // fuelTankCapacity={fuelTankCapacity}
          // dimensions={dimensions}
          // groundClearance={groundClearance}
          // wheelbase={wheelbase}
          // curbWeight={curbWeight}
          // image={car.image}
        />
        </div>
         <div className="sm:text-right sm:p-2">
              <img src={car.imageUrl}
              alt="cars pic" 
              width={500}
              className="rounded-lg"
            
              />
            </div>

        {/* <h1 className="text-5xl font-bold text-black">{car.name}</h1>
             <PriceTag price={car.price} className="mt-4" />
             <p className="py-6">{car.description}</p>
             <AddToCartButton carId={car.id} 
             incrementCarQuantity={incrementCarQuantity}/> */}
        
        </div>
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
    
  )
}
