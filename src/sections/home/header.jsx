import React from "react";

import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div className="flex row-auto justify-evenly">
        <div
          className="font-inter text-black font-bold text-start"
          style={{ width: 610, height: 255, fontSize: 70 }}
        >
          The future of agriculture is now
        </div>

        <img src={GlobeImage} alt="Globe" />
      </div>
      <div style={{height:35}}></div>
      <div className="flex row-auto items-start" style={{paddingLeft:310}}>
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
