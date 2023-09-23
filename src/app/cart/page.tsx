import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setCarQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Your Cart - Bazaar",
};

export default async function CartPage() {
    const cart = await getCart();
  return (
    <div className="p-4 min-h-screen">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map(cartItem =>(
        <CartEntry cartItem={cartItem} key={cartItem.id} setCarQuantity={setCarQuantity} />
      ))}
      {!cart?.items.length && <p>Your Cart Is Empty</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
            Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn bg-primary text-white sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}
