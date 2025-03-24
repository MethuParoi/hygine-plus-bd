import { useEffect, useState } from "react";
import bgImage from "../../assets/hero/hero.jpg";
import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100px (adjust as needed)
      if (window.scrollY > 330) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 280) {
        setStartFade(true);
      } else {
        setStartFade(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="h-[85dvh] w-full max-w-full overflow-hidden  relative">
        {/* Parallax Background */}
        <ParallaxBanner
          layers={[
            {
              image: bgImage,
              speed: -20, // Creates a parallax effect
            },
          ]}
          className="h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-6">
          {/* first column */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-2 flex items-center justify-center "
          >
            <h1
              className={`text-black text-3xl md:text-4xl lg:text-6xl font-extrabold [text-shadow:_0_2px_4px_rgb(75_85_99_/_0.8)] mb-[-10rem] md:mb-36 xl:mr-40 md:transition-opacity md:duration-500 ${
                isScrolled
                  ? "md:hidden"
                  : startFade
                  ? "md:opacity-20 md:fixed"
                  : "md:opacity-100 md:pointer-events-auto md:fixed"
              }  `}
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
              className={`text-white text-3xl md:text-4xl lg:text-6xl font-extrabold md:ml-20 mb-[-4rem] md:mb-36 [text-shadow:_0_2px_4px_rgb(75_85_99_/_0.8)]  md:transition-opacity md:duration-500 ${
                isScrolled
                  ? "md:hidden"
                  : startFade
                  ? "md:opacity-20 md:fixed"
                  : "md:opacity-100 md:pointer-events-auto md:fixed"
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
              className={`text-red-600 text-3xl md:text-4xl lg:text-6xl font-extrabold mt-[-2rem] md:mt-0 mb-36 [text-shadow:_0_2px_4px_rgb(75_85_99_/_0.8)] md:ml-36 md:transition-opacity md:duration-500  ${
                isScrolled
                  ? "md:hidden"
                  : startFade
                  ? "md:opacity-20 md:fixed"
                  : "md:opacity-100 md:pointer-events-auto md:fixed"
              }`}
            >
              EXPERIENCE
            </h1>
          </motion.div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Hero;

