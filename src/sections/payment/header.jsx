import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderPayment = () => {
  return (
    <div>
      <div className="h-[20px] lg:h-[63px] "></div>
      <div className="flex flex-row items-center">
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
          <div
            className="font-inter text-[16px] lg:text-[25px] font-semibold text-black "
          >
            Product Information & Review
          </div>
          <div
            className="hidden lg:flex font-inter font-medium text-black lg:text-[15px] text-start"
          >
            By placing your order, you agree to TaniDirect in’s Privacy and
            Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPayment;
