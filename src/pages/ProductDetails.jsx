// import React, { useContext, useEffect, useState } from 'react';
// import { getProductDetails } from '../utils/apiProduct';
// import { AuthContext } from '../provider/AuthProvider';

// const ProductDetails = ({details}) => {
//     const [productDetails, setProductDetails] = useState([]);
//     const {productId} = useContext(AuthContext);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const data = await getProductDetails(productId);
//             setProductDetails(data);
//         };
//         fetchProduct();
//     }, [productId]);
//     console.log(productDetails);
//     return (
//         <div>
//             <h1></h1>
//         </div>
//     );
// };

// export default ProductDetails;


// import React, { useContext, useEffect, useState } from "react";
// import { getProductDetails } from "../utils/apiProduct";
// import { AuthContext } from "../provider/AuthProvider";

// const ProductDetails = () => {
//     const [productDetails, setProductDetails] = useState(null);
//     const { productId } = useContext(AuthContext);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const data = await getProductDetails(productId);
//                 console.log("Fetched Product Data:", data);  // Debugging
//                 setProductDetails(data);
//             } catch (error) {
//                 console.error("Error fetching product details:", error);
//             }
//         };
//         if (productId) fetchProduct();
//     }, [productId]);

//     if (!productDetails) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <div className="container mx-auto px-6 lg:px-20 py-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                 {/* Left: Product Image */}
//                 <div className="w-full h-full flex justify-center">
//                     <img
//                         src={productDetails?.product_image}
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

// import React, { useContext, useEffect, useState } from "react";
// import { getProductDetails } from "../utils/apiProduct";
// import { AuthContext } from "../provider/AuthProvider";

// const ProductDetails = () => {
//     const [productDetails, setProductDetails] = useState(null);
//     const { productId } = useContext(AuthContext);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const data = await getProductDetails(productId);
//                 console.log("Fetched Product Data:", data); // Debugging

//                 // If data is an array, get the first product
//                 if (Array.isArray(data) && data.length > 0) {
//                     setProductDetails(data[0]); // Store the first item
//                 } else {
//                     setProductDetails(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching product details:", error);
//             }
//         };

//         if (productId) fetchProduct();
//     }, [productId]);

//     if (!productDetails) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <div className="container mx-auto px-6 lg:px-20 py-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                 {/* Left: Product Image */}
//                 <div className="w-full h-full flex justify-center">
//                     <img
//                         src={productDetails?.product_image}
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
import { useParams } from "react-router-dom"; // ✅ Get id from URL
import { getProductDetails } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";

const ProductDetails = () => {
    const { productId: contextProductId } = useContext(AuthContext);
    const { id } = useParams(); // ✅ Get "id" from the URL (matches the route)
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const productId = contextProductId || id; // ✅ Use context OR URL

    useEffect(() => {
        if (!productId) return; // Prevent fetching if no productId

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await getProductDetails(productId);
                console.log("Fetched Product Data:", data);

                // ✅ Fix: Ensure we are storing a single object, not an array
                if (Array.isArray(data) && data.length > 0) {
                    setProductDetails(data[0]); // Take the first object if it's an array
                } else if (typeof data === "object" && data !== null) {
                    setProductDetails(data); // Directly store if it's already an object
                } else {
                    setProductDetails(null); // If data is unexpected, set to null
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

    return (
        <div className="container mx-auto px-6 lg:px-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Product Image */}
                <div className="w-full h-full flex justify-center">
                    <img
                        src={productDetails?.product_image}
                        alt={productDetails?.product_name}
                        className="w-full h-auto object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Right: Product Details */}
                <div className="space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {productDetails?.product_name}
                    </h1>
                    <p className="text-lg text-gray-500">{productDetails?.product_category}</p>

                    <p className="text-gray-700 leading-relaxed">
                        {productDetails?.product_description}
                    </p>

                    {/* Product Specification */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Specifications:</h2>
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
                    <p className="text-2xl font-bold text-blue-600">
                        {productDetails?.product_price}.00 tk
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


