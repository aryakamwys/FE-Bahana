import React, { useState } from "react";

const StatusPrice = () => {
  const [worthBuying, setWorthBuying] = useState(true);

  const handleClick = () => {
    setWorthBuying(!worthBuying);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center rounded-full font-inter text-[10px] lg:text-[16px] font-medium w-[96px] h-[28px] lg:w-[155px] lg:h-[54px] ${
          worthBuying? "bg-greenLight text-primary" : "bg-danger bg-opacity-20 text-danger"
        }`}
        onClick={handleClick}
      >
        {worthBuying? "Worth to buy" : "Not worth to buy"}
      </div>
    </div>
  );
};

export default StatusPrice;