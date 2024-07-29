import React from "react";

import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div className="h-[20px] lg:h-[50px] "></div>
      <div className="flex row-auto w-full justify-between">
        <div className="flex flex-col">
          <div className="lg:w-[610px] lg:h-[255px] md:w-[348px] md:h-[156px] w-[164px] h-[78px] font-inter text-black font-bold text-start text-[22px] md:text-[40px] lg:text-[70px] lg:leading-normal ">
            The future of agriculture is now
          </div>
          <div className="h-[35px] lg:h-[65px]"></div>
          <div className="flex row-auto items-start">
            <button
              type="button"
              onClick={() => (window.location.href = "/aboutus")}
              class="w-[64px] h-[26px] md:w-[110px] md:h-[39px] lg:w-[168px] lg:h-[53px] rounded-[3px] md:rounded-[7px] lg:rounded-[10px] text-[10px] lg:text-[20px] font-inter text-primary hover:text-white border border-primary border-opacity-80 bg-opacity-80 hover:bg-primary focus:ring-2 focus:outline-none focus:ring-primary focus:ring-opacity-30 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              About Us
            </button>
          </div>
        </div>
        <img
          src={GlobeImage}
          className="lg:w-[388px] lg:h-[296px] md:w-[234px] md:h-[225px] w-[165px] h-[144px] "
          alt="Globe"
        />
      </div>
    </div>
  );
};

export default HeaderHome;
