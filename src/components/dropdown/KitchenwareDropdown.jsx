import React, { useContext, useEffect, useRef } from "react";
import img from "../../assets/navbar/bathware.jpg";
import img2 from "../../assets/products/freepik__enhance__42153.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";
import KitchenwareDropdownCard from "./KitchenwareDropdownCard";

// Example data structure for categories and subcategories
const menu = [
  {
    title: "Kitchen Hood",
    image: img2,
  },
  {
    title: "Kitchen Burners",
    image: img2,
  },
  {
    title: "Kitchen Sink",
    image: img2,
  },
  {
    title: "Sink Mixer",
    image: img2,
  },
  {
    title: "Multifunctional Oven",
    image: img2,
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
      onClick={onClose}
    >
      <div
        className=" w-screen xl:h-[20rem] bg-white z-50 shadow-lg overflow-hidden "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-5 justify-items-center m-5 ">
          {/* featured img 1 */}
          <div
            className=" bg-cover bg-center  relative p-4 h-[18rem] w-[15rem]"
            style={{ backgroundImage: `url(${img})` }}
          >
            <span
              className="absolute bottom-4 text-gray-900 text-xl font-semibold flex items-center gap-x-2 cursor-pointer "
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
