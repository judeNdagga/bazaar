import { Car } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const isNew = Date.now() - new Date(car.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;
  return (
    <Link
      href={"../../cars/" + car.id}
      className="w-full bg-black text-white hover:text-red-400 hover:scale-110 transition duration-300"
    >

      <figure>
        <Image 
          src={car.imageUrl}
          alt={car.name}
          width={1360}
          height={1080}
          className="h-[16em] xl:h-[28em] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {car.name}
          {/* {isNew && <div className="badge badge-secondary">NEW</div>} */}
        </h2>
      
        {/* <p>{car.description}</p> */}
        {/* <PriceTag price={car.price}></PriceTag> */}
        

      </div>
    </Link>
  );
}
