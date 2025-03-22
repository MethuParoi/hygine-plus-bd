import { useEffect, useState } from "react";
import bgImage from "../../assets/hero/hero.jpg";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100px (adjust as needed)
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="h-[85dvh] w-full max-w-full overflow-hidden grid grid-cols-6 "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* first column */}
      <div className="col-span-2 flex items-center justify-center">
        <h1
          className={`text-black text-6xl font-extrabold mb-36 ${
            isScrolled ? "" : "fixed"
          }`}
        >
          ENVISION
        </h1>
      </div>
      {/* second column */}
      <div className=" flex items-center justify-center">
        <h1
          className={`text-white text-6xl font-extrabold ml-20 mb-36 ${
            isScrolled ? "" : "fixed"
          }`}
        >
          ELEVATE
        </h1>
      </div>
      {/* third column */}
      <div className="col-span-3 flex items-center justify-center">
        <h1
          className={`text-red-600 text-6xl font-extrabold mb-36 ml-36 ${
            isScrolled ? "" : "fixed"
          }`}
        >
          EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default Hero;
