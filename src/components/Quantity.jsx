import { useState } from "react";

export default function Quantity(props) {
  const positionLeft = props.count > 9 ? "left-1" : "left-3";

  return (
    <>
      <div className="w-12 h-12 bg-secondary relative rounded-lg">
        <h1 className={`text-2xl absolute ${positionLeft} top-2`}>
          {props.count}
        </h1>
        <h1
          onClick={props.increment}
          className="opacity-50 hover:opacity-100 select-none cursor-pointer text-lg absolute right-1"
        >
          +
        </h1>
        <h1
          onClick={props.decrement}
          className="opacity-50 hover:opacity-100 select-none cursor-pointer text-2xl absolute right-1 top-4"
        >
          -
        </h1>
      </div>
    </>
  );
}
