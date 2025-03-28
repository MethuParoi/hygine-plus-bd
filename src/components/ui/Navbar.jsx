import { Link, useNavigate } from "react-router";
import flag from "../../assets/navbar/bd-flag.png";
import logo from "../../assets/logo/navbar_logo.png";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getProducts } from "../../utils/apiProduct";

const Navbar = () => {
  const { user, logoutUser, selectedCategory, setSelectedCategory } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [bathwareCategories, setBathwareCategories] = useState(new Set());
  const [kitchenwareCategories, setKitchenwareCategories] = useState(new Set());

  //fetch categories
  async function fetchCategory() {
    const products = await getProducts();
    // Filter and map for bathware categories
    setBathwareCategories(
      new Set(
        products
          .filter((item) => item.main_category === "bathware")
          .map((item) => item.product_category)
      )
    );

    // Filter and map for kitchenware categories
    setKitchenwareCategories(
      new Set(
        products
          .filter((item) => item.main_category === "kitchenware")
          .map((item) => item.product_category)
      )
    );
  }

  useEffect(() => {
    fetchCategory();
  }, []);

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
    <div className="bg-black text-gray-50 shadow-sm py-4 px-4 md:px-12">
      {/* upper navbar */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-x-2">
          <img className="w-8" src={flag} alt="" />
          <h3 className="text-md sm:text-lg cursor-pointer font-semibold hover:text-gray-300">
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
              className="text-md sm:text-lg cursor-pointer font-semibold hover:text-gray-300"
            >
              SUPPORT
            </button>

            {/* vertical line */}
            <div className="border-l border-gray-50"></div>

            <button
              onClick={() => (user ? handleLogout() : navigate("/login"))}
              className="text-md sm:text-lg cursor-pointer font-semibold hover:text-gray-300"
            >
              {user ? "LOGOUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className=" border-t-[0.5px] border-gray-50 mt-2 pt-4 flex justify-between items-center">
        <div className="hidden md:flex items-center gap-x-4 relative">
          <button
            popoverTarget="bathware"
            style={{ anchorName: "--anchor-1" }}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
          >
            Bathware
            <IoIosArrowDown className="text-2xl" />
          </button>
          {/* bathware dropdown */}
          <ul
            className="dropdown menu w-52 rounded-box bg-gray-800 shadow-sm text-white"
            popover="auto"
            id="bathware"
            style={{ positionAnchor: "--anchor-1" }}
          >
            {Array.from(bathwareCategories).map((category, index) => (
              <li
                onClick={() => setSelectedCategory(category)}
                key={index}
                className="hover:bg-gray-600"
              >
                <Link to={"/products/bathware"}>{category}</Link>
              </li>
            ))}
          </ul>
          <button
            popoverTarget="kitchenware"
            style={{ anchorName: "--anchor-2" }}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
          >
            Kitchenware
            <IoIosArrowDown className="text-2xl" />
          </button>
          {/* kitchenware dropdown */}
          <ul
            className="dropdown menu w-52 rounded-box bg-gray-800 shadow-sm text-white"
            popover="auto"
            id="kitchenware"
            style={{ positionAnchor: "--anchor-2" }}
          >
            {Array.from(kitchenwareCategories).map((category, index) => (
              <li
                onClick={() => setSelectedCategory(category)}
                key={index}
                className="hover:bg-gray-600"
              >
                <Link to={"/products/kitchenware"}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-[16rem] lg:w-[25rem]" src={logo} alt="" />
        </div>

        <div className="hidden md:flex items-center gap-x-4">
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
                popoverTarget="bathware_2"
                style={{ anchorName: "--anchor-3" }}
                className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
              >
                Bathware
                <IoIosArrowDown className="text-2xl" />
              </button>
              {/* bathware dropdown */}
              <ul
                className="dropdown menu ml-[-10rem] mt-[-2rem] w-40 rounded-box bg-gray-800 shadow-sm text-white"
                popover="auto"
                id="bathware_2"
                style={{ positionAnchor: "--anchor-3" }}
              >
                {Array.from(bathwareCategories).map((category, index) => (
                  <li
                    onClick={() => setSelectedCategory(category)}
                    key={index}
                    className="hover:bg-gray-600"
                  >
                    <Link to={"/products/bathware"}>{category}</Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* kitchenware */}
            <li className="hover:bg-gray-600">
              <button
                popoverTarget="kitchenware_2"
                style={{ anchorName: "--anchor-4" }}
                className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
              >
                Kitchenware
                <IoIosArrowDown className="text-2xl" />
              </button>
              {/* kitchenware dropdown */}
              <ul
                className="dropdown menu w-40 ml-[-10rem] mt-[-2rem] rounded-box bg-gray-800 shadow-sm text-white"
                popover="auto"
                id="kitchenware_2"
                style={{ positionAnchor: "--anchor-4" }}
              >
                {Array.from(kitchenwareCategories).map((category, index) => (
                  <li
                    onClick={() => setSelectedCategory(category)}
                    key={index}
                    className="hover:bg-gray-600"
                  >
                    <Link to={"/products/kitchenware"}>{category}</Link>
                  </li>
                ))}
              </ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
