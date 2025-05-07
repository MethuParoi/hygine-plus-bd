import { useEffect, useState } from "react";
import bgImage from "../../assets/hero/bg.jpg";
import overlayImage from "../../assets/hero/overlay-pro.png";
import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ParallaxProvider>
      <div className="h-[20rem] md:h-[100dvh] w-full max-w-full overflow-hidden relative">
        {/* Parallax Background */}
        <ParallaxBanner
          layers={[
            {
              image: bgImage,
              speed: -20,
              style: {
                backgroundSize: isMobile ? "190%" : "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              },
            },
          ]}
          className="h-full absolute top-0 left-0 w-full z-10"
        />

        {/* overlay */}
        <motion.div
          initial={{ y: 100, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full z-10"
        >
          <img className="w-full h-full md:h-auto" src={overlayImage} alt="" />
        </motion.div>
      </div>
    </ParallaxProvider>
  );
};

export default Hero;
