import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderPayment = () => {
  return (
    <div>
      <div style={{height:63}}></div>
      <div className="flex flex-row items-center">
        <button
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} alt="arrow back" />
        </button>
        <div style={{ width: 20 }}></div>
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-semibold text-black"
            style={{ fontSize: 25 }}
          >
            Product Information & Review
          </div>
          <div
            className="font-inter font-medium text-black"
            style={{ fontSize: 15 }}
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
