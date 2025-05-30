import React, { useContext } from "react";
import commodImg from "../../assets/products/Toilet-Carusel2.jpg";
import kitchenImg from "../../assets/products/Sink-Carusel3.jpg";
import bassinImg from "../../assets/shop-by-category/bassin.jpg";
import faucet from "../../assets/shop-by-category/shower.jpg";
import sink from "../../assets/shop-by-category/sink.jpg";
import hood from "../../assets/shop-by-category/hood.jpg";
import logo from "../../assets/logo/logo-black.png";

import { motion } from "framer-motion"; // Import Framer Motion
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const CategorySection = () => {
  const { setCategory } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-20">
      {/* Title with animation (from bottom) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col align-center justify-center text-center pb-10"
      >
        <img
          className="w-[16rem] lg:w-[25rem] justify-center mx-auto mb-10"
          src={logo}
          alt=""
        />
        <h1 className="text-3xl md:text-3xl font-bold mb-4">
          SHENZHEN 518000 <br /> CHINA
        </h1>
        <p className="text-gray-600 text-justify text-xl md:w-11/12 lg:w-10/12 mx-auto">
          HYGIENEN PLUS is a premium sanitary bathware and kitchenware brand
          dedicated to redefining modern living through luxury, innovation, and
          quality. Designed for those who seek elegance and functionality,
          HYGIENEN PLUS offers a wide range of high-end products that blend
          advanced technology with sophisticated design. From stylish faucets to
          intelligent kitchen solutions, the brand stands as a symbol of
          comfort, cleanliness, and contemporary lifestyle. With a commitment to
          excellence, HYGIENEN PLUS continues to set new benchmarks in luxury
          home essentials.
        </p>
      </motion.div>

      {/* Bathware section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 justify-items-center my-10">
        {/* Commod Image (Comes from left) */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Image */}
          <img
            src={commodImg}
            alt="Premium Commod"
            className="rounded-lg shadow-xl"
          />

          {/* Button (Top of Image) */}
          <button
            onClick={() => {
              setCategory("bathware");
              navigate("/products/bathware");
            }}
            className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black  cursor-pointer transition-transform duration-300 text-xl hover:scale-105"
          >
            Bathware
          </button>

          {/* Text Below Image (Left-Aligned) */}
          <div className="absolute bottom-8 left-5 sm:left-12  text-white">
            <h1 className="text-3xl font-bold">Hygiene Plus</h1>
            <p className="text-md sm:text-lg text-left ">
              Bangladesh's Premier Luxury Sanitary <br /> Bathware & Kitchenware
              Brand
            </p>
          </div>
        </motion.div>

        {/* Bassin & Faucet Grid (Comes from right) */}
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-2 gap-x-4 mt-8 lg:mt-0"
        >
          {/* Bassin Image */}
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div
              onClick={() => {
                setCategory("bathware");
                navigate("/products/bathware");
              }}
              className="group relative rounded-lg overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              {/* Image */}
              <img
                src={bassinImg}
                alt="Basin"
                className="scale-110 transition-transform duration-500 ease-out group-hover:scale-120 "
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-40">
                <h1 className="text-white text-3xl font-semibold">Basin</h1>
                <p className="text-white text-md tracking-[6px]">CATEGORY</p>
              </div>
            </div>
          </motion.div>

          {/* Shower Image */}
          {window.innerWidth >= 768 && (
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="relative flex justify-center"
            >
              <div
                onClick={() => {
                  setCategory("bathware");
                  navigate("/products/bathware");
                }}
                className="group relative rounded-lg overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={faucet}
                  alt="Faucet"
                  className="scale-110 transition-transform duration-500 ease-out group-hover:scale-120"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-40">
                  <h1 className="text-white text-3xl font-semibold">Shower</h1>
                  <p className="text-white text-md tracking-[6px]">CATEGORY</p>
                </div>
              </div>
            </motion.div>
          )}

          {window.innerWidth < 768 && (
            <div className="relative flex justify-center">
              <div
                onClick={() => {
                  setCategory("bathware");
                  navigate("/products/bathware");
                }}
                className="group relative rounded-lg overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={faucet}
                  alt="Faucet"
                  className="scale-110 transition-transform duration-500 ease-out group-hover:scale-120 "
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-40">
                  <h1 className="text-white text-3xl font-semibold">Shower</h1>
                  <p className="text-white text-md tracking-[6px]">CATEGORY</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Kitchenware section */}
      <div className="grid lg:grid-cols-2 gap-x-4 justify-items-center my-10">
        {/* Bassin & Faucet Grid (Comes from right) */}
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-2 gap-x-4 mb-8 lg:mb-0"
        >
          {/* bassine small card-2 */}
          {window.innerWidth >= 768 && (
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div
                onClick={() => {
                  setCategory("bathware");
                  navigate("/products/bathware");
                }}
                className="group relative rounded-lg overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={hood}
                  alt="Basin"
                  className="scale-110 transition-transform duration-500 ease-out group-hover:scale-120 "
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-40">
                  <h1 className="text-white text-3xl font-semibold">Hood</h1>
                  <p className="text-white text-md tracking-[6px]">CATEGORY</p>
                </div>
              </div>
            </motion.div>
          )}

          {window.innerWidth < 768 && (
            <div className="relative flex justify-center">
              <div
                onClick={() => {
                  setCategory("bathware");
                  navigate("/products/bathware");
                }}
                className="group relative rounded-lg overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={hood}
                  alt="Hood"
                  className="scale-110 transition-transform duration-500 ease-out group-hover:scale-120 "
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-40">
                  <h1 className="text-white text-3xl font-semibold">Hood</h1>
                  <p className="text-white text-md tracking-[6px]">CATEGORY</p>
                </div>
              </div>
            </div>
          )}
          {/* small card-2 */}
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
            className="relative flex justify-center"
          >
            <div
              onClick={() => {
                setCategory("bathware");
                navigate("/products/bathware");
              }}
              className="group relative rounded-lg overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              {/* Image */}
              <img
                src={sink}
                alt="sink"
                className="scale-110 transition-transform duration-500 ease-out group-hover:scale-120 "
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-40">
                <h1 className="text-white text-3xl font-semibold">Sink</h1>
                <p className="text-white text-md tracking-[6px]">CATEGORY</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* big card-2 */}
        {/* Commod Image (Comes from left) */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Image */}
          <img
            src={kitchenImg}
            alt="Premium Commod"
            className="rounded-lg shadow-xl"
          />

          {/* Button (Top of Image) */}
          <button
            onClick={() => {
              setCategory("kitchenware");
              navigate("/products/kitchenware");
            }}
            className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black 
    cursor-pointer transition-transform duration-300 text-xl hover:scale-105"
          >
            Kitchenware
          </button>

          {/* Text Below Image (Left-Aligned) */}
          <div className="absolute bottom-8 right-5 sm:right-12  text-white">
            <h1 className="text-3xl text-right font-bold">Hygiene Plus</h1>
            <p className="text-md sm:text-lg text-right">
              Bangladesh's Premier Luxury Sanitary <br /> Bathware & Kitchenware
              Brand
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategorySection;
