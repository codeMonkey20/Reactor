import React from "react";

export default function Box({ children, onClick, isSelected }) {
  return (
    <div
      className={`py-5 pl-6 select-none cursor-pointer ${
        isSelected
          ? "bg-[#dee1f0] text-[#5867be]"
          : "text-[#ababab] hover:text-gray-500 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
