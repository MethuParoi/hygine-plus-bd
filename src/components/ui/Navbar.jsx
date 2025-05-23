import { Link, useNavigate } from "react-router";
import flag from "../../assets/navbar/bd-flag.png";
import logo from "../../assets/logo/navbar_logo.png";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getProducts } from "../../utils/apiProduct";
import BathwareDropdown from "../dropdown/BathwareDropdown";
import KitchenwareDropdown from "../dropdown/KitchenwareDropdown";

const Navbar = () => {
  const { user, logoutUser, selectedCategory, setSelectedCategory } =
    useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selection, setSelection] = useState({ category: null, item: null });
  const navigate = useNavigate();

  const handleSelect = (category, item) => {
    setSelection({ category, item });
    setOpen(false);
  };

  // const [bathwareCategories, setBathwareCategories] = useState(new Set());
  // const [kitchenwareCategories, setKitchenwareCategories] = useState(new Set());

  //fetch categories
  // async function fetchCategory() {
  //   const products = await getProducts();
  //   // Filter and map for bathware categories
  //   setBathwareCategories(
  //     new Set(
  //       products
  //         .filter((item) => item.main_category === "bathware")
  //         .map((item) => item.product_category)
  //     )
  //   );

  // Filter and map for kitchenware categories
  //   setKitchenwareCategories(
  //     new Set(
  //       products
  //         .filter((item) => item.main_category === "kitchenware")
  //         .map((item) => item.product_category)
  //     )
  //   );
  // }

  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  const handleLogout = async () => {
    if (user) {
      try {
        await logoutUser();
        // toast.success("User logged out successfully");
        navigate("/"); // Navigate after successful logout
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }
  };

  return (
    <div className="bg-black text-gray-50 shadow-sm py-4 px-4 md:px-12 ">
      {/* upper navbar */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-x-2">
          <img className="w-8" src={flag} alt="" />
          <h3 className="text-md sm:text-lg cursor-pointer font-normal hover:text-gray-300">
            BANGLADESH
          </h3>
        </div>
        <div>
          <div className="flex gap-x-1 sm:gap-x-4">
            {/* search */}
            {/* <div className="relative">
              <input
                className="bg-gray-50 rounded-[2rem] w-40 sm:w-64 h-8 text-gray-900 px-4 focus:outline-none"
                type="text"
                placeholder="Search Products"
              />
              <button
                onClick={() => navigate("/")}
                className="absolute top-[-5px] right-0 text-lg cursor-pointer bg-transparent h-10 w-12 flex items-center justify-center rounded-r-[2rem] focus:ring-0 focus:ring-transparent"
              >
                <FaSearch className="text-2xl text-black" />
              </button>
            </div> */}
            {/* login */}
            <button
              onClick={() => navigate("/support")}
              className="text-md sm:text-lg cursor-pointer font-normal hover:text-gray-300"
            >
              SUPPORT
            </button>

            {/* vertical line */}
            <div className="border-l border-gray-50"></div>

            <button
              onClick={() => (user ? handleLogout() : navigate("/login"))}
              className="text-md sm:text-lg cursor-pointer font-normal hover:text-gray-300"
            >
              {user ? "LOGOUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </div>
      {/* middle navbar */}
      <div className="  border-t-[0.5px] border-gray-50 mt-2 pt-4 md:flex justify-center items-center hidden ">
        {/* logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-[16rem] lg:w-[25rem]" src={logo} alt="" />
        </div>
      </div>

      {/* lower navbar */}
      <div className=" mt-4 flex justify-between md:justify-center items-center gap-x-10 relative">
        {/* bathware dropdown */}
        <BathwareDropdown
          isOpen={open}
          onClose={() => setOpen(false)}
          onSelect={handleSelect}
          setOpen={setOpen}
        />
        {/* Kitchenware dropdown */}
        <KitchenwareDropdown
          isOpen={open2}
          onClose={() => setOpen2(false)}
          onSelect={handleSelect}
          setOpen2={setOpen2}
        />
        <div className="hidden md:flex items-center gap-x-10 ">
          <button
            onMouseEnter={() => {
              setOpen((o) => !o);
              setOpen2(false);
            }}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
          >
            Bathware
            <IoIosArrowDown className="text-2xl" />
          </button>
          {/* kitchenware dropdown */}
          <button
            onMouseEnter={() => {
              setOpen2((o) => !o);
              setOpen(false);
            }}
            // onClick={() => {
            //   setOpen2((o) => !o);
            //   setOpen(false);
            // }}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
          >
            Kitchenware
            <IoIosArrowDown className="text-2xl" />
          </button>
        </div>

        {/* logo */}
        <div className="cursor-pointer md:hidden" onClick={() => navigate("/")}>
          <img className="w-[16rem] lg:w-[25rem]" src={logo} alt="" />
        </div>

        <div className="hidden md:flex items-center gap-x-10">
          <button
            onClick={() => navigate("/new-arrivals")}
            className=" text-lg cursor-pointer font-semibold hover:text-gray-300"
          >
            New Arrivals
          </button>

          <button
            onClick={() => navigate("/about")}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300"
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/careers")}
            className=" text-lg cursor-pointer font-semibold hover:text-gray-300"
          >
            Careers
          </button>
        </div>
        {/* small screen */}
        {/* hambuger */}
        <div className="md:hidden flex items-center gap-x-4">
          <button
            popoverTarget="hamburger"
            style={{ anchorName: "--anchor-6" }}
            className="text-2xl cursor-pointer"
          >
            &#9776;
          </button>

          <ul
            className="dropdown menu ml-auto w-40 sm:w-52 rounded-box bg-gray-800 shadow-sm text-white"
            popover="auto"
            id="hamburger"
            style={{ positionAnchor: "--anchor-6" }}
          >
            {/* bathware */}
            <li className="hover:bg-gray-600">
              <button
                onClick={() => {
                  setOpen((o) => !o);
                  setOpen2(false);
                }}
                className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
              >
                Bathware
                <IoIosArrowDown className="text-2xl" />
              </button>
              {/* bathware dropdown */}
              {/* bathware dropdown */}
              {/* <BathwareDropdown
                isOpen={open}
                onClose={() => setOpen(false)}
                onSelect={handleSelect}
              /> */}
            </li>
            {/* kitchenware */}
            <li className="hover:bg-gray-600">
              <button
                onClick={() => {
                  setOpen2((o) => !o);
                  setOpen(false);
                }}
                className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
              >
                Kitchenware
                <IoIosArrowDown className="text-2xl" />
              </button>
            </li>
            <li className="hover:bg-gray-600">
              <button
                onClick={() => navigate("/new-arrivals")}
                className=" text-lg cursor-pointer font-semibold hover:text-gray-300"
              >
                New Arrivals
              </button>
            </li>
            <li className="hover:bg-gray-600">
              <button
                onClick={() => navigate("/about")}
                className="text-lg cursor-pointer font-semibold hover:text-gray-300"
              >
                About Us
              </button>
            </li>
            <li className="hover:bg-gray-600">
              <button
                onClick={() => navigate("/careers")}
                className="text-lg cursor-pointer font-semibold hover:text-gray-300"
              >
                Careers
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
