import { useEffect, useState } from "react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  // xl:max-w-[1100px] 2xl:max-w-[1400px] px-5 md:px-0 mx-auto
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden barlow-font">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
