import { Link, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import flag from "../../assets/navbar/bd-flag.png";
import logo from "../../assets/logo/logo-white.png";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-gray-50 shadow-sm pt-4 px-12">
      {/* upper navbar */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <img className="w-8" src={flag} alt="" />
        </div>
        <div>
          <div className="flex gap-x-4">
            <div className="relative">
              <input
                className="bg-gray-50 rounded-[2rem] w-64 h-10 text-gray-900 px-4"
                type="text"
                placeholder="Search Products"
              />
              <button
                onClick={() => navigate("/")}
                className="absolute top-0 right-0 text-lg cursor-pointer bg-transparent h-10 w-12 flex items-center justify-center rounded-r-[2rem] focus:ring-0 focus:ring-transparent"
              >
                <FaSearch className="text-2xl text-black" />
              </button>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-lg cursor-pointer font-semibold hover:text-gray-300"
            >
              SUPPORT
            </button>

            {/* vertical line */}
            <div className="border-l border-gray-50"></div>

            <button
              onClick={() => navigate("/login")}
              className="text-lg cursor-pointer font-semibold hover:text-gray-300"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className="border-t border-gray-50 mt-2 flex justify-between items-center">
        <div className="flex items-center gap-x-4 relative">
          <button
            popoverTarget="bathware"
            style={{ anchorName: "--anchor-1" }}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
          >
            Bathware
            <IoIosArrowDropdown className="text-2xl" />
          </button>
          {/* bathware dropdown */}
          <ul
            className="dropdown menu w-52 rounded-box bg-gray-800 shadow-sm text-white"
            popover="auto"
            id="bathware"
            style={{ positionAnchor: "--anchor-1" }}
          >
            <li className="hover:bg-gray-600">
              <Link>bathware</Link>
            </li>
            <li className="hover:bg-gray-600">
              <Link>Item 2</Link>
            </li>
          </ul>
          <button
            popoverTarget="kitchenware"
            style={{ anchorName: "--anchor-2" }}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300 flex items-center gap-x-1"
          >
            Kitchenware
            <IoIosArrowDropdown className="text-2xl" />
          </button>
          {/* kitchenware dropdown */}
          <ul
            className="dropdown menu w-52 rounded-box bg-gray-800 shadow-sm text-white"
            popover="auto"
            id="kitchenware"
            style={{ positionAnchor: "--anchor-2" }}
          >
            <li className="hover:bg-gray-600">
              <Link>Kitchenware</Link>
            </li>
            <li className="hover:bg-gray-600">
              <Link>Item 2</Link>
            </li>
          </ul>
        </div>

        {/* logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-[25rem]" src={logo} alt="" />
        </div>

        <div className="flex items-center gap-x-4">
          <button
            onClick={() => navigate("/")}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300"
          >
            New Arrivals
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-lg cursor-pointer font-semibold hover:text-gray-300"
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
