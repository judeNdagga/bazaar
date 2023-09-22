import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
  
}

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="bg-blue-900">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
             <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl text-white lowercase">
                <Image
                src={logo}
                height={40}
                width={40}
                alt="bazaar logo"
                
                />
               <h1 className="font-light font-mono"> bazaar </h1>
              </Link>
              </div> 
              <div className="flex-none gap-2">
                <form action={searchProducts}>
                  <div className="form-control">
                    <input 
                    name="searchQuery"
                    placeholder="Search"
                    className="input input-bordered w-full min-w-[100px] p-2 h-8"
                    />
                  </div>
                </form>
              <ShoppingCartButton cart={cart}/>
              <UserMenuButton session={session}/>
              </div>
      </div>
    </div>
  );
}
