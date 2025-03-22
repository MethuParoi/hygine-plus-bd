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
    <div className="md:mr-10">
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
      {/* small screen bassine heading*/}
      <div className="md:hidden flex flex-col items-center bg-black py-2 border-transparent">
        <h1 className="text-4xl md:text-7xl text-white font-bold md:rotate-270 leading-tight mb-[-10px]">
          Bassine
        </h1>
        <p className="text-gray-200 lg:text-5xl font-thin md:rotate-270 md:ml-32">
          Golden Art
        </p>
      </div>
      {/* small screen bassine heading*/}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-10 ">
        {/* Bassine */}

        <div className="relative h-[26rem] md:h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex md:items-center justify-center">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Text */}
            <div className="hidden md:flex flex-col md:mr-24 mt-5 md:mt-0">
              <h1 className="text-4xl sm:text-5xl xl:text-7xl text-white font-bold md:rotate-270 leading-tight mb-[-10px]">
                Bassine
              </h1>
              <p className="text-gray-200 lg:text-5xl font-thin md:rotate-270 md:ml-32">
                Golden Art
              </p>
            </div>
          </motion.div>
          {/* small screen starts*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:hidden"
          >
            <div className="z-50">
              <img className="w-[19rem] mt-10" src={bassine} alt="" />
            </div>
          </motion.div>
          {/* small screen*/}
          {/* Button */}
          <div className="absolute bottom-10 md:left-48 ">
            <Button label="See More" type="see-more" handleClick={() => {}} />
          </div>
        </div>
        {/* second column */}
        <div className="hidden h-[30rem] md:col-span-5  lg:col-span-3 md:flex items-center justify-start">
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
        <div className="hidden h-[30rem] lg:col-span-3 lg:flex items-center justify-center">
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
        <hr className="w-[19rem] md:w-[35rem] lg:w-[50rem] mx-auto border-0 h-[1px] bg-gray-400 z-50 md:col-span-10" />
        {/* -------------Sink------------------- */}

        {/* small screen sink heading*/}
        <div className="md:hidden flex flex-col items-center bg-black py-2 border-transparent mt-[-1px]">
          <h1 className="text-4xl md:text-7xl text-white font-bold md:rotate-270 leading-tight mb-[-10px]">
            Kitchen Sink
          </h1>
          <p className="text-gray-200 lg:text-5xl font-thin md:rotate-270 md:ml-32">
            5 Switch
          </p>
        </div>
        {/* small screen sink heading*/}
        <div className="relative h-[26rem] md:h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex md:items-center justify-center mt-[-1px]">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Text */}
            <div className="hidden md:flex flex-col md:mr-24 mt-5 md:mt-0">
              <h1 className="text-4xl sm:text-5xl xl:text-7xl text-white font-bold md:rotate-270 leading-tight mb-[-10px]">
                Kitchen Sink
              </h1>
              <p className="text-gray-200 lg:text-5xl font-thin md:rotate-270 md:ml-32">
                5 Switch
              </p>
            </div>
          </motion.div>
          {/* small screen starts*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:hidden"
          >
            <div className="z-50">
              <img className="w-[19rem] mt-10" src={sink} alt="" />
            </div>
          </motion.div>
          {/* small screen ends*/}
          {/* Button */}
          <div className="absolute bottom-10 md:left-48 ">
            <Button label="See More" type="see-more" handleClick={() => {}} />
          </div>
        </div>
        {/* second column */}
        <div className="hidden h-[30rem] md:col-span-5  lg:col-span-3 md:flex items-center justify-start">
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
                src={sink}
                alt=""
              />
            </div>
          </motion.div>
        </div>
        {/* third column */}
        <div className="hidden h-[30rem] lg:col-span-3 lg:flex items-center justify-center">
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
                src={sink_2}
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <hr className="w-[19rem] md:w-[35rem] lg:w-[50rem] mx-auto border-0 h-[1px] bg-gray-400 z-50 md:col-span-10" />
        {/* -----------------Comode------------------------ */}
        {/* small screen comode heading*/}
        <div className="md:hidden flex flex-col items-center bg-black py-2 border-transparent mt-[-1px]">
          <h1 className="text-4xl md:text-7xl text-white font-bold md:rotate-270 leading-tight mb-[-10px]">
            Commode
          </h1>
          <p className="text-gray-200 lg:text-5xl font-thin md:rotate-270 md:ml-32">
            Non Disturbing
          </p>
        </div>
        {/* small screen comode heading*/}

        <div className="relative h-[26rem] md:h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex md:items-center justify-center mt-[-1px]">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Text */}
            <div className="hidden md:flex flex-col md:mr-24 mt-5 md:mt-0">
              <h1 className="text-4xl sm:text-5xl xl:text-7xl text-white font-bold md:rotate-270 leading-tight mb-[-10px]">
                Commode
              </h1>
              <p className="text-gray-200 lg:text-5xl font-thin md:rotate-270 md:ml-32">
                Non Disturbing
              </p>
            </div>
          </motion.div>
          {/* small screen starts*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:hidden"
          >
            <div className="z-50">
              <img className="w-[14rem] h-[15rem] mt-10" src={comode} alt="" />
            </div>
          </motion.div>
          {/* small screen*/}
          {/* Button */}
          <div className="absolute bottom-10 md:left-48 ">
            <Button label="See More" type="see-more" handleClick={() => {}} />
          </div>
        </div>
        {/* second column */}
        <div className="hidden h-[30rem] md:col-span-5  lg:col-span-3 md:flex items-center justify-start">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-start "
          >
            <div className="z-50">
              <img
                className="w-[16rem] lg:w-[30rem] h-[20rem] md:ml-16 lg:ml-[-7rem] xl:ml-[-12rem] mt-20"
                src={comode}
                alt=""
              />
            </div>
          </motion.div>
        </div>
        {/* third column */}
        <div className="hidden h-[30rem] lg:col-span-3 lg:flex items-center justify-center">
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
                src={comode_2}
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
