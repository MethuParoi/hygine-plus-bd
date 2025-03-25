import React from 'react';
import { motion } from "framer-motion";
import factoryImg1 from '../../assets/products/Factory Picture.jpg'
import factoryImg2 from '../../assets/products/20201214215510_27060.jpg'
import factoryImg3 from '../../assets/products/BD Production Line 1.jpg'
import factoryImg4 from '../../assets/products/Production+Line+Setup.jpg'
import factoryImg5 from '../../assets/products/BD HTTP.jpg'
import factoryImg6 from '../../assets/products/BD TTT.jpg'

const FactoryImg = () => {
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
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Structural Excellence</h1>
                <p className="text-gray-600">
                Bold Structures. Refined Excellence.
                </p>
            </motion.div>

            {/* Images Grid with Staggered Animation */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center my-10'>
                {/* 1st Row (Images Coming from Left) */}
                {[factoryImg1, factoryImg2, factoryImg3].map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.4, ease: "easeOut" }}
                        className="w-full hidden md:block"
                    >
                        <img src={img} alt={`Factory Image ${index + 1}`} 
                            className="w-full md:h-[280px] object-cover  shadow-lg" />
                    </motion.div>
                ))}

                {/* 2nd Row (Images Coming from Right) */}
                {[factoryImg4, factoryImg5, factoryImg6].map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.4, ease: "easeOut" }}
                        className="w-full"
                    >
                        <img src={img} alt={`Factory Image ${index + 4}`} 
                            className="w-full md:h-[280px] object-cover shadow-lg" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FactoryImg;
