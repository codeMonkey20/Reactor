import React, { useRef, useState } from "react";
import "./InputField.css";

export default function InputField({
  children,
  id,
  placeholder,
  required,
  value,
  onChange,
  ...props
}) {
  const ref = useRef();
  const [filled, setFilled] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        className={`text-input p-[0.8rem] w-full h-full border-2 border-gray-300 bg-[#eeeeee] rounded-md text-[18px] text-black`}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        required={required === true}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={() => {
          if (value) {
            setFilled("filled");
          } else {
            setFilled("");
          }
        }}
        {...props}
      />
      <label
        className={`label ${filled} absolute z-[1] pr-[2px] left-[10px] top-[14px] text-black transition-all`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}
