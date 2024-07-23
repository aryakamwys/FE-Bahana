import React from "react";

import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div className="" style={{ height: 35 }}></div>
      <div className="flex justify-between items-center md:gap-3 lg:gap-0">
        <div className="font-inter text-black font-bold text-start  md:mr-3 lg:mr-0  lg:text-7xl lg:leading-normal md:text-[3rem] md:leading-normal max-w-xl">
          The future of agriculture is now
        </div>

        <img
          src={GlobeImage}
          className="md:max-w-[250px] lg:max-w-lg h-auto lg:object-cover  object-contain  "
          alt="Globe"
        />
      </div>
      <div style={{ height: 35 }}></div>
      <div className="flex row-auto items-start">
        <button
          className="text-primary text-h5 font-inter border border-primary cursor-pointer lg:w-[168px] md:w-[120px]  md:h-[43px] lg:h-[53px] hover:bg-primary hover:text-white"
          style={{ borderRadius: 10 }}
          onClick={() => (window.location.href = "/aboutus")}
        >
          About us
        </button>
      </div>
    </div>
  );
};

export default HeaderHome;
