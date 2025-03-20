// import React, { useContext } from "react";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../../provider/AuthProvider";

// const ProductCard = ({ product }) => {
//   const { setProductId } = useContext(AuthContext);
//   const navigate = useNavigate();
//   return (
//     <div className="">
//       <div className="card bg-base-100 my-8 w-96 shadow-sm">
//         <figure>
//           <img
//             src={product?.product_image}
//             alt={product?.product_category} />
//         </figure>
//         <div className="card-body">
//           <h2 className="text-xl font-bold">{product?.product_name}</h2>
//           <p className="text-lg">{product?.product_category}</p>
//           <h2 className="font-bold text-lg">{product?.product_price}.00 tk</h2>
//           {/* <div className="card-actions justify-end">
//             <div className="badge badge-outline">Fashion</div>
//             <div className="badge badge-outline">Products</div>
//           </div> */}
//           <div className="card-actions justify-start mt-4">
//           <button className="btn btn-primary" onClick={() => {
//             navigate(`/product-details/${product?.product_id}`);
//             setProductId(product?.product_id)
//           }}>View Details</button>
//         </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// 

import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { FiArrowRight } from "react-icons/fi"; // Import arrow icon

const ProductCard = ({ product }) => {
  const { setProductId } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="w-80 my-10 bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Product Image */}
      <div className="w-full overflow-hidden">
        <img
          src={product?.product_image}
          alt={product?.product_category}
          className="w-full h-auto object-cover p-2 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold">{product?.product_name}</h2>
        <p className="text-gray-500 text-lg">{product?.product_category}</p>
        <h2 className="font-bold text-lg mt-2">{product?.product_price}.00 tk</h2>

        {/* View Details Button */}
        <button
          className="mt-5 flex items-center text-primary cursor-pointer font-semibold hover:text-blue-700 transition-all duration-300"
          onClick={() => {
            navigate(`/product-details/${product?.product_id}`);
            setProductId(product?.product_id);
          }}
        >
          View Details<FiArrowRight className="ml-2 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
