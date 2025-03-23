import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../utils/apiProduct";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FcServices, FcApproval, FcIdea } from "react-icons/fc";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import Loader from "../components/ui/Loader/Loader";

const ProductDetails = () => {
  const { productId: contextProductId } = useParams();
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoverStyle, setHoverStyle] = useState({ transform: "scale(1)" });

  const productId = contextProductId || id;

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductDetails(productId);
        console.log("Fetched Product Data:", data);

        setProductDetails(
          Array.isArray(data) && data.length > 0 ? data[0] : data
        );
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProductDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading)
    return (
      <div className="min-h-screen">
        <Loader />
      </div>
    );
  if (!productDetails)
    return <p className="text-center mt-10 text-red-500">Product not found</p>;

  // ✅ Mouse movement effect for zoom
  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;
    const xPos = (offsetX / clientWidth - 0.5) * 50; // Adjust sensitivity
    const yPos = (offsetY / clientHeight - 0.5) * 50;

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
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex justify-center overflow-hidden"
        >
          <img
            src={productDetails?.image}
            alt={productDetails?.product_name}
            className="w-full max-w-[500px] h-auto object-cover transition-transform duration-300 ease-out"
            style={hoverStyle} // ✅ Apply dynamic zoom & movement
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </motion.div>

        {/* Right: Product Details Animation (No Change) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-3xl lg:text-5xl mb-4 font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent">
            {productDetails?.product_name}
          </h1>

          <p className="text-lg mb-3 text-gray-700">
            {productDetails?.product_category}
          </p>

          <p className="text-gray-700 text-xl leading-relaxed">
            {productDetails?.product_description}
          </p>

          {/* Product Specification */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent mb-3">
              Specifications:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {productDetails?.product_specification ? (
                productDetails.product_specification
                  .split(",\n")
                  .map((spec, index) => <li key={index}>{spec.trim()}</li>)
              ) : (
                <li>No specifications available</li>
              )}
            </ul>
          </div>

          {/* Price */}
          <p className="text-2xl mt-8 font-bold  flex gap-x-2 items-center bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent">
            <FaBangladeshiTakaSign className="text-[#e63946]" />
            {productDetails?.product_price}.00
          </p>
        </motion.div>
      </div>

      {/* Feature Cards Section (No Change) */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FcIdea className="text-7xl" />,
              title: "Unique Design Idea",
              description:
                "Innovative and trendsetting designs tailored for customer demands.",
            },
            {
              icon: <FcApproval className="text-7xl" />,
              title: "Best Quality",
              description:
                "Sustainable, durable products made with high-quality materials.",
            },
            {
              icon: <FcServices className="text-7xl" />,
              title: "After Sales Service",
              description:
                "Reliable support for customers before and after sales.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
              className="flex flex-col items-center bg-white shadow-md p-6 space-y-4 rounded-lg"
            >
              {/* Icon */}
              <div className="text-center">{feature.icon}</div>

              {/* Title and Description */}
              <div className="text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll-in Details Image Animation (No Change) */}
      {productDetails?.details_image && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-10/12 mx-auto mt-10"
        >
          <img
            src={productDetails?.details_image}
            alt="Product Details Image"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ProductDetails;
