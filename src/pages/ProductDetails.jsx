
// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // ✅ Get id from URL
// import { getProductDetails } from "../utils/apiProduct";
// import { AuthContext } from "../provider/AuthProvider";

// const ProductDetails = () => {
//     const { productId: contextProductId } = useContext(AuthContext);
//     const { id } = useParams(); // ✅ Get "id" from the URL (matches the route)
//     const [productDetails, setProductDetails] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const productId = contextProductId || id; // ✅ Use context OR URL

//     useEffect(() => {
//         if (!productId) return; // Prevent fetching if no productId

//         const fetchProduct = async () => {
//             try {
//                 setLoading(true);
//                 const data = await getProductDetails(productId);
//                 console.log("Fetched Product Data:", data);

//                 // ✅ Fix: Ensure we are storing a single object, not an array
//                 if (Array.isArray(data) && data.length > 0) {
//                     setProductDetails(data[0]); // Take the first object if it's an array
//                 } else if (typeof data === "object" && data !== null) {
//                     setProductDetails(data); // Directly store if it's already an object
//                 } else {
//                     setProductDetails(null); // If data is unexpected, set to null
//                 }
//             } catch (error) {
//                 console.error("Error fetching product details:", error);
//                 setProductDetails(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [productId]);

//     if (loading) return <p className="text-center mt-10">Loading...</p>;
//     if (!productDetails) return <p className="text-center mt-10 text-red-500">Product not found</p>;

//     return (
//         <div className="container mx-auto px-6 lg:px-20 py-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                 {/* Left: Product Image */}
//                 <div className="w-full h-full flex justify-center">
//                     <img
//                         src={productDetails?.image}
//                         alt={productDetails?.product_name}
//                         className="w-full h-auto object-cover rounded-xl shadow-md"
//                     />
//                 </div>

//                 {/* Right: Product Details */}
//                 <div className="space-y-6">
//                     <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
//                         {productDetails?.product_name}
//                     </h1>
//                     <p className="text-lg text-gray-500">{productDetails?.product_category}</p>

//                     <p className="text-gray-700 leading-relaxed">
//                         {productDetails?.product_description}
//                     </p>

//                     {/* Product Specification */}
//                     <div>
//                         <h2 className="text-xl font-semibold text-gray-900 mb-3">Specifications:</h2>
//                         <ul className="list-disc list-inside text-gray-700 space-y-1">
//                             {productDetails?.product_specification
//                                 ? productDetails.product_specification.split(",\n").map((spec, index) => (
//                                     <li key={index}>{spec.trim()}</li>
//                                 ))
//                                 : <li>No specifications available</li>
//                             }
//                         </ul>
//                     </div>

//                     {/* Price */}
//                     <p className="text-2xl font-bold text-blue-600">
//                         {productDetails?.product_price}.00 tk
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";

const ProductDetails = () => {
    const { productId: contextProductId } = useContext(AuthContext);
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hoverStyle, setHoverStyle] = useState({ transform: "translate(0px, 0px)" });

    const productId = contextProductId || id;

    useEffect(() => {
        if (!productId) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await getProductDetails(productId);
                console.log("Fetched Product Data:", data);

                if (Array.isArray(data) && data.length > 0) {
                    setProductDetails(data[0]);
                } else if (typeof data === "object" && data !== null) {
                    setProductDetails(data);
                } else {
                    setProductDetails(null);
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
                setProductDetails(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!productDetails) return <p className="text-center mt-10 text-red-500">Product not found</p>;

    // Mouse movement effect
    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;
        const xPos = (offsetX / clientWidth - 0.5) * 20; // Adjust sensitivity
        const yPos = (offsetY / clientHeight - 0.5) * 20;

        setHoverStyle({
            transform: `translate(${xPos}px, ${yPos}px) scale(1.05)`,
        });
    };

    const handleMouseLeave = () => {
        setHoverStyle({ transform: "translate(0px, 0px) scale(1)" });
    };

    return (
        <div className="container mx-auto px-6 lg:px-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Product Image */}
                <div className="w-full h-full flex justify-center">
                    <img
                        src={productDetails?.image}
                        alt={productDetails?.product_name}
                        className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 ease-out"
                        style={hoverStyle} // Apply dynamic style
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>

                {/* Right: Product Details */}
                <div className="space-y-6">
                    <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#37c3e6] via-[#f936dc]  bg-clip-text text-transparent">
                        {productDetails?.product_name}
                    </h1>
                    <p className="text-lg text-gray-700">{productDetails?.product_category}</p>

                    {productDetails?.product_description.includes(":") ? (
                        <p className="text-xl leading-relaxed">
                            <span className="text-gray-600 font-semibold">
                                {productDetails?.product_description.split(":")[0]}:
                            </span>
                            <span className="text-gray-600">
                                {productDetails?.product_description.split(":")[1]}
                            </span>
                        </p>
                    ) : (
                        <p className="text-gray-700 text-xl leading-relaxed">
                            {productDetails?.product_description}
                        </p>
                    )}


                    {/* Product Specification */}
                    <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#37c3e6] via-[#f936dc]  bg-clip-text text-transparent mb-3">Specifications:</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {productDetails?.product_specification
                                ? productDetails.product_specification.split(",\n").map((spec, index) => (
                                    <li key={index}>{spec.trim()}</li>
                                ))
                                : <li>No specifications available</li>
                            }
                        </ul>
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#37c3e6] via-[#f936dc]  bg-clip-text text-transparent">
                        {productDetails?.product_price}.00 tk
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

