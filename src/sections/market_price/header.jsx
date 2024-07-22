import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderMarketPrice = () => {
  return (
    <div>
      <div style={{ height: 60 }}></div>
      <div className="flex flex-row row-auto items-center">
        <button
          className="flex items-center justify-center border border-black rounded-full w-6 h-6 lg:w-10 lg:h-10"
          onClick={() => window.history.back()}
        >
          <img
            src={ArrowBack}
            className="w-3 h-3 lg:w-4 lg:h-4"
            alt="arrow back"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div className="hidden lg:flex flex-col items-start">
          <div
            className="font-inter font-semibold text-black"
            style={{ fontSize: 25 }}
          >
            Blog Harga Pasar
          </div>
          <div
            className="font-inter font-medium text-black"
            style={{ fontSize: 15 }}
          >
            Update-an harga pasar dari hasil bumi
          </div>
        </div>
        <div
          className="lg:hidden font-inter font-semibold text-black text-[16px] lg:text-[25px]"
        >
          Blog Harga Pasar
        </div>
      </div>
    </div>
  );
};

export default HeaderMarketPrice;
