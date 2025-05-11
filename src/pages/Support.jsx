import { motion } from "framer-motion";
import { Target, Mail, Headset, Wrench, PhoneCall } from "lucide-react";
import aboutImg from "../assets/products/Production+Line+Setup.jpg";

const Support = () => {
  return (
    <div className="py-16 bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* About Section */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900  mb-4">
            <span className="text-red-600 ">SUPPORT</span>
          </h2>
          <p className="md:text-lg text-gray-700  max-w-3xl mx-auto">
            Hygiene Plus is a premium bathware and kitchenware brand in
            Bangladesh, offering a wide range of high-quality products imported
            from China. From stylish faucets to modern kitchen essentials, we
            provide durable and innovative solutions for every home.
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
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900  mb-4 flex items-center">
              <Target
                className="text-yellow-500  dark:text-yellow-400 mr-2"
                size={30}
              />
              Our Support
            </h3>
            <p className="md:text-lg text-gray-700 ">
              At Hygiene Plus, we prioritize customer satisfaction by providing
              reliable support at every step. Our dedicated team is always ready
              to assist with product inquiries, orders, and after-sales service
              to ensure a seamless shopping experience. Whether you need
              guidance in choosing the right products or assistance with
              installation and maintenance, we are here to help. For any
              support, feel free to reach out—we're committed to delivering
              exceptional service and ensuring a hassle-free experience for our
              valued customers.
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
              className="w-[300px] md:w-[600px] h-[350px] object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
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
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              Support We Provide
            </h3>
            <p className="md:text-lg text-gray-700 max-w-2xl mx-auto">
              We're dedicated to providing top-notch customer support, ensuring
              a seamless experience at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support Card 1 */}
            <div className="p-6 bg-white rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Headset className="text-green-500 mr-2" size={28} />
                Customer Assistance
              </h4>
              <p className="text-gray-700 mt-2">
                Our team is always available to answer questions and provide
                guidance on our products and services.
              </p>
            </div>
            {/* Support Card 2 */}
            <div className="p-6 bg-white rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Wrench className="text-yellow-500 mr-2" size={28} />
                Installation & Maintenance
              </h4>
              <p className="text-gray-700 mt-2">
                We provide expert support for installation and maintenance to
                ensure hassle-free product usage.
              </p>
            </div>
            {/* Support Card 3 */}
            <div className="p-6 bg-white rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <PhoneCall className="text-blue-500 mr-2" size={28} />
                After-Sales Support
              </h4>
              <p className="text-gray-700 mt-2">
                We ensure continued support after your purchase, helping you
                with any concerns or queries.
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
            Have questions? Reach out to us, and let's build the future of
            education together.
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-[#e63946] via-[#6a0572] bg-clip-text text-transparent mb-6">
            +880 1703-394802
          </p>
          <button
            // href="mailto:hygieneplusbd.com"
            className=" transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-5 sm:px-10 py-2 rounded-full text-black cursor-pointer transition-transform duration-300 text-xl hover:scale-105 ml-[10rem] sm:ml-[12rem]"
          >
            Get in Touch
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default Support;
