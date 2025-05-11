import React, { useState } from "react";
import Countdown from "react-countdown";
import bgimage from "../../assets/products/LIMITED-TIMER.jpg";

const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;
const LimitedTimeOffer = () => {
  // Initialize target date to 15 days from now
  const [targetDate, setTargetDate] = useState(Date.now() + FIFTEEN_DAYS_MS);

  // Handler when countdown completes
  const handleComplete = () => {
    // Reset to 15 days from now
    setTargetDate(Date.now() + FIFTEEN_DAYS_MS);
  };

  return (
    <div
      className=" text-white my-20 "
      style={{
        backgroundImage: `url(${bgimage})`, // Change this path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content */}
      <div className="W-11/12 mx-auto lg:w-10/12 py-6  flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold uppercase">
            Limited Time Offer
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-1">
            Get 25% off with the code{" "}
            <span className="font-semibold">"Hygieneplusbd"</span> for a limited
            time.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <Countdown
            onComplete={handleComplete}
            date={targetDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex space-x-6">
                {/* Days */}
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">{days}</h1>
                  <p className="text-sm md:text-base">Days</p>
                </div>
                {/* Hours */}
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">{hours}</h1>
                  <p className="text-sm md:text-base">Hours</p>
                </div>
                {/* Minutes */}
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">{minutes}</h1>
                  <p className="text-sm md:text-base">Minutes</p>
                </div>
                {/* Seconds */}
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">{seconds}</h1>
                  <p className="text-sm md:text-base">Seconds</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;
