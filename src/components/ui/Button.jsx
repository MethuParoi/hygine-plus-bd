import React from "react";

const Button = ({ handleClick, disabled, type, buttonClass, label }) => {
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
