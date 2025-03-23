import { useEffect, useState } from "react";
import bgImage from "../../assets/hero/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100px (adjust as needed)
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-[85dvh] w-full max-w-full overflow-hidden grid grid-cols-1 md:grid-cols-6 "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* first column */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:col-span-2 flex items-center justify-center"
      >
        <h1
          className={`text-black text-3xl md:text-4xl lg:text-6xl font-extrabold mb-[-10rem] md:mb-36  md:transition-transform md:duration-1000 md:ease-in-out ${
            isScrolled ? "md:translate-y-[-50px]" : "md:translate-y-0 md:fixed"
          }`}
        >
          ENVISION
        </h1>
      </motion.div>
      {/* second column */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <h1
          className={`text-white text-3xl md:text-4xl lg:text-6xl font-extrabold md:ml-20 mb-[-4rem] md:mb-36  md:transition-transform md:duration-1000 md:ease-in-out ${
            isScrolled ? "md:translate-y-[-50px]" : "md:translate-y-0 md:fixed"
          }`}
        >
          ELEVATE
        </h1>
      </motion.div>
      {/* third column */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:col-span-3 flex items-center justify-center"
      >
        <h1
          className={`text-red-600 text-3xl md:text-4xl lg:text-6xl font-extrabold mt-[-2rem] mb-36 md:ml-36 md:transition-transform md:duration-1000 md:ease-in-out ${
            isScrolled ? "md:translate-y-[-50px]" : "md:translate-y-0 md:fixed"
          }`}
        >
          EXPERIENCE
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;

// import { useEffect, useState } from "react";
// import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
// import bgImage from "../../assets/hero/hero.jpg";

// const Hero = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <ParallaxProvider>
//       <div className="relative h-[85dvh] w-full overflow-hidden">
//         {/* Parallax Background */}
//         <ParallaxBanner
//           layers={[
//             {
//               image: bgImage,
//               speed: -20, // Creates a parallax effect
//             },
//           ]}
//           className="h-full"
//           style={{
//             backgroundImage: `url(${bgImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />

//         {/* Fixed Content */}
//         <div className="absolute inset-0 grid grid-cols-6 h-full w-full">
//           {/* First Column */}
//           <div className="col-span-2 flex items-center justify-center">
//             <h1
//               className={`text-black text-6xl font-extrabold ${
//                 isScrolled ? "" : "fixed"
//               }`}
//             >
//               ENVISION
//             </h1>
//           </div>

//           {/* Second Column */}
//           <div className="flex items-center justify-center">
//             <h1
//               className={`text-white text-6xl font-extrabold ml-20 ${
//                 isScrolled ? "" : "fixed"
//               }`}
//             >
//               ELEVATE
//             </h1>
//           </div>

//           {/* Third Column */}
//           <div className="col-span-3 flex items-center justify-center">
//             <h1
//               className={`text-red-600 text-6xl font-extrabold ml-36 ${
//                 isScrolled ? "" : "fixed"
//               }`}
//             >
//               EXPERIENCE
//             </h1>
//           </div>
//         </div>
//       </div>
//     </ParallaxProvider>
//   );
// };

// export default Hero;
