import React from "react";

import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div style={{ height: 35 }}></div>
      <div className="flex row-auto justify-between">
        <div
          className="font-inter text-black font-bold text-start lg:text-7xl lg:leading-normal md:text-5xl md:leading-normal max-w-xl h-64"
        >
          The future of agriculture is now
        </div>

        <img src={GlobeImage} className="md:max-w-md lg:max-w-lg h-auto object-cover" alt="Globe" />
      </div>
      <div style={{ height: 35 }}></div>
      <div className="flex row-auto items-start">
        <button
          className="text-primary text-h5 font-inter border border-primary cursor-pointer hover:bg-primary hover:text-white"
          style={{ borderRadius: 10, width: 168, height: 53 }}
          onClick={() => (window.location.href = "/aboutus")}
        >
          About us
        </button>
      </div>
    </div>
  );
};

export default HeaderHome;
