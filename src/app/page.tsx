import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="bg-[url('/man.png')] bg-cover bg-center h-screen py-44">
        <div className=" container mx-auto grid grid-cols-3">
          <div className="mt-[103px]">
            {" "}
            <h1 className="text-black text-[62px] leading-[72px] font-extrabold pb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-base text-slate-500 pb-12">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <a
              href="javascript:;"
              className="text-[16px] py-[15px] px-[67px] bg-black  rounded-full text-white"
            >
              Shop Now
            </a>
          </div>
          <div></div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto py-11">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src="/Vector.png"
                alt="Description of the image"
                width={166} // Image width
                height={33} // Image height
                className="h-[33px] w-[166px] object-contain"
              />
            </div>
            <div>
              <Image
                src="/Vector-1.png"
                alt="Description of the image"
                width={166} // Image width
                height={33} // Image height
                className="h-33px] w-[166px] object-contain"
              />
            </div>
            <div>
              <Image
                src="/Vector-2.png"
                alt="Description of the image"
                width={166} // Image width
                height={33} // Image height
                className="h-[33px] w-[166px] object-contain"
              />
            </div>
            <div>
              <Image
                src="/Vector-3.png"
                alt="Description of the image"
                width={166} // Image width
                height={33} // Image height
                className="h-[33px] w-[166px] object-contain"
              />
            </div>
            <div>
              <Image
                src="/Vector-4.png"
                alt="Description of the image"
                width={166} // Image width
                height={33} // Image height
                className="h-[33px] w-[166px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-[72px]">
        <h2 className="text-center text-[48px] font-extrabold pb-[55]">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-flow-col items-center pb-[36px]">
          <div>
            <Image
              src="/shite.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
              t shirt with tape details
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                4.5/<span className="text-[#555]">5</span>
              </p>
            </div>
            <h3 className="text-[24px] font-bold">$120</h3>
          </div>
          <div>
            <Image
              src="/pant.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
              skinny. fit jeans
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                3.5/<span className="text-[#555]">5</span>
              </p>
            </div>
            <div className="flex justify-start gap-[10px] items-center">
            <h3 className="text-[24px] font-bold">$240</h3>
            <h3 className="text-gray-400 line-through text-[24px] font-bold">$260</h3> 
            <p className="text-[#FF3333] text-[12px] font-medium py-[6px] px-[13px] bg-red-100 rounded-full">-20%</p>
            </div>
          </div>
          <div>
            <Image
              src="/shite2.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
              checkered shirt
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                4.5/<span className="text-[#555]">5</span>
              </p>
            </div>
            <h3 className="text-[24px] font-bold">$180</h3>
          </div>
          <div>
            <Image
              src="/shite3.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
              sleeve striped t-shirt
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                4.5/<span className="text-[#555]">5</span>
              </p>
            </div>
            <div className="flex justify-start gap-[10px] items-center">
            <h3 className="text-[24px] font-bold">$130</h3>
            <h3 className="text-gray-400 line-through text-[24px] font-bold">$160</h3> 
            <p className="text-[#FF3333] text-[12px] font-medium py-[6px] px-[13px] bg-red-100 rounded-full">-30%</p>
            </div>
          </div>
        </div>
        <p className="text-center text-[16px] font-medium">View All</p>
      </div>

      <div className="container mx-auto pt-[128px]">
        <h2 className="text-center text-[48px] font-extrabold pb-[55] uppercase">
          top selling
        </h2>
        <div className="grid grid-flow-col items-center pb-[36px]">
          <div>
            <Image
              src="/image9.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4 ">
            vertical striped shirts
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                5.0/<span className="text-[#555]">5</span>
              </p>
            </div>
            <div className="flex justify-start gap-[10px] items-center">
            <h3 className="text-[24px] font-bold">$212</h3>
            <h3 className="text-gray-400 line-through text-[24px] font-bold">$232</h3> 
            <p className="text-[#FF3333] text-[12px] font-medium py-[6px] px-[13px] bg-red-100 rounded-full">-20%</p>
            </div>
          </div>
          <div>
            <Image
              src="/image10.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
            Courage Graphic T-Shirt
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                4.0/<span className="text-[#555]">5</span>
              </p>
            </div>
            <h3 className="text-[24px] font-bold">$145</h3>
          </div>
          <div>
            <Image
              src="/image12.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
            loose fit bermuda shorts
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                3.0/<span className="text-[#555]">5</span>
              </p>
            </div>
            <h3 className="text-[24px] font-bold">$80</h3>
          </div>
          <div>
            <Image
              src="/image11.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[298px] w-[259px] object-contain"
            />
            <h4 className="text-[20] font-bold capitalize pt-4">
            faded skinny jeans
            </h4>
            <div className="flex justify-start items-center pt-[8] gap-[13]">
              <ul className="flex justify-start items-center gap-[5]">
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
                <li>
                  <BiSolidStar className=" text-[#FFC633] text-[16px]" />
                </li>
              </ul>
              <p className="text-[14px] ">
                4.5/<span className="text-[#555]">5</span>
              </p>
            </div>
            <h3 className="text-[24px] font-bold">$210</h3>
          </div>
        </div>
        <p className="text-center text-[16px] font-medium">View All</p>
      </div>

      <div className="container mx-auto pt-[150px]">
        <h2 className="text-center text-[48px] font-extrabold pb-[87] uppercase">
          BROWSE BY dress STYLE
        </h2>
        <div className="grid grid-cols-3 mb-5">
          <div>
            <Image
              src="/img2.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[289px] w-[408px] object-contain"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="/img1.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[289px] w-[684px] object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="col-span-2">
            <Image
              src="/img4.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[289px] w-[684px] object-contain"
            />
          </div>
          <div>
            <Image
              src="/img3.png"
              alt="Description of the image"
              width={259} // Image width
              height={298} // Image height
              className="h-[289px] w-[408px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-[80px]">
        <h2 className="text-start text-[48px] font-extrabold pb-[40] uppercase">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="grid grid-flow-col gap-4">
          <div className="px-[32px] pt-[28px] pb-[50px] border border-gray-300 rounded-lg ">
            <ul className="flex justify-start gap-[6px] items-center mb-[19px] ">
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
            </ul>
            <h5 className="flex justify-start gap-[6px] items-center text-[20px] font-semibold mb-4">
              Sarah M. <IoIosCheckmarkCircle className="text-[#01AB31] " />
            </h5>
            <p className="text-[16px] text-gray-500">
              I,m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I,ve bought has exceeded my expectations.”
            </p>
          </div>
          <div className="px-[32px] pt-[28px] pb-[50px] border border-gray-300 rounded-lg ">
            <ul className="flex justify-start gap-[6px] items-center mb-[19px] ">
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
            </ul>
            <h5 className="flex justify-start gap-[6px] items-center text-[20px] font-semibold mb-4">
              Sarah M. <IoIosCheckmarkCircle className="text-[#01AB31] " />
            </h5>
            <p className="text-[16px] text-gray-500">
              I,m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I ve bought has exceeded my expectations.”
            </p>
          </div>
          <div className="px-[32px] pt-[28px] pb-[50px] border border-gray-300 rounded-lg ">
            <ul className="flex justify-start gap-[6px] items-center mb-[19px] ">
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
            </ul>
            <h5 className="flex justify-start gap-[6px] items-center text-[20px] font-semibold mb-4">
              Sarah M. <IoIosCheckmarkCircle className="text-[#01AB31] " />
            </h5>
            <p className="text-[16px] text-gray-500">
              I,m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I,ve bought has exceeded my expectations.”
            </p>
          </div>
          <div className="px-[32px] pt-[28px] pb-[50px] border border-gray-300 rounded-lg ">
            <ul className="flex justify-start gap-[6px] items-center mb-[19px] ">
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
              <li>
                <MdOutlineStarPurple500 className="text-[#FFC633] text-[20px]" />
              </li>
            </ul>
            <h5 className="flex justify-start gap-[6px] items-center text-[20px] font-semibold mb-4">
              Sarah M. <IoIosCheckmarkCircle className="text-[#01AB31] " />
            </h5>
            <p className="text-[16px] text-gray-500">
              I,m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I,ve bought has exceeded my expectations.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
