// axios post test drive details
"use client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function BookATestDrive() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cars, setCars] = useState([]);
  const apiEndPoint = "http://localhost:8000";
  useEffect(() => {
    const getCars = async () => {
      const { data: res } = await axios.get(apiEndPoint + "/cars/");
      setCars(res);
    };

    getCars();
  }, []);

  async function addTestDrive(formData: FormData) {
    const company = formData.get("company")?.toString();
    const first_name = formData.get("first_name")?.toString();
    const last_name = formData.get("last_name")?.toString();
    const email = formData.get("email")?.toString();
    const phone_number = formData.get("phone_number")?.toString();
    const civility = Number(formData.get("civility") || 0);
    const address = formData.get("address")?.toString();
    const city = formData.get("city")?.toString();
    const country = formData.get("country")?.toString();
    const model = Number(formData.get("model") || 0);
    const date = formData.get("date")?.toString();
    const time = formData.get("time")?.toString();
    const message = formData.get("message")?.toString();

    if (
      !company ||
      !first_name ||
      !last_name ||
      !email ||
      !civility ||
      !address ||
      !city ||
      !message ||
      !phone_number ||
      !model ||
      !country ||
      !date ||
      !time
    ) {
      throw Error("Missing Required Fields");
    }

    const post = {
      company: company,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      civility: civility,
      address: address,
      city: city,
      model: model,
      country: country,
      desired_date: date,
      desired_time: time,
      message: message,
    };
    const response = await axios.post(
      apiEndPoint + "/bookings/test-drive/",
      post
    );
    console.log(response);
  }

  return (
    <div>
      <ChakraProvider>
        <button onClick={onOpen}>Book A Test Drive</button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="bg-slate-900 text-white text-center">
              Book A Test Drive
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="bg-white">
              <form action={addTestDrive}>
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
                    name="city"
                    placeholder="City"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="country"
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

                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="input input-bordered w-full max-w-xs"
                  />

                  {/* if there is a button in form, it will close the modal */}
                </div>
              </form>
            </ModalBody>

            <ModalFooter className="bg-white">
              <button
                className="btn btn-wide btn-ghost bg-slate-900 text-white hover:text-slate-900"
                type="submit"
              >
                Submit
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
}