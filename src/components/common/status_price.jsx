import React, { useState } from "react";

const StatusPrice = () => {
  const [worthBuying, setWorthBuying] = useState(true);

  const handleClick = () => {
    setWorthBuying(!worthBuying);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center rounded-full font-inter font-medium p-4 ${
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