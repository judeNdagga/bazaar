"use client"
import Link from "next/link";
import BookAService from "./services/BookAService";
import {motion, AnimatePresence} from "framer-motion"
import Image from "next/image";
import MobileNavbar2 from "../components/MobileNavbar2";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      
     <Image
        src="https://images.unsplash.com/photo-1625860728869-b22bcd317126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="backgroundpic"
        width={1920}
        height={1080}
        className="w-full h-full absolute brightness-50 object-cover"
      />
      
      <div className="relative flex flex-col sm:flex-row items-center justify-center h-screen gap-8">
      
        <BookAService/>
  
        <Link href="/Servicing/services">
          <motion.button className="inline-flex h-12 w-[15em] hover:w-[16em] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200"
          initial={{y: 600, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          >
            <h5 className="">OUR SERVICES</h5>
          </motion.button>
        </Link>

        <Link href="/Servicing/spareparts">
          <motion.button className="inline-flex h-12 w-[15em] hover:w-[16em] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200"
          initial={{y: 600, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          >
            <h5 className="">OUR SPAREPARTS</h5>
          </motion.button>
        </Link>
        
      </div>
      
      
    </div>
  );
}