import React from 'react';
import { motion } from "framer-motion";
import faucet2 from '../../assets/products/faucet2.jpg'
import shower from '../../assets/products/Shower-panel3.jpg'
import floorDrain from '../../assets/products/Floor-darin2.jpg'

const NewCollection = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-20'>
            {/* Title with animation (from bottom) */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="justify-center text-center"
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Our New Collection</h1>
                <p className="text-gray-600">
                    Beyond inspiration, into excellence
                </p>
            </motion.div>
            <motion.dev 
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 4, ease: "easeOut" }}
             >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10'>
                <div>
                    <img src={faucet2} alt="faucet Image" />
                </div>
                <div>
                    <img src={shower} alt="Shower Image" />
                </div>
                <div>
                    <img src={floorDrain} alt="Floor Drain Image" />
                </div>
            </div>
            </motion.dev>
        </div>
    );
};

export default NewCollection;