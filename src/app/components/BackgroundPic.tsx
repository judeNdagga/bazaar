"use client";
import Link from "next/link";
import React, { useState } from "react";
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
      name: "2024 Mitsubishi Eclipse Cross",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-mirage-101-64b94568391dc.jpg?crop=0.800xw:0.478xh;0.0391xw,0.373xh&resize=1200:*",
      name: "2024 Mitsubishi Mirage",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-outlander-sport-103-64b83fa38da65.jpg?crop=0.469xw:0.399xh;0.231xw,0.450xh&resize=1200:*",
      name: "2024 Mitsubishi Outlander Sport",
    },

    {
      url: "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-mirage-g4-103-6508a36ae3654.jpg?crop=0.792xw:1.00xh;0.106xw,0&resize=1200:*",
      name: "2024 Mitsubishi Mirage G4",
    },
    {
      url: "https://images.unsplash.com/photo-1596429924638-d1f8a252df7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      name: "Outlander New",
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


const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="h-screen w-full m-auto relative group">
      <motion.div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full min-h-screen bg-center bg-cover duration-1000"
        
        
      >
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        {/* <Image src={slides[currentIndex].url} alt="pic"
        width={1920}
        height={1080}
        
        /> */}
      </motion.div>
      {/* <div className="w-full h-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
          </div> */}
      {/* Descriptive content */}

      <motion.div
        className="absolute top-[27%] text-white left-8 w-[40em] h-48 bg-gradient-to-r from-black from-10% via-black via-25% pl-4 pt-6"
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <motion.h1 className="text-3xl uppercase"
        animate={{ fontSize: 30, x: 50 }}
        >{slides[currentIndex].name}</motion.h1>
        <p className="pt-2">
          Available with air conditioning, 4x4 and racing mode. Installment
          payments are supported
        </p>
        <div className="text-center pt-4">
          <Link href="/pages/buy">
            <button className="btn bg-red-600 border-red-600">
              <h5 className="text-white">Discover More</h5>
            </button>
          </Link>
        </div>
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
