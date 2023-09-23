import CarCard from "@/app/components/CarCard";
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
    <div className="p-4 flex flex-col items-center min-h-screen">
      {currentPage === 1 && (
        <div className="hero rounded-xl bg-base-100">
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
                className="btn bg-primary text-white"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {(currentPage === 1 ? cars.slice(1) : cars).map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
