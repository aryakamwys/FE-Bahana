import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderDetailBlog = () => {
  return (
    <div>
      <div className="h-[20px] md:h-[50px] lg:h-[50px] "></div>
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
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[32px]">
            Blog Harga Pasar
          </div>
          <div className="font-inter font-medium text-gray text-[8px] md:text-[10px] lg:text-[15px]">
            24 June 2024 ・6 min
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailBlog;
