import PriceTag from "@/app/components/PriceTag";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import Specifications from "./Specifications";
import Accessories from "./Accessories";
import Gallery from "./Gallery";

interface CarPageProps {
  params: {
    id: string;
  };
}

const getCar = cache(async (id: string) => {
  const car = await prisma.car.findUnique({ where: { id } });

  if (!car) notFound();
  return car;
});
export async function generateMetadata({
  params: { id },
}: CarPageProps): Promise<Metadata> {
  const car = await getCar(id);
  return {
    title: car.name + " - Bazaar",
    description: car.description,
    openGraph: {
      images: [{ url: car.imageUrl }],
    },
  };
}

export default async function CarPage({ params: { id } }: CarPageProps) {
  const car = await getCar(id);

  return (
    

    <div className="bg-white">
      {/* Car Name */}
      <div className="">
        <h1 className="text-sm ml-[30%] md:ml-[40%] xl:ml-[45%] mt-[16%] font-bold tracking-widest absolute z-40 text-white">
          THE 2024 MITSUBISHI
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold ml-[24%] mt-[90%] md:mt-[80%] xl:mt-[19%] absolute z-40 text-white uppercase">
          {car.name}
        </h1>
        <h1 className="text-lg md:text-xl xl:text-2xl ml-[35%] mt-[140%] md:mt-[95%] xl:mt-[26%] absolute z-40 text-white">
          Wherever you go, go boldly, comfortably, and in style.
        </h1>
        <button className="inline-flex absolute z-40 h-12 w-[15em] hover:w-[16em] ml-[20%] md:ml-[37%] xl:ml-[43%] mt-[170%] md:mt-[110%] xl:mt-[32%] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
          BOOK YOUR TEST DRIVE
        </button>

        <div
          className="h-screen w-full bg-cover bg-center object-fill text-white"
          style={{
            backgroundImage: `url(${car.imageUrl})`,
            filter: `brightness(40%)`,
          }}
        ></div>
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
      <Accessories />

      {/* motorsports styling */}

      <div className="xl:flex xl:h-[38em]">
        <div className="xl:w-[50%] xl:mt-16 text-center xl:text-left text-black">
          <h1 className="xl:mt-28 xl:ml-40 text-xs font-semibold tracking-widest">
            RALLIART
          </h1>
          <h1 className="mt-4 xl:ml-40 text-5xl font-bold">
            Motorsports Styling Is In
          </h1>
          <p className="xl:mr-40 xl:ml-40 xl:mt-4 p-16 xl:p-0">
            Slip inside the 2024 Mirage RALLIART and feel the rush of our rally
            origins. Savvy urban style gets an upgrade with a rally car look and
            feel that includes unique body effects, RALLIART graphics, a
            luxurious White Diamond finish, and exclusive accessories. Drive the
            winning legacy of our motorsports heritage in this one-of-a-kind,
            limited edition.
          </p>
          <button className="inline-flex xl:ml-40 mt-6 h-12 w-[15em] hover:w-[16em] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
            EXPLORE RALLIART
          </button>
        </div>
        <div className="xl:w-[50%] xl:mt-16">
          <img
            src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/mirage/my24/overview/mirage-ralliart-overview.jpg?width=1080&auto=webp&quality=70"
            alt="pic"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="divider w-full p-12"></div>

      {/* Gallery */}
      <div className="text-center text-black font-bold">
        <h1 className="text-3xl p-4 pb-8">GALLERY</h1>
      </div>
      <Gallery />
    </div>
  );
}
