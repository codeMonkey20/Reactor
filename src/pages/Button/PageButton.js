import React from "react";
import Button from "../../components/Button/Button";

export default function PageButton() {
  return (
    <Button
      type={"basic"}
      color={"#3f51b5"}
      uppercase={false}
      bold={false}
      hoverColor={`#ff4081`}
      disabled={true}
    >
      Disabled
    </Button>
  );
}
