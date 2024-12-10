import React from "react";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CgInstagram } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto mt-20 ">
        <div className="border-b-2 border-slate-300 pb-[50px]">
          <div className="bg-black py-[43px] px-[64px] rounded-3xl mb-[50px]">
            <div className="grid grid-cols-3">
              <div>
                <h2 className="text-[40px] font-bold text-white">
                  STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>
              </div>
              <div></div>
              <div className="flex flex-col items-end justify-end gap-[14px]">
                <label className="relative">
                  <span className="absolute text-xl text-slate-400 inset-y-0 left-0 flex items-center pl-[17px]">
                    <TfiEmail />
                  </span>
                  <input
                    className=" placeholder:text-slate-400 placeholder:text-[16px] block text-base bg-white w-full  rounded-full py-[13px] pl-[52px] pr-[135px] shadow-sm focus:outline-none focus:border-slate-300 focus:ring-slate-300 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                  />
                </label>
                <button className=" block  font-medium text-[16px] py-[12px] px-[88px] bg-white  rounded-full text-black">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
          <div className="grid  grid-cols-5 gap-20 ">
            <div>
              <Image
                src="/logo.png"
                alt="Description of the image"
                width={160} // Image width
                height={22} // Image height
                className="h-[23px] w-[167px] object-contain mb-[25px]"
              />
              <p className="text-gray-500 text-[14px] font-normal mb-[35px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex justify-start gap-3 items-start">
                <div className="flex justify-center rounded-full items-center h-10 w-10 border-solid border-2 border-slate-300 ">
                  <FaTwitter className="text-[20px] " />
                </div>
                <div className="flex justify-center rounded-full items-center h-10 w-10 border-solid border-2 border-slate-300 ">
                  <FaFacebookF className="text-[20px] " />
                </div>
                <div className="flex justify-center rounded-full items-center h-10 w-10 border-solid border-2 border-slate-300 ">
                  <CgInstagram className="text-[20px] " />
                </div>
                <div className="flex justify-center rounded-full items-center h-10 w-10 border-solid border-2 border-slate-300 ">
                  <FaGithub className="text-[20px] " />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium uppercase pb-[26px]">
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Features{" "}
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Works
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium uppercase pb-[26px]">
                Help
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Delivery Details{" "}
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium uppercase pb-[26px]">FAQ</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Account
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Manage Deliveries{" "}
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium uppercase pb-[26px]">
                Resources
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Development Tutorial{" "}
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="Javascript:;" className="text-gray-500 text-base">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-[25px] pb-[88px]">
          <ul className="flex justify-between items-center">
            <li>
              <p className="text-gray-500 text-[14px]">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </li>
            <li>
              <div className="flex justify-center items-center gap-5">
                <div className="py-[7px] px-[7px] bg-white rounded-md shadow-xl border border-gray-200">
                  <Image
                    src="/Visa.png"
                    alt="Description of the image"
                    width={46} // Image width
                    height={33} // Image height
                    className="h-[33px] w-[46px] object-contain"
                  />
                </div>
                <div className="py-[7px] px-[7px] bg-white rounded-md shadow-xl border border-gray-200">
                  <Image
                    src="/Mastercard.png"
                    alt="Description of the image"
                    width={46} // Image width
                    height={33} // Image height
                    className="h-[33px] w-[46px] object-contain"
                  />
                </div>
                <div className="py-[7px] px-[7px] bg-white rounded-md shadow-xl border border-gray-200">
                  <Image
                    src="/Paypal.png"
                    alt="Description of the image"
                    width={46} // Image width
                    height={33} // Image height
                    className="h-[33px] w-[46px] object-contain"
                  />
                </div>
                <div className="py-[7px] px-[7px] bg-white rounded-md shadow-xl border border-gray-200">
                  <Image
                    src="/Pay.png"
                    alt="Description of the image"
                    width={46} // Image width
                    height={33} // Image height
                    className="h-[33px] w-[46px] object-contain"
                  />
                </div>
                <div className="py-[7px] px-[7px] bg-white rounded-md shadow-xl border border-gray-200">
                  <Image
                    src="/GPay.png"
                    alt="Description of the image"
                    width={46} // Image width
                    height={33} // Image height
                    className="h-[33px] w-[46px] object-contain"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
