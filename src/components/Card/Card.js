import React from "react";

export default function Card({
  children,
  addClass,
  header,
  headerClass,
  footer,
  footerClass,
}) {
  return (
    <div className="flex shrink">
      <div
        className={`
        flex flex-col justify-between grow-0 bg-white border-b border-gray-300 rounded drop-shadow
        ${addClass}
      `}
      >
        {header ? (
          <div className={`flex font-bold ${headerClass}`}>{header}</div>
        ) : (
          ``
        )}
        {children}
        {footer ? (
          <div className={`flex ${footerClass}`}>{footer}</div>
        ) : (
          ``
        )}
      </div>
    </div>
  );
}
