import React, { useState } from "react";

const PlusMinusProduct = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="px-2 py-4">
      <div
        className="flex flex-row row-auto font-medium font-inter text-black"
        style={{ fontSize: 25 }}
      >
        <button
          className=" border border-gray border-opacity-50 rounded-l-xl"
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          onClick={handleDecrement}
        >
          -
        </button>
        <div
          className=" border border-gray border-opacity-50"
          style={{
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {count}
        </div>
        <button
          className=" border border-gray border-opacity-50 rounded-r-xl"
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlusMinusProduct;
