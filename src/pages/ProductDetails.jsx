import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  getRecommendedProducts,
  getSortedProducts,
} from "../utils/apiProduct";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FcServices, FcApproval, FcIdea } from "react-icons/fc";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import Loader from "../components/ui/Loader/Loader";
import ProductCard from "../components/products/ProductCard";
import RecommendedProductCard from "../components/products/RecommendedProductCard";

const ProductDetails = () => {
  const { productId: contextProductId } = useParams();
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoverStyle, setHoverStyle] = useState({ transform: "scale(1)" });
  const [isRecommended, setIsRecommended] = useState(false);

  const productId = contextProductId || id;

  useEffect(() => {
    if (isRecommended) {
      window.location.reload();
      window.scrollTo(0, 0);
      setIsRecommended(false);
    }
  }, [isRecommended]);

  useEffect(() => {
    if (!productId) return;

    const fetchProductDetails = async (productId) => {
      window.scrollTo(0, 0);
      try {
        setLoading(true);
        const data = await getProductDetails(productId); // Fetch product details
        // Normalize productDetails to always be an object
        setProductDetails(
          Array.isArray(data) && data.length > 0 ? data[0] : data
        );
        // setDisplayImage(data?.image1);  Set the initial display image
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails(productId);
  }, []);

  useEffect(() => {
    const fetchRecommendedProducts = async (category) => {
      const recommendedProducts = await getRecommendedProducts(category);
      setRecommendedProducts(recommendedProducts);
    };

    fetchRecommendedProducts(productDetails?.main_category);
  }, [productDetails]);

  useEffect(() => {
    console.log("recomendded products", recommendedProducts);
  }, [recommendedProducts]);

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

  // multiple image options
  const image =
    productDetails && productDetails?.image
      ? productDetails?.image.split(",")
      : [];

  const image1 = image[0];
  const image2 = image[1];
  const image3 = image[2];
  // const image4 = image[3];

  // console.log("Image 1:", image1);

  //multiple images
  const [displayImage, setDisplayImage] = useState(image1);

  useEffect(() => {
    if (image1) {
      setDisplayImage(image1);
    }
  }, [image1]);

  function handleDisplayImage(imageKey) {
    if (imageKey === "image1") {
      setDisplayImage(image1);
    }
    if (imageKey === "image2") {
      setDisplayImage(image2);
    }
    if (imageKey === "image3") {
      setDisplayImage(image3);
    }
  }
  // console.log("displayImage", displayImage);

  if (loading)
    return (
      <div className="min-h-screen">
        <Loader />
      </div>
    );
  if (!productDetails)
    return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Product Image with Mouse Movement */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center items-center gap-y-5 md:gap-y-10 overflow-hidden"
        >
          <img
            // src={productDetails?.image}
            src={displayImage}
            alt={productDetails?.product_name}
            className="h-[250px] w-[320px] sm:w-[450px] md:w-[600px] md:h-[450px] object-cover rounded-xl transition-transform duration-300 ease-out"
            style={hoverStyle} // ✅ Apply dynamic zoom & movement
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />

          {/* img buttons */}
          <div className="flex justify-center gap-x-4 ">
            <button
              onClick={() => handleDisplayImage("image1")}
              className="border-2 border-gray-400 rounded-xl h-[3rem] md:h-[4rem] cursor-pointer "
            >
              <img
                className="w-[3rem] h-[2.8rem] md:h-[3.8rem] md:w-[5rem] rounded-xl hover:scale-105"
                src={image1}
                alt={productDetails?.product_name}
                width={50}
                height={80}
              />
            </button>

            <button
              onClick={() => handleDisplayImage(image2 ? "image2" : "image1")}
              className="border-2 border-gray-400 rounded-xl h-[3rem] md:h-[4rem] cursor-pointer"
            >
              <img
                className="w-[3rem] h-[2.8rem] md:h-[3.8rem] md:w-[5rem] rounded-xl hover:scale-105"
                src={image2 ? image2 : image1}
                alt={productDetails?.product_name}
                width={50}
                height={80}
              />
            </button>

            <button
              onClick={() => handleDisplayImage(image3 ? "image3" : "image1")}
              className="border-2 border-gray-400 rounded-xl h-[3rem] md:h-[4rem] cursor-pointer"
            >
              <img
                className="w-[3rem] h-[2.8rem] md:h-[3.8rem] md:w-[5rem] rounded-xl hover:scale-105"
                src={image3 ? image3 : image1}
                alt={productDetails?.product_name}
                width={50}
                height={80}
              />
            </button>
          </div>
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
                  .split(",")
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

      {/* recommended products section */}
      <div className="my-20">
        <h1 className="text-3xl lg:text-5xl mb-4 font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent ">
          Your favorites on the line
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 justify-items-center mt-10">
          {recommendedProducts.slice(0, 3).map((product) => (
            <RecommendedProductCard
              key={product.id}
              setIsRecommended={setIsRecommended}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
