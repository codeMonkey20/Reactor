import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Divider from "../../system-components/Divider";

export default function PageButton() {
  const [isLoading, setIsLoading] = useState({
    basic: false,
    raised: false,
    stroked: false,
    flat: false,
  });

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-3 items-center">
        <div className="w-20">Basic</div>
        <Button
          type={"basic"}
        >
          Normal
        </Button>
        <Button
          type={"basic"}
          color={"#3f51b5"}
        >
          Color
        </Button>
        <Button
          type={"basic"}
          hoverColor={`#3f51b5`}
          disabled={false}
        >
          Hover
        </Button>
        <Button
          type={"basic"}
          color={"#3f51b5"}
          loadingAnim={isLoading.basic}
          onClick={() => {
            setIsLoading({...isLoading, basic: !isLoading.basic});
          }}
        >
          {isLoading.basic ? "Loading..." : "Load"}
        </Button>
        <Button
          type={"basic"}
          color={"#3f51b5"}
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type={"basic"}
          color={"#3f51b5"}
          uppercase={true}
        >
          uppercase
        </Button>
        <Button
          type={"basic"}
          color={"#3f51b5"}
          bold={true}
          h
        >
          Bold
        </Button>
      </div>

      <Divider />

      <div className="flex gap-3 items-center">
        <div className="w-20">Raised</div>
        <Button
          type={"raised"}
        >
          Normal
        </Button>
        <Button
          type={"raised"}
          color={"#3f51b5"}
        >
          Color
        </Button>
        <Button
          type={"raised"}
          hoverColor={`#3f51b5`}
          disabled={false}
        >
          Hover
        </Button>
        <Button
          type={"raised"}
          color={"#3f51b5"}
          loadingAnim={isLoading.raised}
          onClick={() => {
            setIsLoading({...isLoading, raised: !isLoading.raised});
          }}
        >
          {isLoading.raised ? "Loading..." : "Load"}
        </Button>
        <Button
          type={"raised"}
          color={"#3f51b5"}
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type={"raised"}
          color={"#3f51b5"}
          uppercase={true}
        >
          uppercase
        </Button>
        <Button
          type={"raised"}
          color={"#3f51b5"}
          bold={true}
          h
        >
          Bold
        </Button>
      </div>

      <Divider />

      <div className="flex gap-3 items-center">
        <div className="w-20">Stroked</div>
        <Button
          type={"stroked"}
        >
          Normal
        </Button>
        <Button
          type={"stroked"}
          color={"#3f51b5"}
        >
          Color
        </Button>
        <Button
          type={"stroked"}
          hoverColor={`#3f51b5`}
          disabled={false}
        >
          Hover
        </Button>
        <Button
          type={"stroked"}
          color={"#3f51b5"}
          loadingAnim={isLoading.stroked}
          onClick={() => {
            setIsLoading({...isLoading, stroked: !isLoading.stroked});
          }}
        >
          {isLoading.stroked ? "Loading..." : "Load"}
        </Button>
        <Button
          type={"stroked"}
          color={"#3f51b5"}
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type={"stroked"}
          color={"#3f51b5"}
          uppercase={true}
        >
          uppercase
        </Button>
        <Button
          type={"stroked"}
          color={"#3f51b5"}
          bold={true}
          h
        >
          Bold
        </Button>
      </div>

      <Divider />

      <div className="flex gap-3 items-center">
        <div className="w-20">Flat</div>
        <Button
          type={"flat"}
        >
          Normal
        </Button>
        <Button
          type={"flat"}
          color={"#3f51b5"}
        >
          Color
        </Button>
        <Button
          type={"flat"}
          hoverColor={`#3f51b5`}
          disabled={false}
        >
          Hover
        </Button>
        <Button
          type={"flat"}
          color={"#3f51b5"}
          loadingAnim={isLoading.flat}
          onClick={() => {
            setIsLoading({...isLoading, flat: !isLoading.flat});
          }}
        >
          {isLoading.flat ? "Loading..." : "Load"}
        </Button>
        <Button
          type={"flat"}
          color={"#3f51b5"}
          disabled={true}
        >
          Disabled
        </Button>
        <Button
          type={"flat"}
          color={"#3f51b5"}
          uppercase={true}
        >
          uppercase
        </Button>
        <Button
          type={"flat"}
          color={"#3f51b5"}
          bold={true}
          h
        >
          Bold
        </Button>
      </div>
    </div>
  );
}
