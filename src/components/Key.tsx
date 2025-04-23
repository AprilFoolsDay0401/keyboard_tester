"use client";

import React from "react";

interface KeyProps {
  label: string;
  isPressed: boolean;
  wasPressed?: boolean;
  className?: string;
  isSpecialKey?: boolean;
}

const Key: React.FC<KeyProps> = ({
  label,
  isPressed,
  wasPressed,
  className = "",
  isSpecialKey = false,
}) => {
  const getKeySize = (label: string) => {
    if (label === "Space") return "w-[25rem]";
    if (label === "Backspace") return "w-24";
    if (label === "Enter") return "w-28";
    if (label === "Left Shift" || label === "Right Shift") return "w-[8rem]";
    if (label === "Tab") return "w-20";
    if (label === "Caps Lock") return "w-26";
    if (label === "\\") return "w-18";
    if (
      label === "Left Ctrl" ||
      label === "Right Ctrl" ||
      label === "Left Alt" ||
      label === "Right Alt" ||
      label === "Left Win" ||
      label === "Right Win"
    )
      return "w-20";
    return "w-14";
  };

  const getKeyHeight = (label: string) => {
    return "h-14";
  };

  return (
    <div
      className={`
        ${getKeySize(label)} ${getKeyHeight(label)} m-1 
        flex items-center justify-center rounded-lg
        border-2 border-gray-400
        ${
          isPressed
            ? "bg-blue-500 text-white"
            : wasPressed
            ? "bg-sky-400 text-white"
            : "bg-white text-gray-700"
        }
        ${className}
        transition-colors duration-100
        text-sm font-medium
        shadow-lg text-center
        hover:shadow-2xl
      `}
    >
      {label}
    </div>
  );
};

export default Key;
