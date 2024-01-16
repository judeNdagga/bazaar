"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import '../css/embla.css'
import EmblaCarousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
export default function BackgroundPic() {
 
  const slides = [
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/2022-mitsubishi-eclipse-cross-101-1612907183.jpg?crop=0.871xw:0.736xh;0.00326xw,0.127xh&resize=1200:*",
      name: "Mitsubishi Eclipse Cross",
      desc: "Incredible Efficiency"
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-mirage-101-64b94568391dc.jpg?crop=0.800xw:0.478xh;0.0391xw,0.373xh&resize=1200:*",
      name: "Mitsubishi Mirage",
      desc: "Ease of Use"
    },
    {
      url: "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-sport/my24/gallery/2024-mitsubishi-outlander-sport-suv-brown-parked-street.jpg?width=2160&auto=webp&quality=70",
      name: "Mitsubishi Outlander Sport",
      desc: "Roaring Elegance"
    },

    {
      url: "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/mirage-g4/my24/gallery/carousel_exterior/2024-mitsubishi-mirage-g4-sedan-white-driving-fast-gallery.jpg",
      name: "Mitsubishi Mirage G4",
      desc: "Tailor-made Prospective"
    },
    {
      url: "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-phev/my24/gallery/exterior/2024-mitsubishi-outlander-phev-forest.jpg",
      name: "Mitsubishi Outlander",
      desc: "Incredible Power"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
  const autoNextSlide = setTimeout(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, 8000)

  return () => clearTimeout(autoNextSlide);
}, );

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="h-screen w-full m-auto relative group">
      <motion.div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full min-h-screen bg-center bg-cover duration-1000"
        
        
        
      >
        <motion.div className="absolute text-center pt-4 top-[20%] left-[10%]"
        animate={{ x: 80 }}
        transition={{ ease: "easeOut", duration: 1 }}
        >
          <Link href="/pages/buy">
            <button className="btn text-xs text-white bg-slate-900 hover:bg-slate-50 hover:text-slate-900 border-slate-900 btn-circle h-20 w-20 animate-bounce">
              Discover More
            </button>
          </Link>
        </motion.div>
      </motion.div>
      {/* <div className="w-full h-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
          </div> */}
      {/* Descriptive content */}

      <motion.div
        className="absolute bottom-[5%] text-white left-8 w-[40em] h-48 bg-gradient-to-r pl-4 pt-6"
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
         <p className="pt-2 uppercase text-sm">
          {slides[currentIndex].desc}
        </p>
        <motion.h1 className="text-7xl text-gray-200 font-light"
        animate={{ fontSize: 30, x: 50 }}
        >{slides[currentIndex].name}</motion.h1>
       
        
      </motion.div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
