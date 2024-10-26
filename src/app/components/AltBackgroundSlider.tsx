"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";



export default function AltBackgroundSlider() {
  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/2022-mitsubishi-eclipse-cross-101-1612907183.jpg?crop=0.871xw:0.736xh;0.00326xw,0.127xh&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-mirage-101-64b94568391dc.jpg?crop=0.800xw:0.478xh;0.0391xw,0.373xh&resize=1200:*",
    "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-sport/my24/gallery/2024-mitsubishi-outlander-sport-suv-brown-parked-street.jpg?width=2160&auto=webp&quality=70",
    "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/mirage-g4/my24/gallery/carousel_exterior/2024-mitsubishi-mirage-g4-sedan-white-driving-fast-gallery.jpg",
    "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-phev/my24/gallery/exterior/2024-mitsubishi-outlander-phev-forest.jpg",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col w-full"
      >
        <motion.p className="font-semibold text-base pl-[30%] sm:pl-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-20">
          NEW IN STOCK
        </motion.p>
        <motion.p className="font-bold text-5xl md:text-5xl pl-[25%] sm:pl-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          UPGRADE YOUR DRIVING <br /> <a className="font-normal text-red-400  hover:text-red-600 sm:pl-36 transition duration-500 italic">EXPERIENCE</a>
        </motion.p>
        <motion.p className="font-medium mb-10 text-md md:text-lg pl-[20%] sm:pl-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Get great offers on our best-selling vehicles during our Year<br />End Sales Event.
         <br /> 
      
      
      
        </motion.p>
        <a href="/pages/buy"
        className="inline-flex h-12 w-[15em] hover:w-[16em] ml-20 transition-all duration-300 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
        EXPLORE OFFERS
      </a>
      </motion.div>
    </ImagesSlider>
  );
}
