import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Mail } from "lucide-react";
import aboutImg from "../assets/products/Shower-panel3.jpg";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 ">
      <Helmet>
        <title>Hygiene | About</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        {/* About Section */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-gray-900  mb-4">
            About <span className="text-red-600 ">HYGIENE PLUS</span>
          </h2>
          <p className="text-lg text-gray-700  max-w-3xl mx-auto">
          Hygiene Plus is a premium bathware and kitchenware brand in Bangladesh, offering a wide range of high-quality products imported from China. From stylish faucets to modern kitchen essentials, we provide durable and innovative solutions for every home.
          </p>
        </motion.section>

        {/* Mission Section */}
        <section className="flex flex-col lg:flex-row gap-10 items-center mb-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-4xl font-bold text-gray-900  mb-4 flex items-center">
              <Target className="text-yellow-500  dark:text-yellow-400 mr-2" size={30} />
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 ">
            At Hygiene Plus, our mission is to provide premium-quality bathware and kitchenware that combine innovation, style, and durability. We strive to enhance every home in Bangladesh with modern, high-performance products sourced from trusted international manufacturers. Our goal is to deliver affordable luxury, ensuring superior functionality and aesthetics while maintaining the highest standards of customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={aboutImg}
              alt="Mission Image"
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </section>

        {/* Core Values Section */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-2">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Quality, Innovation, Customer Satisfaction, Integrity, and Excellence in Every Product We Offer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="p-6 bg-white  rounded-xl shadow-xl backdrop-blur-md bg-opacity-80  transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900  flex items-center">
                <Users className="text-green-500 dark:text-green-400 mr-2" size={28} />
                Community
              </h4>
              <p className="text-gray-700  mt-2">
              We are committed to enhancing everyday living and building lasting trust with our customers across Bangladesh.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className="p-6 bg-white  rounded-xl shadow-xl backdrop-blur-md bg-opacity-80  transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900  flex items-center">
                <ShieldCheck className="text-yellow-500  mr-2" size={28} />
                Integrity
              </h4>
              <p className="text-gray-700  mt-2">
              We uphold honesty, transparency, and trust in every aspect of our business.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className="p-6 bg-white  rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900  flex items-center">
                <Target className="text-blue-500  mr-2" size={28} />
                Innovation
              </h4>
              <p className="text-gray-700  mt-2">
              We bring modern, high-quality bathware and kitchenware solutions through continuous improvement and creativity.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="text-center py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-gray-900  flex items-center justify-center">
            <Mail className="text-red-500  mr-2" size={30} />
            Contact Us
          </h3>
          <p className="text-lg text-gray-700  mb-6">
            Have questions? Reach out to us, and let's build the future of education together.
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent mb-6">
              +880 1703-394802
              </p>
          <a
            href="mailto:hygieneplusbd.com"
            className="inline-block bg-yellow-400 text-gray-200 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
