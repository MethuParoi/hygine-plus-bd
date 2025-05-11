import React, { useContext, useEffect, useRef } from "react";
import img from "../../assets/navbar/dropdown/KITCHENWARE.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";
import KitchenwareDropdownCard from "./KitchenwareDropdownCard";
import kitchenHood from "../../assets/navbar/dropdown/hood.jpg";
import KitchenSink from "../../assets/navbar/dropdown/kitchen.jpg";
import KitchenBurners from "../../assets/navbar/dropdown/burner.jpg";
import MultifunctionalOven from "../../assets/navbar/dropdown/oven.jpg";
import SinkMixer from "../../assets/navbar/dropdown/faucet.jpg";
import { IoMdCloseCircleOutline } from "react-icons/io";

// Example data structure for categories and subcategories
const menu = [
  {
    title: "Kitchen Hood",
    image: kitchenHood,
  },
  {
    title: "Kitchen Sink",
    image: KitchenSink,
  },
  {
    title: "Kitchen Burners",
    image: KitchenBurners,
  },

  {
    title: "Multifunctional Oven",
    image: MultifunctionalOven,
  },
  {
    title: "Sink Mixer",
    image: SinkMixer,
  },
];

const KitchenwareDropdown = ({ isOpen, onClose, onSelect, setOpen2 }) => {
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

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-[-3.5rem] top-[2.8rem] z-40"
      onMouseLeave={() => {
        setOpen2((o) => !o);
      }}
      onClick={onClose}
    >
      <div
        className=" w-screen xl:h-[20rem] bg-white z-50 shadow-lg overflow-hidden "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-5 justify-items-center m-5 ">
          {/* close button */}
          <div className="absolute right-4 top-4 md:hidden">
            <button
              onClick={() => {
                setOpen2((o) => !o);
              }}
            >
              <IoMdCloseCircleOutline className="text-red-500 text-3xl" />
            </button>
          </div>
          {/* featured img 1 */}
          <div
            className=" bg-cover bg-center  relative h-[18rem] w-[15rem]"
            // style={{ backgroundImage: `url(${img})` }}
          >
            <img className="w-full h-full bg-cover" src={img} alt="" />
            <span
              className="absolute left-4 bottom-4 text-gray-300 text-xl font-semibold flex items-center gap-x-2 cursor-pointer "
              onClick={() => {
                navigate("/products/kitchenware");
                setOpen2(false);
              }}
            >
              At a Glance <FaArrowRightLong />
            </span>
          </div>
          {/* other categories */}
          {menu.map((item, index) => (
            <KitchenwareDropdownCard
              key={index}
              title={item.title}
              img={item.image}
              setOpen2={setOpen2}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenwareDropdown;
