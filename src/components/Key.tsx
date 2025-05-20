"use client";

import React from "react";

interface KeyProps {
  label: string;
  isPressed: boolean;
  wasPressed?: boolean;
  className?: string;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
}

const Key: React.FC<KeyProps> = ({
  label,
  isPressed,
  wasPressed,
  className = "",
  onMouseDown,
  onMouseUp,
  onMouseLeave,
}) => {
  const getKeySize = (keyLabel: string) => {
    if (keyLabel === "Space") return "w-70";
    if (keyLabel === "Backspace") return "w-23";
    if (keyLabel === "Enter") return "w-24";
    if (keyLabel === "Left Shift" || keyLabel === "Right Shift") return "w-24";
    if (keyLabel === "Tab") return "w-16";
    if (keyLabel === "Caps Lock") return "w-20";
    if (keyLabel === "\\") return "w-16";
    if (
      keyLabel === "Left Ctrl" ||
      keyLabel === "Right Ctrl" ||
      keyLabel === "Left Alt" ||
      keyLabel === "Right Alt" ||
      keyLabel === "Left Win" ||
      keyLabel === "Right Win"
    )
      return "w-16";
    return "w-10";
  };

  const getKeyHeight = (keyLabel: string) => {
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
