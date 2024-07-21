import React from "react";

const DetailOrder = ({title, value}) => {
  return (
    <div className="flex flex-col items-start py-3">
      <div
        className="font-inter font-semibold text-gray"
        style={{ fontSize: 16 }}
      >
        {title}
      </div>
      <div style={{ height: 10 }}></div>
      <div
        className="font-inter font-semibold text-black"
        style={{ fontSize: 20 }}
      >
        {value}
      </div>
    </div>
  );
};

export default DetailOrder;
