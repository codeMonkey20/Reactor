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
  loadingAnim,
  props,
}) {
  const [isMouseHeld, setIsMouseHeld] = useState(false);

  switch (type) {
    case "basic":
      return (
        <button
          className={`
            rounded-md
            ${
              disabled || loadingAnim
                ? `
                  bg-gray-200 text-gray-400
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                `
                : `
                  ${isMouseHeld ? `opacity-60` : ``}
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                  ${color ? `text-white bg-[${color}]` : `text-black bg-white`}
                  ${hoverColor ? `hover:text-white hover:bg-[${hoverColor}]` : ``}
                `
            }
          `}
          onClick={
            onClick && !loadingAnim
              ? onClick
              : () => {
                  return;
                }
          }
          onMouseDown={() => {
            setIsMouseHeld(true);
          }}
          onMouseUp={() => {
            setIsMouseHeld(false);
          }}
          disabled={disabled === true}
          {...props}
        >
          {loadingAnim ? <i className="mr-2 fa fa-circle-notch fa-spin" /> : ""}
          {children}
        </button>
      );

    case "raised":
      return (
        <button
          className={`
            rounded-md drop-shadow-md
            ${
              disabled || loadingAnim
                ? `
                  bg-gray-200 text-gray-400
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                `
                : `
                  ${isMouseHeld ? `opacity-60` : ``}
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                  ${color ? `text-white bg-[${color}]` : `text-black bg-white`}
                  ${hoverColor ? `hover:text-white hover:bg-[${hoverColor}]` : ``}
                `
            }
          `}
          onClick={
            onClick && !loadingAnim
              ? onClick
              : () => {
                  return;
                }
          }
          onMouseDown={() => {
            setIsMouseHeld(true);
          }}
          onMouseUp={() => {
            setIsMouseHeld(false);
          }}
          disabled={disabled === true}
          {...props}
        >
          {loadingAnim ? <i className="mr-2 fa fa-circle-notch fa-spin" /> : ""}
          {children}
        </button>
      );

    case "stroked":
      return (
        <button
          className={`
            rounded-md border border-gray-300
            ${
              disabled || loadingAnim
                ? `
                  bg-gray-200 text-gray-400
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                `
                : `
                  ${isMouseHeld ? `opacity-60` : ``}
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                  ${hoverColor ? `hover:text-white hover:bg-[${hoverColor}]` : ``}
                `
            }
          `}
          onClick={
            onClick && !loadingAnim
              ? onClick
              : () => {
                  return;
                }
          }
          onMouseDown={() => {
            setIsMouseHeld(true);
          }}
          onMouseUp={() => {
            setIsMouseHeld(false);
          }}
          disabled={disabled === true}
          {...props}
        >
          {loadingAnim ? <i className="mr-2 fa fa-circle-notch fa-spin" /> : ""}
          {children}
        </button>
      );

    case "flat":
      return (
        <button
          className={`
            rounded-md
            ${
              disabled || loadingAnim
                ? `
                  text-gray-400
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                `
                : `
                  ${isMouseHeld ? `opacity-60` : ``}
                  ${className ? className : `py-2 px-5`}
                  ${bold ? `font-bold` : ``}
                  ${uppercase ? `uppercase` : ``}
                  ${color ? `text-[${color}]` : `text-black`}
                  ${hoverColor ? `hover:text-white hover:bg-[${hoverColor}]` : ``}
                `
            }
          `}
          onClick={
            onClick && !loadingAnim
              ? onClick
              : () => {
                  return;
                }
          }
          onMouseDown={() => {
            setIsMouseHeld(true);
          }}
          onMouseUp={() => {
            setIsMouseHeld(false);
          }}
          disabled={disabled === true}
          {...props}
        >
          {loadingAnim ? <i className="mr-2 fa fa-circle-notch fa-spin" /> : ""}
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
