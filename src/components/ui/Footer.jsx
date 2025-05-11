import { FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
// import logo from "../../assets/logo/logo-white.png";
import logo from "../../assets/logo/footer_logo.png";
import { IoIosCall, IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-black text-white pt-10 px-10 flex flex-col items-center">
      {/* logo */}
      <div className="flex flex-col items-center justify-center pb-10 ">
        <img className="w-[20rem] lg:w-[25rem]" src={logo} alt="" />
        {/* <p className="text-center text-2xl lg:text-3xl font-medium mt-[-20px] lg:mt-[-30px] ">
          SANITARY WARE
        </p> */}
        {/* <div className="pt-4 flex items-center justify-center gap-x-4">
          <input
            className="w-56 lg:w-84 h-8 bg-white text-gray-700 px-4"
            placeholder="your mail"
            type="text"
          />
          <button className="cursor-pointer ">
            <IoIosMail className="text-4xl lg:text-5xl hover:text-gray-300" />
          </button>
        </div> */}
      </div>
      <div className=" flex lg:flex-row flex-col items-start justify-center gap-x-42 mb-10 lg:pl-36 gap-y-5 lg:gap-y-0">
        {/* About Us */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-white to-pink-500 bg-clip-text text-transparent">
            ABOUT US
          </h1>
          <nav className="flex flex-col gap-y-1 text-md ">
            <a className="cursor-pointer">About</a>
            <a className="cursor-pointer">Terms & Conditions</a>
            <a className="cursor-pointer">Privacy Policy</a>
            <a className="cursor-pointer">Contact Us</a>
          </nav>
        </div>
        {/* Policies */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-white to-pink-500 bg-clip-text text-transparent">
            OUR POLICIES
          </h1>
          <nav className="flex flex-col gap-y-1 text-md ">
            <a className="cursor-pointer">Shipping Policy</a>
            <a className="cursor-pointer">Warranty Policy</a>
            <a className="cursor-pointer">Return & Refund Policy</a>
            <a className="cursor-pointer">Legal</a>
          </nav>
        </div>

        {/* Contact Information */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-white to-pink-500 bg-clip-text text-transparent">
            CONTACT
          </h1>
          <nav className="flex flex-col items-start gap-y-1 text-md ">
            <a>
              <div className="flex justify-start items-center gap-x-2 font-medium">
                <IoIosCall className="text-2xl" />
                +880 1703-394802
              </div>
            </a>
            <a>
              <div className="flex justify-start items-center gap-x-2 font-medium">
                <IoIosMail className="text-2xl" />
                hygieneplusbd@gmail.com
              </div>
            </a>
            <a>
              <div className="flex justify-start items-start gap-x-2 font-medium w-64 sm:w-84 pl-1">
                <FaLocationDot className=" w-8 h-8" />
                Dhaka Office: <br /> Mazed Sardar Tower-1, 153 Haji Osman Gani
                Road Alu Bazar, Dhaka, Bangladesh
              </div>
            </a>
            <a>
              <div className="flex justify-start items-start gap-x-2 font-medium w-64 sm:w-84 pl-1">
                <FaLocationDot className=" w-10 h-10" />
                China Office: <br /> 3403, Zhongliangyunjing Building, Songbai
                Road, Matian Street, Guangming, Shenzhen, Guangdong, China
              </div>
            </a>
          </nav>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex items-center gap-x-5 ">
        <a
          href="https://www.facebook.com/share/12LUmagY7qA/"
          target="_blank"
          className="link link-hover"
        >
          <div className="flex gap-x-4 font-medium">
            <FaFacebookF className="text-2xl" />
          </div>
        </a>
        <a href="#" target="_blank" className="link link-hover">
          <div className="flex gap-x-4 font-medium">
            <AiOutlineInstagram className="text-3xl" />
          </div>
        </a>
        <a href="#" target="_blank" className="link link-hover">
          <div className="flex gap-x-4 font-medium">
            <BsTwitterX className="text-2xl" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/hygiene-sanitary-ware/"
          target="_blank"
          className="link link-hover"
        >
          <div className="flex gap-x-4 font-medium">
            <FaLinkedinIn className="text-3xl" />
          </div>
        </a>
      </div>
      <div className="mt-4">
        <hr className="w-[80vw] text-red-600 h-[0.25px]border-0" />
        <div className="flex flex-col items-center justify-center gap-x-2 mt-4 mb-8">
          {/* <p className="text-white text-xl font-semibold text-center">
            ACCESSIBILITY NEED HELP? (800) 511-9484
          </p> */}
          <p className="text-center text-white text-center">
            Copyright © hygieneplusbd.com ltd.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
