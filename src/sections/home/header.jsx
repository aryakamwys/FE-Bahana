import React from "react";

import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div style={{ height: 35 }}></div>
      <div className="flex row-auto justify-between">
        <div
          className="lg:w-[610px] lg:h-[255px] w-[164px] h-[78px] font-inter text-black font-bold text-start text-[22px] lg:text-[70px] lg:leading-normal "
        >
          The future of agriculture is now
        </div>

        <img src={GlobeImage} className="lg:w-[388px] lg:h-[296px] w-[165px] h-[144px] " alt="Globe" />
      </div>
      <div style={{ height: 35 }}></div>
      <div className="flex row-auto items-start">
        <button
          className="w-[64px] h-[26px] lg:w-[168px] lg:h-[53px] rounded-[3px] lg:rounded-[10px] text-primary text-[10px] lg:text-[20px] font-inter border border-primary cursor-pointer hover:bg-primary hover:text-white"
          onClick={() => (window.location.href = "/aboutus")}
        >
          About us
        </button>
      </div>
    </div>
  );
};

export default HeaderHome;
