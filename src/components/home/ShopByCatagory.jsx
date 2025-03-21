import React from 'react';
import commodImg from '../../assets/products/Toilet-Carusel2.jpg'
import kitchenImg from '../../assets/products/Sink-Carusel3.jpg'
import bassinImg from '../../assets/products/bassin.jpg'
import faucet from '../../assets/products/faucet.jpg'

import { motion } from "framer-motion"; // ✅ Import Framer Motion

const CategorySection = () => {
    return (
      <div className="w-11/12 mx-auto mt-20">
        {/* Title with animation (from bottom) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="justify-center text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Shop By Category</h1>
          <p className="text-gray-600">
            At Hygiene Plus, we are committed to enhancing <br />
            your lifestyle with superior hygiene solutions.
          </p>
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 justify-items-center my-10">
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
            <button className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black  cursor-pointer transition-transform duration-300 text-xl hover:scale-105">
              Bathware
            </button>

            {/* Text Below Image (Left-Aligned) */}
            <div className="absolute bottom-8 left-12  text-white">
              <h1 className="text-3xl font-bold">Hygiene Plus</h1>
              <p className="text-lg">
                Bangladesh's Premier Luxury Sanitary <br /> Bathware &
                Kitchenware Brand
              </p>
            </div>
          </motion.div>

          {/* Bassin & Faucet Grid (Comes from right) */}
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 mt-10"
          >
            {/* Bassin Image */}
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
              className="relative flex justify-center"
            >
              <img
                src={bassinImg}
                className="rounded-lg  bg-white shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                alt="Bassin Image"
              />
              {/* Button (Bottom of Image) */}
              <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black  cursor-pointer transition-transform duration-300 text-xl hover:scale-105">
                Explore
              </button>
              <div className="absolute top-16 text-center  text-black">
                <h1 className="text-3xl text-center ">Bassin</h1>
              </div>
            </motion.div>

            {/* Faucet Image */}
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="relative flex justify-center"
            >
              <img
                src={faucet}
                className="rounded-lg shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                alt="Faucet Image"
              />
              {/* Button (Bottom of Image) */}
              <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black  cursor-pointer transition-transform duration-300 text-xl hover:scale-105">
                Explore
              </button>
              <div className="absolute top-16 text-center  text-black">
                <h1 className="text-3xl text-center ">Faucet</h1>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-items-center my-10">
          {/* Bassin & Faucet Grid (Comes from right) */}
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 mt-10"
          >
            {/* Bassin Image */}
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
              className="relative flex justify-center"
            >
              <img
                src={bassinImg}
                className="rounded-lg  bg-white shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                alt="Bassin Image"
              />
              {/* Button (Bottom of Image) */}
              <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black font-semibold  cursor-pointer transition-transform duration-300 text-xl hover:scale-105">
                Explore
              </button>
              <div className="absolute top-16 text-center  text-black">
                <h1 className="text-3xl text-center ">Bassin</h1>
              </div>
            </motion.div>

            {/* Faucet Image */}
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="relative flex justify-center"
            >
              <img
                src={faucet}
                className="rounded-lg shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                alt="Faucet Image"
              />
              {/* Button (Bottom of Image) */}
              <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black font-semibold  cursor-pointer transition-transform duration-300 text-xl hover:scale-105">
                Explore
              </button>
              <div className="absolute top-16 text-center  text-black">
                <h1 className="text-3xl text-center ">Faucet</h1>
              </div>
            </motion.div>
          </motion.div>
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
              className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-10 py-2 rounded-full text-black 
    cursor-pointer transition-transform duration-300 text-xl hover:scale-105"
            >
              Kitchenware
            </button>

            {/* Text Below Image (Left-Aligned) */}
            <div className="absolute bottom-8 right-12  text-white">
              <h1 className="text-3xl text-right font-bold">Hygiene Plus</h1>
              <p className="text-lg text-right">
                Bangladesh's Premier Luxury Sanitary <br /> Bathware &
                Kitchenware Brand
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default CategorySection;

