import CarCard from "@/app/components/CarCard";
import MobileNavbar2 from "@/app/components/MobileNavbar2";
import PaginationBar from "@/app/components/PaginationBar";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

interface HomeProps {
  searchParams: { page: string };
}
export default async function BuyHomePage({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const extraItemCount = 1;

  const totalItemCount = await prisma.car.count();
  const totalPages = Math.ceil((totalItemCount - extraItemCount) / pageSize);

  const cars = await prisma.car.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : extraItemCount),
    take: pageSize + (currentPage === 1 ? extraItemCount : 0),
  });

  return (
    <div className="bg-white overflow-hidden">
    
      <div className="pt-16">
        <h1 className="text-black card-body text-center text-3xl">
          DISCOVER MITSUBISHI VEHICLES
        </h1>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {(currentPage === 1 ? cars.slice(0) : cars).map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}