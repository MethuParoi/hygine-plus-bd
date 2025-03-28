import Button from "../ui/Button";
import bassine from "../../assets/lms/new/bassin.png";
import bassine_2 from "../../assets/lms/bassine-2.png";
import sink from "../../assets/lms/new/sink.png";
import sink_2 from "../../assets/lms/sink-2.jpg";
import comode from "../../assets/lms/new/toilet.png";
import comode_2 from "../../assets/lms/comode-2.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useState } from "react";

const LastMonthStart = () => {
  const [hoverStyleBassine, setHoverStyleBassine] = useState({
    transform: "scale(1)",
  });
  const [hoverStyleSink, setHoverStyleSink] = useState({
    transform: "scale(1)",
  });
  const [hoverStyleCommode, setHoverStyleCommode] = useState({
    transform: "scale(1)",
  });
  const navigate = useNavigate();

  // ✅ Mouse movement effect for bassine
  const handleMouseMove_bassine = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;
    const xPos = (offsetX / clientWidth - 0.5) * 50; // Adjust sensitivity
    const yPos = (offsetY / clientHeight - 0.5) * 50;

    setHoverStyleBassine({
      transform: `scale(1.1) translate(${xPos}px, ${yPos}px)`,
    });
  };

  const handleMouseLeave_bassine = () => {
    setHoverStyleBassine({ transform: "scale(1)" });
  };

  // ✅ Mouse movement effect for sink
  const handleMouseMove_sink = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;
    const xPos = (offsetX / clientWidth - 0.5) * 50; // Adjust sensitivity
    const yPos = (offsetY / clientHeight - 0.5) * 50;

    setHoverStyleSink({
      transform: `scale(1.1) translate(${xPos}px, ${yPos}px)`,
    });
  };

  const handleMouseLeave_sink = () => {
    setHoverStyleSink({ transform: "scale(1)" });
  };

  // ✅ Mouse movement effect for commode
  const handleMouseMove_commode = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;
    const xPos = (offsetX / clientWidth - 0.5) * 50; // Adjust sensitivity
    const yPos = (offsetY / clientHeight - 0.5) * 50;

    setHoverStyleCommode({
      transform: `scale(1.1) translate(${xPos}px, ${yPos}px)`,
    });
  };

  const handleMouseLeave_commode = () => {
    setHoverStyleCommode({ transform: "scale(1)" });
  };

  return (
    <div className="md:mr-10">
      {/* title */}
      <motion.div
        // initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="justify-center text-center"
      >
        <div className="flex flex-col items-center my-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Last Month&apos;s Stars
          </h1>
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

        <div className="relative h-[26rem] md:h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex flex-col items-center justify-center gap-y-16 md:gap-y-52 pb-28 md:pb-0 mt-[-1px]">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
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
            initial={{ x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:hidden"
          >
            <div className="z-50">
              <img className="w-full mt-[-2rem] md:mt-0" src={bassine} alt="" />
            </div>
          </motion.div>
          {/* small screen*/}
          {/* Button */}
          <div className="mt-[-5rem] md:mt-0 md:mr-10">
            <Button
              label="See More"
              type="see-more"
              handleClick={() => {
                navigate("/products/bathware");
              }}
            />
          </div>
        </div>
        {/* second column */}
        <div className="hidden h-[30rem] md:col-span-5  lg:col-span-3 md:flex items-center justify-start">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-start "
          >
            <div className="z-50">
              <img
                className="w-full lg:ml-[-7rem] xl:ml-[-13rem] mt-20 cursor-pointer"
                src={bassine}
                alt="bassine"
                style={hoverStyleBassine} // ✅ Apply dynamic zoom & movement
                onMouseMove={handleMouseMove_bassine}
                onMouseLeave={handleMouseLeave_bassine}
              />
            </div>
          </motion.div>
        </div>
        {/* third column */}
        <div className="hidden h-[30rem] lg:col-span-3 lg:flex items-center justify-center">
          <motion.div
            initial={{ x: 100 }}
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
        <div className="relative h-[26rem] md:h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex flex-col items-center justify-center gap-y-5 md:gap-y-52 pb-24 md:pt-[230px] mt-[-1px]">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
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
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
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
          <div className="md:mr-10">
            <Button
              label="See More"
              type="see-more"
              handleClick={() => {
                navigate("/products/kitchenware");
              }}
            />
          </div>
        </div>
        {/* second column */}
        <div className="hidden h-[30rem] md:col-span-5  lg:col-span-3 md:flex items-center justify-start">
          <motion.div
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-start "
          >
            <div className="z-50">
              <img
                className="w-[100%] lg:ml-[-7rem] xl:ml-[-15rem] mt-20 cursor-pointer"
                src={sink}
                alt="sink"
                style={hoverStyleSink} // ✅ Apply dynamic zoom & movement
                onMouseMove={handleMouseMove_sink}
                onMouseLeave={handleMouseLeave_sink}
              />
            </div>
          </motion.div>
        </div>
        {/* third column */}
        <div className="hidden h-[30rem] lg:col-span-3 lg:flex items-center justify-center">
          <motion.div
            // initial={{ x: 100, opacity: 0 }}
            initial={{ x: 100 }}
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

        <div className="relative h-[26rem] md:h-[40rem] md:col-span-5 lg:col-span-4 bg-black flex flex-col items-center justify-center gap-y-10 md:gap-y-52 pb-24 md:pb-0 mt-[-2px]">
          {/* text */}
          {/* Animated Container */}
          <motion.div
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
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
              <p className="text-gray-200 text-5xl font-thin md:rotate-270 md:ml-32">
                Non Disturbing
              </p>
            </div>
          </motion.div>
          {/* small screen starts*/}
          <motion.div
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center md:hidden"
          >
            <div className="z-50">
              <img className="w-full h-[20rem] " src={comode} alt="" />
            </div>
          </motion.div>
          {/* small screen*/}
          {/* Button */}
          <div className="mt-[-2rem] sm:mt-0 md:mr-10">
            <Button
              label="See More"
              type="see-more"
              handleClick={() => {
                navigate("/products/bathware");
              }}
            />
          </div>
        </div>
        {/* second column */}
        <div className="hidden h-[30rem] md:col-span-5  lg:col-span-3 md:flex items-center justify-start">
          <motion.div
            // initial={{ x: -100, opacity: 0 }}
            initial={{ x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-start "
          >
            <div className="z-50">
              <img
                className="w-full  lg:ml-[-11rem] xl:ml-[-15rem] mt-20 cursor-pointer"
                src={comode}
                alt="commode"
                style={hoverStyleCommode} // ✅ Apply dynamic zoom & movement
                onMouseMove={handleMouseMove_commode}
                onMouseLeave={handleMouseLeave_commode}
              />
            </div>
          </motion.div>
        </div>
        {/* third column */}
        <div className="hidden h-[30rem] lg:col-span-3 lg:flex items-center justify-center">
          <motion.div
            // initial={{ x: 100, opacity: 0 }}
            initial={{ x: 100 }}
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
