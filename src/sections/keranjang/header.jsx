import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderCart = () => {
  return (
    <div>
      <div style={{ height: 40 }}></div>
      <div className="flex flex-row row-auto items-center">
        <button
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} alt="arrow back" />
        </button>
        <div style={{ width: 20 }}></div>
        <div
          className="font-inter font-semibold text-black"
          style={{ fontSize: 40 }}
        >
          Keranjang Belanja Anda
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;