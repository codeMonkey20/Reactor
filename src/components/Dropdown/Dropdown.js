import React, { useState } from "react";
import "./Dropdown.css";

const bgColor = "#242526";
const bgAccent = "#484a4d";
const txtColor = "#dadce1";
const navSize = "60px";
const navSizeInt = 60;
const borderColor = "border-[#474a4d]";
const borderRadius = "rounded-[8px]";
const speed = "500ms";

const navItemWidth = ``;
const iconButtonSize = ``;

export default function Dropdown() {
  return (
    <NavBar>
      <NavItem icon={<i class="fa-solid fa-plus text-white"></i>} />
      <NavItem
        icon={<i className="fa-brands fa-facebook-messenger text-white"></i>}
      />
      <NavItem icon={<i class="fa-solid fa-bell text-white"></i>}>
        <DropdownMenu />
      </NavItem>

      <NavItem icon={<i class="fa-solid fa-caret-down text-white"></i>}>
        <DropdownMenu />
      </NavItem>
    </NavBar>
  );
}

function DropdownMenu() {
  function DropdownItem({ children, leftIcon, rightIcon }) {
    return (
      <a
        href="#"
        className={`h-[50px] flex items-center justify-between ${borderRadius} p-2 hover:bg-[#525357]`}
        style={{ transition: `background ${speed}` }}
      >
        <div className="flex items-center gap-2">
          <span
            className={`
              w-[${iconButtonSize}]
              h-[${iconButtonSize}]
              bg-[${bgAccent}]
              rounded-[50%] p-[5px] m-[2px] flex items-center justify-center hover:brightness-125
            `}
          >
            {leftIcon}
          </span>
          {children}
        </div>
        <span className={``}>{rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className={`
        bg-[${bgColor}]
        border-[${borderColor}]
        ${borderRadius}
        absolute w-[300px] translate-x-[-45%] translate-y-[72%] border p-4 overflow-hidden flex flex-col gap-1
      `}
    >
      <DropdownItem
        leftIcon={<i class="fa-solid fa-gear text-white"></i>}
        rightIcon={<i class="fa-solid fa-chevron-right text-white"></i>}
      >
        <div className="text-white">Profile</div>
      </DropdownItem>
      <DropdownItem
        leftIcon={<i class="fa-solid fa-gear text-white"></i>}
        rightIcon={<i class="fa-solid fa-chevron-right text-white"></i>}
      >
        <div className="text-white">Oh Shet</div>
      </DropdownItem>
    </div>
  );
}

function NavBar({ children }) {
  return (
    <nav
      className={`h-[${navSize}] bg-[${bgColor}] pt-0 pr-[1rem] border-b ${borderColor}`}
    >
      <ul className="w-full h-full flex justify-end">{children}</ul>
    </nav>
  );
}

function NavItem({ children, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`w-[${navSizeInt * 0.8}px] flex items-center justify-center`}
    >
      <a
        href="#"
        className={`
          w-[${navSizeInt * 0.5}px]
          h-[${navSizeInt * 0.5}px]
          bg-[${bgAccent}]
          rounded-[50%] p-[5px] m-[2px] flex items-center justify-center hover:brightness-125
        `}
        style={{ transition: "filter 300ms" }}
        onClick={() => setOpen(!open)}
      >
        {icon}
      </a>
      {open && children}
    </li>
  );
}
