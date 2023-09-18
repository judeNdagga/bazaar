import Image from "next/image";
import Link from "next/link";

interface HomePageProps {
  backgroundpic: string;
}
export default function HomePage() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1621808752171-531c30903889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="backgroundpic"
        height={1080}
        width={1000}
        className="w-screen h-screen absolute"
      />

      <div className="relative flex flex-col items-center justify-center h-screen space-y-8">
        <Link href="/pages/buy">
          <button className="btn btn-wide bg-rose-500">
            <h5 className="text-slate-200">BUY CAR</h5>
          </button>
        </Link>

        <Link href="/pages/sell">
          <button className="btn btn-wide bg-rose-500">
            <h5 className="text-slate-200">SELL CAR</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}
