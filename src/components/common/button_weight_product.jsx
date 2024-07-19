import React from "react";

const ButtonWeightProduct = ({ weight }) => {
  return (
    <div className="px-2">
      <div style={{ height: 15 }}></div>
      <div className="flex items-center justify-center border border-black bg-white font-medium font-inter text-black hover:bg-black hover:text-white rounded-xl px-4 py-2">
        {weight} kg
      </div>
    </div>
  );
};

export default ButtonWeightProduct;
