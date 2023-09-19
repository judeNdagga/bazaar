import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Car - Bazaar",
};

async function addCar(formData: FormData) {
  "use server";
  const session = await getServerSession(authOptions);

  if (!session){
    redirect("/api/auth/signin?callbackUrl=/pages/sell");
  }
  

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing Required Fields");
  }

  await prisma.car.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}
export default async function SellPage() {

  const session = await getServerSession(authOptions);

if (!session){
  redirect("/api/auth/signin?callbackUrl=/pages/sell");
}

  return (
    <div className="p-4">
      <h1 className="mb-3 text-lg font-bold">Add Car</h1>
      <form action={addCar}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          name="description"
          required
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image Url"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />

        <button type="submit" className="btn bg-rose-500 btn-block">
          Add Car
        </button>
      </form>
    </div>
  );
}
