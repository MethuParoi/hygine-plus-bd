import React from "react";

const Button = ({ handleClick, disabled, type, buttonClass, label }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={
        type === "submit" ? "submit" : type === "reset" ? "reset" : "button"
      }
      className={buttonClass}
      aria-label={label} // Add aria-label for accessibility
    >
      {label}
    </button>
  );
};

export default Button;
