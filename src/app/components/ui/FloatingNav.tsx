"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { cn } from "../../utils/cn";
import Link from "next/link";
import VehicleDropdown from "../VehicleDropdown";



export default function FloatingNav ({
  navItems,
  className,
}: {
  navItems: {
    name: any;
    
    icon?: JSX.Element;
  }[];
  className?: string;
}) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
 

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0 || direction > 0) {
          setVisible(true);
        }
         else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "flex w-full items-center fixed inset-x-0 mx-auto border border-transparent bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-3 space-x-4",
        
        )}
      >
       <img src="/favicon.ico" alt="logo" className="w-14 h-14" />
          <a className="text-white sm:text-lg font-bold" href="/">MITSUBISHI UGANDA</a>
          
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center inset-x-[5%] sm:inset-x-[40%] w-[8em] font-bold flex space-x-1 hover:text-red-300 transition duration-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        
        
      </motion.div>
    </AnimatePresence>
    
    </div>
  );
};
