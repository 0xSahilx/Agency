import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMobileMenu = () => {
    setToggle(false);
  };

  return (
    <div className="bg-[#0B1926] p">
      <div className="max-w-[1240px] px-[25px] py-[15px] items-center flex justify-between mx-auto">
        <div className="not-italic text-3xl font-black text-[30.476px] font-darker-grotesque text-[#01F28D]">
          GetitDONE
        </div>
        <div className={`md:hidden ${toggle ? "ml-auto" : ""}`}>
          {toggle ? (
            <AiOutlineClose
              onClick={closeMobileMenu}
              className="text-white text-2xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(true)}
              className="text-white text-2xl"
            />
          )}
        </div>
        <div>
          <ul className="hidden md:flex text-[17px] not-italic font-medium gap-10 text-sm text-white items-center">
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8">
              Home
            </li>
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8">
              Case Studies
            </li>
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8">
              Blog
            </li>
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8">
              About Us
            </li>
            <li>
              <button className="bg-[#01F28D] hover:bg-[#56cc9b] text-[#0B1926] font-semibold py-3 px-5 rounded-full">
                Book a Call
              </button>
            </li>
          </ul>
          <ul
            className={`duration-300 md:hidden text-white w-full h-screen fixed bg-[#03070b]
            ${toggle ? "left-0" : "left-[-100%]"} top-[98px]`}
          >
            <li className="hover:text-[#01F28D] hover:underline items-center hover:underline-offset-8 p-5">
              Home
            </li>
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8 p-5">
              Case Studies
            </li>
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8 p-5">
              Blog
            </li>
            <li className="hover:text-[#01F28D] hover:underline hover:underline-offset-8 p-5">
              About Us
            </li>
            <li className="p-5">
              <button
                className="bg-[#01F28D] hover:bg-[#56ecad] text-[#0B1926] font-semibold py-3 px-5 rounded-full"
                onClick={closeMobileMenu}
              >
                Book a Call
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
