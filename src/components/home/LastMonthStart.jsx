import Button from "../ui/Button";
import bassine from "../../assets/lms/bassine.png";
import bassine_2 from "../../assets/lms/bassine-2.png";
import sink from "../../assets/lms/sink.png";
import sink_2 from "../../assets/lms/sink-2.jpg";
import comode from "../../assets/lms/comode.png";
import comode_2 from "../../assets/lms/comode-2.jpg";
import { motion } from "framer-motion";

const LastMonthStart = () => {
  return (
    <div className="mr-10">
      {/* title */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="justify-center text-center"
      >
        <div className="flex flex-col items-center my-20">
          <h1 className="text-5xl font-bold mb-4">Last Month&apos;s Stars</h1>
          <p className="text-gray-600">
            Your favorites that made it to the top!
          </p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-10 ">
        {/* Bassine */}

        <div className="relative h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex items-center justify-center">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-start "
          >
            {/* Text */}
            <div className="flex flex-col mr-24">
              <h1 className="text-7xl text-white font-bold rotate-270 leading-tight mb-[-10px]">
                Bassine
              </h1>
              <p className="text-gray-200 lg:text-5xl font-thin rotate-270 ml-32">
                Golden Art
              </p>
            </div>
          </motion.div>
          {/* Button */}
          <div className="absolute bottom-10 left-48">
            <Button label="See More" type="see-more" handleClick={() => {}} />
          </div>
        </div>
        {/* second column */}
        <div className=" h-[30rem] md:col-span-5  lg:col-span-3 flex items-center justify-start">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-start "
          >
            <div className="z-50">
              <img
                className="w-[95%] lg:ml-[-7rem] xl:ml-[-12rem] mt-20"
                src={bassine}
                alt=""
              />
            </div>
          </motion.div>
        </div>
        {/* third column */}
        <div className=" h-[30rem] lg:col-span-3 flex items-center justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="h-[30rem]">
              <img
                className="md:w-[100%] md:h-[100%] lg:w-[95%] xl:w-[100%] lg:mt-20"
                src={bassine_2}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LastMonthStart;
