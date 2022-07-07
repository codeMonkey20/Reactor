import React, { useState } from "react";
import Box from "./system-components/Box";
import PageButton from "./pages/Button/PageButton";
import PageCard from "./pages/Card/PageCard";
import PageMenubar from "./pages/Menubar/PageMenubar";

export default function Main() {
  const navData = [
    {
      text: "Button",
      page: <PageButton />
    },
    {
      text: "Card",
      page: <PageCard />
    },
    {
      text: "Menubar",
      page: <PageMenubar />
    },
  ];

  const [selectedComponent, setSelectedComponent] = useState(navData[0].text);
  const [pageRender, setPageRender] = useState(navData[0].page);

  return (
    <>
      <div className="p-7 bg-[#3f51b5] text-white font-normal">
        {selectedComponent}
      </div>
      <div className="flex">
        <div className="w-72">
          {navData.map((component) => {
            return (
              <Box
                onClick={() => {
                  setSelectedComponent(component.text);
                  setPageRender(component.page);
                }}
                isSelected={selectedComponent === component.text}
              >
                {component.text}
              </Box>
            );
          })}
        </div>
        <div className="p-2 w-full">{pageRender}</div>
      </div>
    </>
  );
}
