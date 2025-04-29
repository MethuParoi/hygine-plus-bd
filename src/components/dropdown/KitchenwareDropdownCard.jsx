import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router';


const KitchenwareDropdownCard = ({
  title,
  img,
  setOpen2,
  setSelectedCategory,
}) => {
    const navigate = useNavigate();

  return (
    <div className="h-[18rem] w-[15rem] flex flex-col items-start justify-start gap-y-5 border-2 border-gray-200 rounded-lg relative group cursor-pointer px-2 pt-4 pb-15">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <div
        className=" bg-cover bg-center p-4 h-[25rem] w-[14rem] self-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <button
        className="absolute bottom-4 text-gray-700 text-xl font-semibold flex items-center gap-x-2 cursor-pointer hover:text-gray-900"
        onClick={() => {
          setOpen2(false);
          navigate("/products/kitchenware");
          setSelectedCategory(title);
        }}
      >
        View All <FaArrowRightLong />
      </button>
    </div>
  );
};

export default KitchenwareDropdownCard