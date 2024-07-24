import React from "react";

const ButtonWeightProduct = ({ weight }) => {
  return (
    <div className="pr-2">
      <div style={{ height: 15 }}></div>
      <div className="w-[45px] h-[24px] lg:w-[81px] lg:h-[44px] flex items-center justify-center border border-black bg-white font-medium font-inter text-[12px] lg:text-[20px] text-black hover:bg-black hover:text-white rounded-md lg:rounded-[10px]">
        {weight} kg
      </div>
    </div>
  );
};

export default ButtonWeightProduct;
