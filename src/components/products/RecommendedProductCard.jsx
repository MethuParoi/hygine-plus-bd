import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { FiArrowRight } from "react-icons/fi"; // Import arrow icon
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const RecommendedProductCard = ({ product, setIsRecommended }) => {
  const { setProductId } = useContext(AuthContext);
  const navigate = useNavigate();

  // multiple image options
  const image = product && product?.image ? product?.image.split(",") : [];
  const image1 = image[0];

  return (
    <div className="w-80 h-[30rem] bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Product Image */}
      <div className="w-full h-[18rem] p-4 ">
        <img
          src={image1}
          alt={product?.product_category}
          className="w-full h-[16rem] object-cover transition-transform duration-500 hover:scale-105 rounded-t-lg"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold line-clamp-1">
          {product?.product_name}
        </h2>
        <p className="text-gray-500 text-lg">{product?.product_category}</p>
        <h2 className="font-bold text-lg mt-2 flex gap-1 items-center">
          <FaBangladeshiTakaSign />
          {product?.product_price}.00
        </h2>

        {/* View Details Button */}
        <button
          className="mt-5 flex items-center  cursor-pointer font-semibold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent transition-all duration-300"
          onClick={() => {
            navigate(`/product-details/${product?.product_id}`);
            setProductId(product?.product_id);
            setIsRecommended(true);
          }}
        >
          View Details
          <FiArrowRight className="ml-2 text-xl text-[#6a0572]" />
        </button>
      </div>
    </div>
  );
};

export default RecommendedProductCard;
