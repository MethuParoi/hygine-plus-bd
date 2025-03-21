import React from 'react';
import { motion } from "framer-motion";

const NewCollection = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            {/* Title with animation (from bottom) */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="justify-center text-center"
            >
                <h1 className="text-5xl font-bold mb-4">Our New Collection</h1>
                <p className="text-gray-600">
                    Beyond inspiration, into excellence
                </p>
            </motion.div>
            <motion.div
            
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    <img src={} alt="" />
            </motion.div>
        </div>
    );
};

export default NewCollection;