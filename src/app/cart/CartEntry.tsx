"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setCarQuantity: (carId: string, quantity: number) => Promise<void>;
}
export default function CartEntry({
  cartItem: { car, quantity },
  setCarQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={car.imageUrl}
          alt="car.name"
          width={200}
          height={200}
          className="rounded-lg"
        />

        <div>
          <Link href={"/cars/" + car.id} className="font-bold">
            {car.name}
          </Link>
          <div>Price: {formatPrice(car.price)}</div>

          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select select-bordered w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setCarQuantity(car.id, newQuantity);
                });
              }}
            >

                <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>

          <div className="flex items-center gap-3">
            Total: {formatPrice(car.price * quantity)}
            {isPending && <span className="loading loading-spinner loading-sm" />}
          </div>
          
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
