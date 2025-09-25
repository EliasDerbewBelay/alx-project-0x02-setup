import { type ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  className = "",
  ...rest
}) => {
  let sizeClassas = "";
  if (size === "small") sizeClassas = "px-2 py-1 text-sm";
  if (size === "medium") sizeClassas = "px-4 py-2 text-md";
  if (size === "large") sizeClassas = "px-6 py-3 text-lg";

  return (
    <button
      className={`bg-blue-500 px-5 py-2 text-white ${shape} ${sizeClassas} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
