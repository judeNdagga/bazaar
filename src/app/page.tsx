import Image from "next/image";
import Link from "next/link";
import BackgroundPic from "./components/BackgroundPic";
interface HomePageProps {
  backgroundpic: string;
}
export default function HomePage() {
  return (
    <div className="hero w-full min-h-screen">
    <BackgroundPic/>
    </div>
  );
}
