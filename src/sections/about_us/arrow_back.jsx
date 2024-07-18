import React from "react";

import ArrowIcon from "../../assets/images/arrow-back.svg";

const ArrowBack = () => {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <button
        className="flex items-center justify-center border border-black rounded-full"
        style={{ width: 40, height: 40 }}
        onClick={() => window.history.back()}
      >
        <img src={ArrowIcon} alt="arrow back" />
      </button>
    </div>
  );
};

export default ArrowBack;
