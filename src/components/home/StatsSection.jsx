import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className=" flex flex-col md:flex-row items-center justify-center text-center gap-x-40">
        {/* Happy Customers */}
        <div className="">
          <h1 className="text-4xl font-bold text-black">
            <CountUp end={1500} duration={3} />+
          </h1>
          <p className="text-sm text-gray-600">HAPPY CUSTOMERS</p>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-1 h-16 bg-gray-900 mx-6"></div>

        {/* Team Members */}
        <div className="">
          <h1 className="text-4xl font-bold text-black">
            <CountUp end={10} duration={3} />+
          </h1>
          <p className="text-sm text-gray-600">TEAM MEMBERS</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
