import React from "react";

import ArrowBackIcon from "../../assets/images/arrow-back.svg";

const ArrowBack = () => {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <button
          className="flex items-center justify-center border border-black rounded-full w-6 h-6 lg:w-10 lg:h-10"
          onClick={() => window.history.back()}
        >
          <img src={ArrowBackIcon} className="w-3 h-3 lg:w-4 lg:h-4"  alt="arrow back" />
        </button>
    </div>
  );
};

export default ArrowBack;
