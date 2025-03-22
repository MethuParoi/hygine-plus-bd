// import React from 'react';
// import { motion } from "framer-motion";
// import factoryImg1 from '../../assets/products/Factory Picture.jpg'
// import factoryImg2 from '../../assets/products/20201214215510_27060.jpg'
// import factoryImg3 from '../../assets/products/BD Production Line 1.jpg'
// import factoryImg4 from '../../assets/products/Production+Line+Setup.jpg'
// import factoryImg5 from '../../assets/products/BD HTTP.jpg'
// import factoryImg6 from '../../assets/products/BD TTT.jpg'




// const FactoryImg = () => {
//     return (
//         <div className='w-11/12 lg:w-10/12 mx-auto my-20'>
//             {/* Title with animation (from bottom) */}
//             <motion.div
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="justify-center text-center"
//             >
//                 <h1 className="text-5xl font-bold mb-4">Our New Collection</h1>
//                 <p className="text-gray-600">
//                     Beyond inspiration, into excellence
//                 </p>
//             </motion.div>
//             <motion.dev 
//             initial={{ y: 300, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 4, ease: "easeOut" }}
//              >
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10'>
//                 <div>
//                     <img src={factoryImg1} alt="faucet Image" />
//                 </div>
//                 <div>
//                     <img src={factoryImg2} alt="Shower Image" />
//                 </div>
//                 <div>
//                     <img src={factoryImg3} alt="Floor Drain Image" />
//                 </div>
//                 <div>
//                     <img src={factoryImg4} alt="faucet Image" />
//                 </div>
//                 <div>
//                     <img src={factoryImg5} alt="Shower Image" />
//                 </div>
//                 <div>
//                     <img src={factoryImg6} alt="Floor Drain Image" />
//                 </div>
//             </div>
//             </motion.dev>
//         </div>
//     );
// };

// export default FactoryImg;

// import React from 'react';
// import { motion } from "framer-motion";
// import factoryImg1 from '../../assets/products/Factory Picture.jpg'
// import factoryImg2 from '../../assets/products/20201214215510_27060.jpg'
// import factoryImg3 from '../../assets/products/BD Production Line 1.jpg'
// import factoryImg4 from '../../assets/products/Production+Line+Setup.jpg'
// import factoryImg5 from '../../assets/products/BD HTTP.jpg'
// import factoryImg6 from '../../assets/products/BD TTT.jpg'

// const FactoryImg = () => {
//     return (
//         <div className='w-11/12 lg:w-10/12 mx-auto my-20'>
//             {/* Title with animation (from bottom) */}
//             <motion.div
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="justify-center text-center"
//             >
//                 <h1 className="text-5xl font-bold mb-4">Our New Collection</h1>
//                 <p className="text-gray-600">
//                     Beyond inspiration, into excellence
//                 </p>
//             </motion.div>

//             {/* Images Grid with Staggered Animation */}
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10'>
//                 {/* 1st Row (Images Coming from Left) */}
//                 <motion.div
//                     initial={{ x: -300, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
//                 >
//                     <img src={factoryImg1} className='h-72' alt="Factory Image 1" />
//                 </motion.div>

//                 <motion.div
//                     initial={{ x: -300, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
//                 >
//                     <img src={factoryImg2} className='h-72' alt="Factory Image 2" />
//                 </motion.div>

//                 <motion.div
//                     initial={{ x: -300, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
//                 >
//                     <img src={factoryImg3} className='h-72' alt="Factory Image 3" />
//                 </motion.div>

//                 {/* 2nd Row (Images Coming from Right) */}
//                 <motion.div
//                     initial={{ x: 300, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
//                 >
//                     <img src={factoryImg4} className='h-72' alt="Factory Image 4" />
//                 </motion.div>

//                 <motion.div
//                     initial={{ x: 300, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
//                 >
//                     <img src={factoryImg5} className='h-72' alt="Factory Image 5" />
//                 </motion.div>

//                 <motion.div
//                     initial={{ x: 100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
//                 >
//                     <img src={factoryImg6} className='h-72' alt="Factory Image 6" />
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default FactoryImg;

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
                <h1 className="text-5xl font-bold mb-4">Structural Excellence</h1>
                <p className="text-gray-600">
                Bold Structures. Refined Excellence.
                </p>
            </motion.div>

            {/* Images Grid with Staggered Animation */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10'>
                {/* 1st Row (Images Coming from Left) */}
                {[factoryImg1, factoryImg2, factoryImg3].map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.4, ease: "easeOut" }}
                        className="w-full"
                    >
                        <img src={img} alt={`Factory Image ${index + 1}`} 
                            className="w-full h-[280px] object-cover  shadow-lg" />
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
                            className="w-full h-[280px] object-cover shadow-lg" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FactoryImg;
