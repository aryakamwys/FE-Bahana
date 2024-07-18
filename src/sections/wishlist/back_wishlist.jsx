import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const BackWishlist = () => {
  return (
    <div>
      <div style={{ height: 57 }}></div>
      <div className="flex flex-row row-auto items-center">
        <div
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
        >
          <img src={ArrowBack} alt="arrow back" />
        </div>
        <div style={{width:20}}></div>
        <div className="font-inter font-semibold text-black" style={{fontSize:45}}>
          Wishlist
        </div>
      </div>
    </div>
  );
};

export default BackWishlist;
