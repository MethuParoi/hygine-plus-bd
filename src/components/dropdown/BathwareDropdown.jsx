import React, { useContext, useEffect, useRef } from "react";
import img from "../../assets/navbar/bathware.jpg";
import img2 from "../../assets/navbar/dropdown/NEW-Collecttion.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

// Example data structure for categories and subcategories
const menu = [
  {
    title: "Commode & Urinal",
    items: [
      "One Piece Commode",
      "Smart Commode",
      "Wall Hung Commode",
      "Squatting Pan",
      "Urinal",
    ],
  },
  {
    title: "Basin",
    items: [
      "Art Basin",
      "Bath Vanity",
      "Under Counter Basin",
      "Semi Recessed Basin",
      "Pedestal Basin",
      "Wall Hung Basin",
      "Wudu Basin",
      "Monoblock Washbasin",
    ],
  },
  {
    title: "Faucet",
    items: [
      "All Faucet Series",
      "Basin Mixer",
      "Push Shower Mixer",
      "Bath Mixer",
      "Pillar Cock",
      "Long Pillar Cock",
      "Bib Cock",
      "Two In One",
      "Sensor Faucet",
    ],
  },
  {
    title: "Bidet",
    items: ["Bidet"],
  },
  {
    title: "Accessories",
    items: [
      "All Accessories Series",
      "Angle Stop Cock",
      "Basin Waste",
      "Bottle Trap",
      "Brush Holder",
      "Toilet Brush Holder",
      "Coat Hook",
      "Double Towel Rail",
      "Glass Shelf",
      "Metal Shelf",
      "Grating",
      "Soap Dispenser",
      "Spout",
      "Push Shower",
      "Towel Rack",
      "Towel Rail",
      "Towel Ring",
      "Paper Holder",
      "Soap Case",
      "Electric Towel Rail",
      "Auto Liquid Dispenser",
    ],
  },
  {
    title: "Shower",
    items: [
      "Shower Set",
      "Shower Panel",
      "Shower Mixer",
      "Overhead Shower",
      "Shower Arm",
      "Shower Essentials",
      "Shower Body Jet",
    ],
  },
  {
    title: "Cozy Showers",
    items: ["Bathtub", "Water Heater", "Shower Enclosure"],
  },
  {
    title: "Mirror",
    items: ["Cabinet Mirror", "Frame Mirror", "LED Mirror"],
  },
  {
    title: "Electronic Appliances",
    items: ["Hand Dryer", "Mosquito Killer"],
  },
];

const BathwareDropdown = ({ isOpen, onClose, onSelect }) => {
  const { selectedCategory, setSelectedCategory } = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (event) => {
      // Check if the clicked element is not a button
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) ||
        (dropdownRef.current && event.target.tagName !== "button")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-[-3.5rem] top-[2.8rem] w-screen h-screen z-40"
      onClick={onClose}
    >
      <div
        className="absolute top-0 left-0 w-screen h-[80vh] bg-white z-50 shadow-lg overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Panel with two featured blocks */}
        <div className="hidden lg:w-1/4 lg:flex flex-col items-center">
          {/* featured img 1 */}
          <div
            className=" bg-cover bg-center  relative p-4 h-[15rem] w-[18rem] m-4"
            style={{ backgroundImage: `url(${img})` }}
          >
            <span className="absolute bottom-4 text-gray-900 text-xl font-semibold flex items-center gap-x-2">
              At a Glance <FaArrowRightLong />
            </span>
          </div>
          {/* featured img 2 */}
          <div
            className=" bg-cover bg-center  relative p-4 h-[15rem] w-[18rem] m-4"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <span className="absolute bottom-4 text-gray-900 text-xl font-semibold flex items-center gap-x-2">
              Explore <FaArrowRightLong />
            </span>
          </div>
        </div>

        {/* Right Panel: grid of categories */}
        <div className="w-full lg:w-3/4 p-8 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-0 md:gap-8 justify-items-center lg:justify-items-start">
            {/* commode and urinal */}
            <div className="" key={menu[0].title}>
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                {menu[0].title}
              </h3>
              <div className="flex flex-col items-start gap-2">
                {menu[0].items.map((item) => (
                  <button
                    key={item}
                    className="text-gray-700 hover:text-black text-sm cursor-pointer"
                    onClick={() => {
                      onSelect(menu[1].title, item);
                      navigate("/products/bathware");
                      setSelectedCategory(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* Basin */}
            <div
              className="md:ml-[-2rem] mt-[-2.5rem] md:mt-0"
              key={menu[1].title}
            >
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                {menu[1].title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-6 ">
                {menu[1].items.map((item) => (
                  <button
                    key={item}
                    className="text-gray-700 hover:text-black text-sm cursor-pointer text-start w-36"
                    onClick={() => {
                      onSelect(menu[1].title, item);
                      navigate("/products/bathware");
                      setSelectedCategory(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* Faucet */}
            <div
              className="md:ml-[2rem] mt-[-1.5rem] md:mt-0"
              key={menu[2].title}
            >
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                {menu[2].title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-14 ">
                {menu[2].items.map((item) => (
                  <button
                    key={item}
                    className="text-gray-700 hover:text-black text-sm cursor-pointer text-start w-36"
                    onClick={() => {
                      onSelect(menu[2].title, item);
                      navigate("/products/bathware");
                      setSelectedCategory(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* Bidet */}
            <div
              className="md:ml-[4rem] ml-[-6rem] mt-[2rem] md:mt-0"
              key={menu[3].title}
            >
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                {menu[3].title}
              </h3>
              <div className="flex flex-col items-start gap-2">
                {menu[3].items.map((item) => (
                  <button
                    key={item}
                    className="text-gray-700 hover:text-black text-sm cursor-pointer"
                    onClick={() => {
                      onSelect(menu[3].title, item);
                      navigate("/products/bathware");
                      setSelectedCategory(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories spans two columns */}
            <div className="ml-12 md:ml-0 mt-[2rem] md:mt-0 lg:col-span-4">
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                Accessories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-2 gap-x-6">
                {menu
                  .find((m) => m.title === "Accessories")
                  .items.map((item) => (
                    <button
                      key={item}
                      className="text-gray-700 hover:text-black text-sm cursor-pointer text-start"
                      onClick={() => {
                        onSelect("Accessories", item);
                        navigate("/products/bathware");
                        setSelectedCategory(item);
                      }}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>

            {/* Last row items */}
            {/* Shower */}
            <div
              className="ml-12 md:ml-0 mt-[2rem] md:mt-0 mr-10"
              key={menu[5].title}
            >
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                {menu[5].title}
              </h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-6 ">
                {menu[5].items.map((item) => (
                  <button
                    key={item}
                    className="text-gray-700 hover:text-black text-sm cursor-pointer text-start w-36"
                    onClick={() => {
                      onSelect(menu[5].title, item);
                      navigate("/products/bathware");
                      setSelectedCategory(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* others */}
            {menu.slice(6).map((cat) => (
              <div
                className="ml-12 md:ml-0 mt-[2rem] md:mt-0 mr-10 "
                key={cat.title}
              >
                <h3 className="font-bold border-l-4 border-black pl-2 mb-2 text-black">
                  {cat.title}
                </h3>
                <div className="flex flex-col items-start flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      className="text-gray-700 hover:text-black text-sm cursor-pointer"
                      onClick={() => {
                        onSelect(cat.title, item);
                        navigate("/products/bathware");
                        setSelectedCategory(item);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathwareDropdown;
