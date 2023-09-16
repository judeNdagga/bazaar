import NavBar from "./components/navbar";
import Link from "next/link";

interface HomePageProps {
  backgroundpic: string;
}
export default function HomePage() {
  return (
    <div>
      <NavBar />
      
        
        
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
