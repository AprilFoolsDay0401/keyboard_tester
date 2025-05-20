"use client";

import React from "react";

interface KeyProps {
  label: string;
  isPressed: boolean;
  wasPressed?: boolean;
  className?: string;
  isSpecialKey?: boolean;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
}

const Key: React.FC<KeyProps> = ({
  label,
  isPressed,
  wasPressed,
  className = "",
  isSpecialKey = false,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
}) => {
  const getKeySize = (label: string) => {
    if (label === "Space") return "w-72";
    if (label === "Backspace") return "w-22";
    if (label === "Enter") return "w-24";
    if (label === "Left Shift" || label === "Right Shift") return "w-24";
    if (label === "Tab") return "w-16";
    if (label === "Caps Lock") return "w-20";
    if (label === "\\") return "w-16";
    if (
      label === "Left Ctrl" ||
      label === "Right Ctrl" ||
      label === "Left Alt" ||
      label === "Right Alt" ||
      label === "Left Win" ||
      label === "Right Win"
    )
      return "w-16";
    return "w-10";
  };

  const getKeyHeight = (label: string) => {
    return "h-10";
  };

  return (
    <div
      className={`
        ${getKeySize(label)} ${getKeyHeight(label)} m-1 
        flex items-center justify-center rounded-lg
        border-2 border-gray-400
        ${
          isPressed
            ? "bg-green-600 text-white"
            : wasPressed
            ? "bg-green-400 text-white"
            : "bg-white text-gray-700"
        }
        ${className}
        transition-colors duration-100
        text-xs font-medium
        shadow-lg text-center
        hover:shadow-2xl
        cursor-pointer
      `}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </div>
  );
};

export default Key;
