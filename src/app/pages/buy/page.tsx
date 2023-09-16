import CarCard from "@/app/components/CarCard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link"

export default async function BuyHomePage() {
  const cars = await prisma.car.findMany({
    orderBy: { id: "desc" },
  });

  return(
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <Image
        src={cars[0].imageUrl}
        alt={cars[0].name}
        width={800}
        height={400}
        className="w-full max-w-sm rounded-lg shadow-2xl"
        priority
        />
        <div>
          <h1 className="text-5xl font-bold">{cars[0].name}</h1>
          <p className="py-6">{cars[0].description}</p>
          <Link
          href={"../../cars/" + cars[0].id}
          className="btn btn-primary"
          >
            Check it out
          </Link>
        </div>
        </div>
       
      </div>

      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cars.slice(1).map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  )
}
