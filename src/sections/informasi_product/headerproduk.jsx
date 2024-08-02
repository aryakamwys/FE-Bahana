import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderProduk = () => {
  return (
    <div>
      <div style={{ height: 40 }}></div>
      <div className="flex flex-row row-auto items-center">
        <button
          className="flex items-center justify-center  border-black rounded-full border-[1.5px] md:w-[40px] md:h-[40px] w-[25px] h-[25px] mr-2 lg:mr-4 lg:w-[40px] lg:h-[40px] "
          onClick={() => window.history.back()}
        >
          <img
            src={ArrowBack}
            alt="arrow back"
            className="w-[20px] h-[20px] "
          />
        </button>

        <div className="font-inter font-semibold text-black lg:text-[40px] text-[16px]  md:text-[25px] ">
          Information of Product
        </div>
      </div>
    </div>
  );
};

export default HeaderProduk;
