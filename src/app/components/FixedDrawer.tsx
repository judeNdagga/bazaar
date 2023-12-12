"use client";
import { GiSteeringWheel, GiNotebook, GiMoneyStack } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import BookATestDrive from "./BookATestDrive";
import { motion, AnimatePresence } from "framer-motion";

export default function FixedDrawer() {
  return (
    <motion.div
      className="fixed top-[33%] text-white grid grid-cols-1 gap-2 text-3xl right-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="dropdown dropdown-hover bg-black pt-4 dropdown-left"
      >
        <GiSteeringWheel />

        <li
          tabIndex={0}
          className="dropdown-content z-[1] menu rounded-box w-44"
        >
          <a className="bg-black text-[0.7rem] hover:bg-white hover:text-black">
            <BookATestDrive />
          </a>
        </li>
      </motion.div>
      <motion.div
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="dropdown dropdown-hover bg-black pt-4 dropdown-left"
      >
        <GiNotebook />

        <li
          tabIndex={0}
          className="dropdown-content z-[1] menu rounded-box w-44"
        >
          <a
            href="/docs/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-[0.7rem] hover:bg-white hover:text-black"
          >
            Request a Brochure
          </a>
        </li>
      </motion.div>
      <motion.div
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="dropdown dropdown-hover bg-black pt-4 dropdown-left"
      >
        <ImLocation2 />

        <li
          tabIndex={0}
          className="dropdown-content z-[1] menu rounded-box w-44"
        >
          <a
            href="../Dealerships"
            className="bg-black text-[0.7rem] hover:bg-white hover:text-black"
          >
            Find a Dealer
          </a>
        </li>
      </motion.div>
      <motion.div
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="dropdown dropdown-hover bg-black pt-4 dropdown-left"
      >
        <GiMoneyStack />

        <li
          tabIndex={0}
          className="dropdown-content z-[1] menu rounded-box w-44"
        >
          <a 
          href="/docs/brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-[0.7rem] hover:bg-white hover:text-black">
            Request a Finance Quote
          </a>
        </li>
      </motion.div>
      <motion.div
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="dropdown dropdown-hover bg-black pt-4 dropdown-left"
      >
        <RiCustomerService2Fill />

        <li
          tabIndex={0}
          className="dropdown-content z-[1] menu rounded-box w-44"
        >
          <a className="bg-black text-[0.7rem] hover:bg-white hover:text-black">
            Customer Support
          </a>
        </li>
      </motion.div>
    </motion.div>
  );
}
