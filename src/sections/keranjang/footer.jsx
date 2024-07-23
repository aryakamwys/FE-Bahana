import React from "react";

const FooterCart = () => {
  return (
    <div className="border-t-2 border-gray border-opacity-50 h-[189px]  ">
      <div className="flex flex-row items-center justify-around lg:px-20 lg:py-12  py-6 px-0 ">
        <div className="font-inter font-normal text-black  lg:text-[40px] text-[16px] md:text-[22px] ">
          1 produk : <span className="font-semibold">Rp 2.599.000</span>
        </div>
        <button className="bg-primary rounded-full">
          <div className="font-semibold text-white font-inter md:text-[20px] text-[15px] lg:px-[200px] lg:text-[40px]  md:px-[60px] md:py-[14px] px-[20px] py-[5px] ">
            Bayar
          </div>
        </button>
      </div>
    </div>
  );
};

export default FooterCart;
