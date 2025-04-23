"use client";

import React from "react";

interface KeyProps {
  label: string;
  isPressed: boolean;
  className?: string;
  isSpecialKey?: boolean;
}

const Key: React.FC<KeyProps> = ({
  label,
  isPressed,
  className = "",
  isSpecialKey = false,
}) => {
  const getKeySize = (label: string) => {
    if (label === "Space") return "w-[20rem]";
    if (label === "Backspace") return "w-24";
    if (label === "Enter") return "w-29";
    if (label === "Left Shift" || label === "Right Shift") return "w-[8rem]";
    if (label === "Tab") return "w-20";
    if (label === "Caps Lock") return "w-26";
    if (
      label === "Ctrl" ||
      label === "Alt" ||
      label === "Win" ||
      label === "Menu"
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
        flex items-center justify-center rounded-md
        border-2 border-gray-300
        ${isPressed ? "bg-blue-500 text-white" : "bg-white text-gray-800"}
        ${className}
        transition-colors duration-100
        text-sm font-medium
        shadow-sm text-center
        hover:shadow-md
      `}
    >
      {label}
    </div>
  );
};

export default Key;
