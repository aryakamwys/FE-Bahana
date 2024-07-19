import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderDetailProduct = () => {
  return (
    <div style={{ width: 394 }}>
      <div style={{ height: 50 }}></div>
      <div className="flex flex-row row-auto items-center justify-between">
        <button
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} alt="arrow back" />
        </button>
        <div
          className="font-inter font-semibold text-black"
          style={{ fontSize: 45 }}
        >
          Detail Product
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailProduct;
