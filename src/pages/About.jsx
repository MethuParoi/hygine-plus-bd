// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import { Users, Target, ShieldCheck, Mail } from "lucide-react";
// import aboutImg from "../assets/products/Shower-panel3.jpg";
// import Button from "../components/ui/Button";
import AboutMainImg from "../assets/about/about-banner.jpg"
import icon1 from "../assets/about/Clean.png"
import icon2 from "../assets/about/gear.png"
import icon3 from "../assets/about/care.png"
import vision from "../assets/about/Vission-1.jpg2.jpg"
import { motion } from "framer-motion";

const About = () => {
  return (
    // <div className="py-16 bg-gray-100 ">
    //   <Helmet>
    //     <title>Hygiene | About</title>
    //   </Helmet>
    //   <div className="max-w-6xl mx-auto px-4">
    //     {/* About Section */}
    //     <motion.section
    //       className="text-center mb-12"
    //       initial={{ opacity: 0, y: -50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8, ease: "easeOut" }}
    //     >
    //       <h2 className="text-5xl font-bold text-gray-900  mb-4">
    //         About <span className="text-red-600 ">HYGIENE PLUS</span>
    //       </h2>
    //       <p className="text-lg text-gray-700  max-w-3xl mx-auto">
    //         Hygiene Plus is a premium bathware and kitchenware brand in
    //         Bangladesh, offering a wide range of high-quality products imported
    //         from China. From stylish faucets to modern kitchen essentials, we
    //         provide durable and innovative solutions for every home.
    //       </p>
    //     </motion.section>

    //     {/* Mission Section */}
    //     <section className="flex flex-col lg:flex-row gap-10 items-center mb-12">
    //       <motion.div
    //         className="lg:w-1/2"
    //         initial={{ opacity: 0, x: -50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8, ease: "easeOut" }}
    //       >
    //         <h3 className="text-4xl font-bold text-gray-900  mb-4 flex items-center">
    //           <Target
    //             className="text-yellow-500  dark:text-yellow-400 mr-2"
    //             size={30}
    //           />
    //           Our Mission
    //         </h3>
    //         <p className="text-lg text-gray-700 ">
    //           At Hygiene Plus, our mission is to provide premium-quality
    //           bathware and kitchenware that combine innovation, style, and
    //           durability. We strive to enhance every home in Bangladesh with
    //           modern, high-performance products sourced from trusted
    //           international manufacturers. Our goal is to deliver affordable
    //           luxury, ensuring superior functionality and aesthetics while
    //           maintaining the highest standards of customer satisfaction.
    //         </p>
    //       </motion.div>
    //       <motion.div
    //         className="lg:w-1/2"
    //         initial={{ opacity: 0, x: 50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8, ease: "easeOut" }}
    //       >
    //         <img
    //           src={aboutImg}
    //           alt="Mission Image"
    //           className="w-[300px] md:w-[600px] h-[350px] object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
    //         />
    //       </motion.div>
    //     </section>

    //     {/* Core Values Section */}
    //     <motion.section
    //       className="py-12"
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8, ease: "easeOut" }}
    //     >
    //       <div className="text-center mb-12">
    //         <h3 className="text-5xl font-bold text-gray-900 mb-2">
    //           Our Core Values
    //         </h3>
    //         <p className="text-lg text-gray-700 max-w-2xl mx-auto">
    //           Quality, Innovation, Customer Satisfaction, Integrity, and
    //           Excellence in Every Product We Offer.
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         {/* Value Card 1 */}
    //         <div className="p-6 bg-white  rounded-xl shadow-xl backdrop-blur-md bg-opacity-80  transform hover:scale-105 transition-transform duration-500">
    //           <h4 className="text-xl font-semibold text-gray-900  flex items-center">
    //             <Users
    //               className="text-green-500 dark:text-green-400 mr-2"
    //               size={28}
    //             />
    //             Community
    //           </h4>
    //           <p className="text-gray-700  mt-2">
    //             We are committed to enhancing everyday living and building
    //             lasting trust with our customers across Bangladesh.
    //           </p>
    //         </div>
    //         {/* Value Card 2 */}
    //         <div className="p-6 bg-white  rounded-xl shadow-xl backdrop-blur-md bg-opacity-80  transform hover:scale-105 transition-transform duration-500">
    //           <h4 className="text-xl font-semibold text-gray-900  flex items-center">
    //             <ShieldCheck className="text-yellow-500  mr-2" size={28} />
    //             Integrity
    //           </h4>
    //           <p className="text-gray-700  mt-2">
    //             We uphold honesty, transparency, and trust in every aspect of
    //             our business.
    //           </p>
    //         </div>
    //         {/* Value Card 3 */}
    //         <div className="p-6 bg-white  rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
    //           <h4 className="text-xl font-semibold text-gray-900  flex items-center">
    //             <Target className="text-blue-500  mr-2" size={28} />
    //             Innovation
    //           </h4>
    //           <p className="text-gray-700  mt-2">
    //             We bring modern, high-quality bathware and kitchenware solutions
    //             through continuous improvement and creativity.
    //           </p>
    //         </div>
    //       </div>
    //     </motion.section>

    //     {/* Contact Section */}
    //     <motion.section
    //       className="text-center py-12"
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8, ease: "easeOut" }}
    //     >
    //       <h3 className="text-3xl font-semibold text-gray-900  flex items-center justify-center">
    //         <Mail className="text-red-500  mr-2" size={30} />
    //         Contact Us
    //       </h3>
    //       <p className="text-lg text-gray-700  mb-6">
    //         Have questions? Reach out to us, and let's build the future of
    //         education together.
    //       </p>
    //       <p className="text-3xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent mb-6">
    //         +880 1703-394802
    //       </p>
    //       <button
    //         // href="mailto:hygieneplusbd.com"
    //         className=" transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-5 sm:px-10 py-2 rounded-full text-black cursor-pointer transition-transform duration-300 text-xl hover:scale-105 ml-[10rem] sm:ml-[12rem]"
    //       >
    //         Get in Touch
    //       </button>
    //     </motion.section>
    //   </div>
    // </div>
    <div className="  ">
      <div
        className="h-screen w-full mb-10 md:mb-20 max-w-full flex overflow-hidden "
        style={{
          backgroundImage: `url(${AboutMainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="w-11/12 md:w-10/12 mx-auto text-center text-lg font-semibold px-10 md:px-30 mt-20 mb-10">
          Hygiene Plus is a next-generation sanitary care brand committed to redefining
          hygiene standards across Bangladesh. With a strong focus on innovation,
          sustainability, and design, we provide advanced sanitary solutions that empower
          individuals and communities to lead healthier, cleaner lives. <br /><br />
          Our journey began with a simple idea: to make hygiene not just a necessity, but a
          lifestyle. Today, Hygiene Plus stands as a symbol of trust, quality, and progressive
          thinking in the world of personal care and sanitary essentials.
        </p>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">
          <span className="inline-block bg-gradient-to-r from-[#e63946] to-[#6a0572] bg-clip-text text-transparent">HYGIENEPLUS-COREESSENCE</span>
        </h2>
        {/* Feature Cards Section (No Change) */}
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <img src={icon1} className="w-20 h-20 mx-auto" />,
                title: "CLEANLINESS",
                description1: "A symbol of purity and protection.",
                description2:
                  "At Hygiene Plus, cleanliness is not just a standard—it’s a lifestyle. We are dedicated to elevating hygiene through premium sanitary solutions that care for you and the environment.",
              },
              {
                icon: <img src={icon2} className="w-20 h-20 mx-auto" />,
                title: "INNOVATION",
                description1: "Driven by ideas that improve everyday hygiene.",
                description2:
                  "We continuously evolve by embracing modern technology and consumer needs. Every product is thoughtfully crafted to bring ease, comfort, and confidence to your daily life.",
              },
              {
                icon: <img src={icon3} className="w-20 h-20 mx-auto " />,
                title: "CARE",
                description1: "Compassion in every product we make.",
                description2:
                  "We believe personal care starts with empathy. Our brand stands for trust, reliability, and a deep understanding of what it means to truly care—for individuals, families, and communities.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                className="flex flex-col items-center bg-[#f9fbfc] p-8 rounded-xl shadow-md text-center"
              >
                {/* Icon */}
                <div className="p-5 flex items-center justify-center bg-white rounded-full shadow-neutral-400 shadow-lg -mt-14">
                  {feature.icon}
                </div>

                {/* Title and Description */}
                <div className="mt-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-3 font-semibold leading-relaxed">
                    {feature.description1}
                  </p>
                  <p className="text-gray-600 font-semibold leading-relaxed">
                    {feature.description2}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Our mission section */}
      <div className="w-11/12 md:w-7/12 mx-auto my-20">
        <div className="">
          <h2 className="text-4xl font-bold mb-2 text-center">
            <span className="inline-block bg-gradient-to-r from-[#e63946] to-[#6a0572] bg-clip-text text-transparent">OUR VISION</span>
          </h2>
          <p className="text-center ">
            To lead Bangladesh toward a cleaner, healthier future—one where <br /> hygiene is smart, sustainable, and accessible to all.
          </p>
        </div>
        <div className="">
          <img src={vision} alt="Our vision image" />
        </div>
      </div>
    </div>

  );
};

export default About;
