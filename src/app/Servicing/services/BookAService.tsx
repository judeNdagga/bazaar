// axios post service details

"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {motion, AnimatePresence} from "framer-motion"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
export default function BookAService() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cars, setCars] = useState([]);
  const apiEndPoint = "http://localhost:8000/";
  useEffect(() => {
    const getCars = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setCars(res);
    };

    getCars();
  }, []);

  async function addService(formData: FormData) {
    const company = formData.get("company")?.toString();
    const first_name = formData.get("first_name")?.toString();
    const last_name = formData.get("last_name")?.toString();
    const email = formData.get("email")?.toString();
    const phone_number = formData.get("phone_number")?.toString();
    const model = Number(formData.get("model") || 0);
    const vin = formData.get("vin")?.toString();
    const service_request = formData.get("service_request")?.toString();

    if (
      !company ||
      !first_name ||
      !last_name ||
      !email ||
      !phone_number ||
      !model ||
      !vin ||
      !service_request
    ) {
      throw Error("Missing Required Fields");
    }

    const post = {
      company: company,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      model: model,
      vin: vin,
      service_request: service_request,
    };
    await axios.post(apiEndPoint+'/bookings/servicing/', post);
  }

  return (
    <div>


      <ChakraProvider>
      
       <motion.button onClick={onOpen} className="inline-flex h-12 w-[15em] hover:w-[16em] transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200"
       initial={{y: 600, opacity: 0}}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }}
       >
        BOOK A SERVICE
        </motion.button>

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader className='bg-slate-900 text-white text-center'>Book A Service</ModalHeader>
    <ModalCloseButton />
    <ModalBody className='bg-white'>
    <form action={addService}>
         <div className="grid grid-cols-2 gap-8 p-2 text-black">
            {/* 1st row */}
           <input
              type="number"
              name="civility"
              placeholder="Civility"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="input input-bordered w-full max-w-xs"
            />
            {/* second row */}
            <input
              type="text"
              name="first_name"
              placeholder="First Name*"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Second Name*"
              className="input input-bordered w-full max-w-xs"
            />
            {/* third row */}
            <input
              type="text"
              name="email"
              placeholder="E-mail*"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone*"
              className="input input-bordered w-full max-w-xs"
            />
            {/* fourth row */}
            <input
              type="number"
              name="model"
              placeholder="Model*"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="vin"
              placeholder="VIN"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="service_request"
              placeholder="Service Request"
              className="input input-bordered w-full max-w-xs"
            />
            
            <input
              type="date"
              name="date"
              placeholder="Desired Date"
              className="input input-bordered w-full max-w-xs bg-info text-white"
            />
            <input
              type="time"
              name="time"
              placeholder="Desired Time"
              className="input input-bordered w-full max-w-xs bg-info text-white"
            />

            
          
          
            {/* if there is a button in form, it will close the modal */}
            
            
            </div>
          </form>
      
    </ModalBody>

    <ModalFooter className='bg-white'>
    <button className="btn btn-wide btn-ghost bg-slate-900 text-white hover:text-slate-900" type='submit'>Submit</button>
    </ModalFooter>
  </ModalContent>
</Modal>
</ChakraProvider>
    </div>
  );
}
