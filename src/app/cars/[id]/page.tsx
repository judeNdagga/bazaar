import PriceTag from "@/app/components/PriceTag";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementCarQuantity } from "./actions";
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
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center p-4 bg-amber-300">
        <Image
        src={car.imageUrl}
        alt={car.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
        />

        <div>
            <h1 className="text-5xl font-bold">{car.name}</h1>
            <PriceTag price={car.price} className="mt-4" />
            <p className="py-6">{car.description}</p>
            <AddToCartButton carId={car.id} 
            incrementCarQuantity={incrementCarQuantity}/>
        </div>
    </div>
  )
}
