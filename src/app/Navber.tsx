import React from "react";
import { BsXLg } from "react-icons/bs";
import Image from "next/image";
import { FaSistrix } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";

const Navber = () => {
  return (
    <div>
      <div className="bg-black relative overflow-hidden mb-6">
        <div className="container mx-auto flex items-center h-[38px]">
          <p className="text-white text-sm font-normal text-center w-full">
            Sign up and get 20% off to your first order.
            <a href="Javascript:;" className="font-medium ml-2 underline">
              Sign Up Now
            </a>
          </p>
          <BsXLg className="text-white text-base font-semibold	" />
        </div>
      </div>

      <div className=" container mx-auto flex items-center gap-10  h-[41px] w-[100%] mb-8">
        <div className=" flex justify-center items-center gap-10 w-[35%]">
          <Image
            src="/logo.png"
            alt="Description of the image"
            width={160} // Image width
            height={22} // Image height
            className="h-[22px] w-[160px] object-contain"
          />
          <ul className="flex justify-between  items-center gap-6">
            <li>
              <a href="javascript:;">Shop</a>
            </li>
            <li>
              <a href="javascript:;">On Sale</a>
            </li>
            <li>
              <a href="javascript:;">New Arrivals</a>
            </li>
            <li>
              <a href="javascript:;">Brands</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between  items-center gap-5 w-[65%]">
          <label className="relative block w-[100%]">
            <span className="absolute text-xl text-slate-400 inset-y-0 left-0 flex items-center pl-3">
            <FaSistrix />
            </span>
            <input
              className=" placeholder:text-slate-400 block text-base bg-white w-full rounded-md py-2 pl-[52px] pr-3 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-slate-300 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          <BiCart  className="text-3xl "/>
          <FaRegCircleUser className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Navber;
