"use server";

import { createCart, getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setCarQuantity(carId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find((item) => item.carId === carId);

  if (quantity === 0) {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id},
        data: {
          items: {
            delete: {id: articleInCart.id},
          }
        }
      })

      
    }
  } else {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id},
        data: {
          items: {
            update: {
              where: {id: articleInCart.id},
              data: {quantity}
            },
          }
        }
      })


      
    } else {

      await prisma.cart.update({
        where: { id: cart.id},
        data: {
          items: {
            create: {
              carId,
              quantity
            },
          }
        }
      })


     
    }
  }

  revalidatePath("/cart");
}
