import prisma from "@/lib/db/prisma";
import CarCard from "../components/CarCard";
import { Metadata } from "next";
import { title } from "process";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - bazaar`,
  };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  const cars = await prisma.car.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  });

  if (cars.length === 0) {
    return <div>No Cars found</div>;
  }

  return (
    <div className="p-4 bg-amber-300">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
}
