import { SlEnvolopeLetter } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { LiaStarHalfSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <div className="bg-[#0B1926]  w-full h-[60%] py-[75px]">
      <div className="max-w-[1240px] mx-auto text-center space-y-3">
        <div className="text-4xl md:text-6xl font-black not-italic font-serif text-[#E8FFF5] leading-none ">
          We make great digital products for <br />{" "}
          <span className="text-[#01F28D]"></span> brands.
        </div>
        <h1 className="text-[#D1FFEB] text-[16px] md:text-[23px] px-6 md:px-0 py-2 md:py-3 leading-5 font-normal non-italic tracking-wide">
          Get your desired design services from our talented designers,
          <br />
          around the world at a reasonable cost
        </h1>
        <div className="flex justify-center space-y-2 flex-col md:flex-row items-center py-2">
          <div>
            <label htmlFor="myInput" className="block"></label>
            <div className="relative flex flex-col justify-center items-center">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none mx-auto">
                <SlEnvolopeLetter className="text-gray-500 text-xl mx-3" />
              </div>
              <input
                type="text"
                id="myInput"
                placeholder="Your Work Email Here"
                className="block w-80 py-2 pl-10 pr-3 border text-center border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 "
              />
            </div>
          </div>
          <div>
            <button className="bg-[#01F28D]  hover:text-white text-[#0B1926] font-semibold py-2 px-4 rounded-full mx-3">
              Book a Call
            </button>
          </div>
        </div>
        <div className="flex justify-center space-y-2 flex-col md:flex-row items-center text-[#D1FFEB] space-x-2 text-sm font-normal py-2">
          <p className="mt-2">4.0/5.0</p>
          <div className="flex">
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <LiaStarHalfSolid className="text-amber-400" />
          </div>
          <p>15+ Businesses, 35+ Happy clients.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
