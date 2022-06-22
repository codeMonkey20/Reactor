import React, { useState } from "react";

export default function Button({
  className,
  children,
  onClick,
  type,
  color,
  bold,
  uppercase,
  hoverColor,
  disabled,
}) {
  const [isMouseHeld, setIsMouseHeld] = useState(false);

  switch (type) {
    case "basic":
      return (
        <button
          className={`
            rounded-md
            ${
              disabled ? 
                `
                  bg-gray-200 text-gray-400
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                `
                : 
                `
                  ${isMouseHeld ? `opacity-60` : ``}
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                  ${color ? `text-white bg-[${color}]` : "text-black"}
                  ${hoverColor ? `hover:bg-[${hoverColor}]` : ``}
                `
            }
          `}
          onClick={onClick}
          onMouseDown={() => {
            setIsMouseHeld(true);
          }}
          onMouseUp={() => {
            setIsMouseHeld(false);
          }}
          disabled={disabled === true}
        >
          {children}
        </button>
      );

    case "raised":
      return (
        <button className={`p-2`} onClick={onClick}>
          {children}
        </button>
      );

    case "stroked":
      return (
        <button className={`p-2`} onClick={onClick}>
          {children}
        </button>
      );

    case "flat":
      return (
        <button className={`p-2`} onClick={onClick}>
          {children}
        </button>
      );

    case "icon":
      return (
        <button className={`p-2`} onClick={onClick}>
          {children}
        </button>
      );

    default:
      return (
        <button className={`p-2`} onClick={onClick}>
          {children}
        </button>
      );
  }
}
