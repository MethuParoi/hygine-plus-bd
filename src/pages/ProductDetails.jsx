import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FcServices,FcApproval, FcIdea } from "react-icons/fc";

const ProductDetails = () => {
    const { productId: contextProductId } = useContext(AuthContext);
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hoverStyle, setHoverStyle] = useState({ transform: "scale(1)" });
    const features = [
        {
            icon: <FcIdea className="text-7xl text-red-500 w-full" />,
            title: "Unique Design Idea",
            description:
                "Highly skilled research and development team of SWISH work around the clock to be ahead of the trends and allow SWISH to be at the forefront of the industry. We always provide the best Design based on customer demands.",
        },
        {
            icon: <FcApproval className="text-7xl text-green-500 w-full" />,
            title: "Best Quality Products",
            description:
                "SWISH develops the best sustainable, durable products. Our products are produced with high quality materials, apply sustainable production methods, innovative thinking and trendsetting research.",
        },
        {
            icon: <FcServices  className="text-7xl text-blue-500 w-full" />,
            title: "After Sells Service",
            description:
                "SWISH always keep in touch with customers and always be ready to assist them. Before & aftersales service helps us to get the customer satisfaction and holds the trust forever.",
        },
    ];

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

    // Mouse movement effect for zoom
    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;
        const xPos = ((offsetX / clientWidth) - 0.5) * 80; // Adjust sensitivity
        const yPos = ((offsetY / clientHeight) - 0.5) * 80;

        setHoverStyle({
            transform: `scale(1.2) translate(${xPos}px, ${yPos}px)`,
        });
    };

    const handleMouseLeave = () => {
        setHoverStyle({ transform: "scale(1)" });
    };

    return (
        <div className="container mx-auto px-6 lg:px-20 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Product Image with Mouse Movement */}
                <div className="w-full h-full flex justify-center overflow-hidden">
                    <img
                        src={productDetails?.image}
                        alt={productDetails?.product_name}
                        className="w-full max-w-[500px] h-auto object-cover transition-transform duration-300 ease-out"
                        style={hoverStyle} // Apply dynamic style
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>

                {/* Right: Product Details */}
                <div className="space-y-6">
                    <h1 className="text-3xl lg:text-5xl mb-4 font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent">
                        {productDetails?.product_name}
                    </h1>

                    <p className="text-lg mb-3 text-gray-700">{productDetails?.product_category}</p>

                    {productDetails?.product_description.includes(":") ? (
                        <p className="text-xl mb-5 leading-relaxed">
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
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent mb-3">
                            Specifications:
                        </h2>
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
                    <p className="text-2xl mt-8 font-bold bg-gradient-to-r flex gap-x-2 items-center from-[#e63946] via-[#6a0572] bg-clip-text text-transparent">
                    <FaBangladeshiTakaSign className="text-[#e63946]" />{productDetails?.product_price}.00 
                    </p>

                </div>
                <div></div>
                <div className="container  mx-auto   py-10">
                    <div className="grid grid-cols-1  gap-6"> {/* Single-column grid */}
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-white  p-6 space-x-4"
                            >
                                {/* Left: Icon */}
                                <div className="flex-shrink-0 w-1/6">{feature.icon}</div>

                                {/* Right: Title and Description */}
                                <div>
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {
                productDetails?.details_image && <div className="w-10/12 mx-auto mt-10">
                <img src={productDetails?.details_image} alt="Product Details Image" />
            </div>
            }
        </div>
    );
};

export default ProductDetails;

