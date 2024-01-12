"use client"
import Link from "next/link";
import BookAService from "../services/BookAService";

import axios from "axios";
import { useState, useEffect } from "react";
import MobileNavbar from "@/app/components/MobileNavbar";
import MobileNavbar2 from "@/app/components/MobileNavbar2";
export default function SpareParts() {
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
    // await axios.post(apiEndPoint + "/bookings/servicing/", post);
  }

  return (
    <div className="min-h-screen">
      <MobileNavbar2 />
      <div>
        <div
          className="hero h-[42rem]"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          {/* <!-- component --> */}
        </div>
        <div className="absolute text-white top-[25em] sm:top-[20%] left-20 sm:w-[40em] w-[16em] h-48 bg-gradient-to-r from-black from-10% via-black via-25% pl-4 pt-6">
          <h1 className="text-2xl sm:text-5xl uppercase">SPARE PARTS AND REPAIRS</h1>
          <p className="pt-2">Does your Mitsubishi need repairs?</p>
        </div>
      </div>
      <div className="bg-[#383839] text-white">
        <p className="sm:p-32 p-16 pt-6 font-sans">
          We want to make sure that your Mitsubishi is as safe as can be, that
          it performs perfectly and that it’ll be as reliable as possible. So,
          when you visit one of our Approved Mitsubishi dealers you can rest
          assured that we’ll only ever supply and fit genuine or approved
          Mitsubishi parts. All genuine parts supplied by Mitsubishi UK and
          fitted by a Mitsubishi dealer’s service centre, excluding wear and
          tear, also benefit from a 3 year/60,000 mile parts and labour
          warranty. Simply submit the form below with your details and your
          local dealer will be in touch to book you in.
        </p>
      </div>

      <div className="bg-gray-300 justify-center">
        <div className="p-8">
          <p className="sm:p-16 p-6 text-2xl sm:text-4xl text-black text-center">
            BOOK HERE FOR GENUINE MITSUBISHI PARTS AND REPAIRS
          </p>

          {/* The Form */}
          <form method="dialog" action={addService}>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-8 p-2">
              {/* 1st row */}

              <select className="select select-bordered w-full max-w-xs text-gray-500">
                <option disabled selected>
                  Dealership*
                </option>
                <option>Kampala</option>
                <option>Gulu</option>
              </select>

              <input
                type="text"
                name="company"
                placeholder="Company"
                className="input input-bordered w-full text-black max-w-xs"
              />
              {/* second row */}
              <input
                type="text"
                name="first_name"
                placeholder="First Name*"
                className="input input-bordered w-full text-black max-w-xs"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name*"
                className="input input-bordered w-full text-black max-w-xs"
              />
              {/* third row */}
              <input
                type="text"
                name="email"
                placeholder="E-mail*"
                className="input input-bordered w-full text-black max-w-xs"
              />
              <input
                type="text"
                name="phone_number"
                placeholder="Phone*"
                className="input input-bordered w-full text-black max-w-xs"
              />
              {/* fourth row */}
              <input
                type="number"
                name="model"
                placeholder="Model*"
                className="input input-bordered w-full text-black max-w-xs"
              />
              <input
                type="text"
                name="vin"
                placeholder="VIN"
                className="input input-bordered w-full text-black max-w-xs"
              />

              <input
                type="text"
                name="service_request"
                placeholder="Service Request"
                className="input input-bordered w-full text-black max-w-xs"
              />

              {/* if there is a button in form, it will close the modal */}
              
            </div>
            <div className="text-center p-8">
            <button className="btn btn-ghost bg-[#383839] text-gray-300 hover:text-[#383839] btn-wide">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
