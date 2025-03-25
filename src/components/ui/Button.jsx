import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";

const Button = ({ handleClick, disabled, type, buttonClass, label }) => {
  if (type === "see-more") {
    return (
      <button
        onClick={handleClick}
        disabled={disabled}
        className="text-black text-2xl font-md py-2 px-4 rounded-[2rem] cursor-pointer bg-white border border-gray-300 flex items-center justify-center gap-x-2 hover:bg-gray-200 shadow-[0_4px_30px_rgba(255,255,255,0.8)]"
      >
        {label}
        <FaArrowRightLong />
      </button>
    );
  } else if (type === "add-product") {
    return (
      <button
        onClick={handleClick}
        // type={
        //   type === "submit" ? "submit" : type === "reset" ? "reset" : "button"
        // }
        disabled={disabled}
        className={`text-white font-bold text-lg py-2 px-4 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2`}
      >
        <IoMdAddCircle className="text-2xl" />
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      type={
        type === "submit" ? "submit" : type === "reset" ? "reset" : "button"
      }
      disabled={disabled}
      className={`text-white font-bold py-2 px-4 rounded-md cursor-pointer ${
        type === "primary"
          ? "bg-blue-500 hover:bg-blue-600  "
          : type === "reset"
          ? "bg-red-500 hover:bg-red-600"
          : buttonClass
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
