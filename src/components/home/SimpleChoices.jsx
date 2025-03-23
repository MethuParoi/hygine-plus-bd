import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import bgImage from "../../assets/simple-choice/simple-choice.jpg";
import { motion } from "framer-motion";

const SimpleChoices = () => {
  return (
    <ParallaxProvider>
      <div className="relative h-[65dvh] md:h-[55dvh] w-full overflow-hidden my-[5rem] md:my-[10rem]">
        {/* Parallax Background */}
        <ParallaxBanner
          layers={[
            {
              image: bgImage,
              speed: -20,
            },
          ]}
          className="h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Fixed Content */}
        {/* <div className="absolute inset-0 flex items-center justify-center"> */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className={`text-3xl md:text-5xl text-white text-center `}>
            <span className="font-thin block">Simple choices</span>{" "}
            <span className="font-semibold block">Powerful impact</span>{" "}
            <span className="font-thin">Experience it with</span>
            <span className="font-extrabold"> Hygiene Plus...</span>
          </h1>
        </motion.div>
        {/* </div> */}
      </div>
    </ParallaxProvider>
  );
};

export default SimpleChoices;
