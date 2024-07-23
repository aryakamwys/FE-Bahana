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
    <div className="py-[10px] lg:py-[15px] ">
      <div
        className="flex flex-row row-auto items-center font-medium font-inter text-[16px] lg:text-[25px] text-black w-[66px] h-[26px] lg:w-[106px] lg:h-[44px]"
      >
        <button
          className=" border border-gray border-opacity-50 rounded-l-[5px] lg:rounded-l-xl lg:px-[10px] py-[4] px-[5px] lg:py-[5px]"
          onClick={handleDecrement}
        >
          -
        </button>
        <div
          className=" border border-gray border-opacity-50 lg:px-[10px] py-[4] px-[7px] lg:py-[5px]"
        >
          {count}
        </div>
        <button
          className=" border border-gray border-opacity-50 rounded-r-[5px] lg:rounded-r-xl lg:px-[10px] px-[5px] py-[4] lg:py-[5px]"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlusMinusProduct;
