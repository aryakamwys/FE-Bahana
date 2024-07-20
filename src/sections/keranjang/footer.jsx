import React from "react";

const FooterCart = () => {
  return (
    <div
      className="border-t-2 border-gray border-opacity-50"
      style={{ height: 189 }}
    >
      <div className="flex flex-row items-center justify-around pl-20 pr-20 pt-12 pb-12">
        <div
          className="font-inter font-normal text-black"
          style={{ fontSize: 40 }}
        >
          1 produk : <span className="font-semibold">Rp 2.599.000</span>
        </div>
        <button className="bg-primary rounded-full">
          <div
            className="font-semibold text-white font-inter pt-5 pb-5"
            style={{ fontSize: 40, paddingLeft: 200, paddingRight: 200 }}
          >
            Bayar
          </div>
        </button>
      </div>
    </div>
  );
};

export default FooterCart;
