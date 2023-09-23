import Image from "next/image";
import Link from "next/link";

interface HomePageProps {
  backgroundpic: string;
}
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1611937187627-a427e75ecf65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
        alt="backgroundpic"
        height={1080}
        width={1000}
        className="w-screen h-screen absolute"
      />

      <div className="relative flex flex-col items-center justify-center h-screen text-center">
        {/* <Link href="/pages/buy">
          <button className="btn btn-wide bg-amber-950">
            <h5 className="text-amber-300">BUY CAR</h5>
          </button>
        </Link>

        <Link href="/pages/sell">
          <button className="btn btn-wide bg-amber-950">
            <h5 className="text-amber-300">SELL CAR</h5>
          </button>
        </Link> */}
        <div className="w-[40rem] absolute top-36">
        <h1 className="text-cyan-50 font-thin text-6xl indent-20">CAR BOND</h1>
        <p className="text-cyan-400 text-2xl indent-20">Impressive Car Bond Slogan</p>
        <p className="text-white font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod voluptatum enim sapiente iusto dolore nobis officia modi aliquid at porro cupiditate ratione similique inventore illo iste, explicabo distinctio animi.
        </p>
        <Link href="/car-types">
          <button className="btn btn-wide glass">
            <h5 className="text-cyan-400">OPEN NOW</h5>
          </button>
        </Link>
        </div>
        
      </div>
    </div>
  );
}
