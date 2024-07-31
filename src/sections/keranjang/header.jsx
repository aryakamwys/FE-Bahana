import React from "react";
import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderCart = ({ item, onRemoveItem, isAnyChecked }) => {
  return (
    <div>
      <div className="h-[20px] md:h-[50px] lg:h-[50px] "></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row row-auto items-center ">
          <button
            className="flex items-center justify-center border border-black rounded-full w-6 h-6 lg:w-10 lg:h-10"
            onClick={() => window.history.back()}
          >
            <img
              src={ArrowBack}
              className="w-3 h-3 lg:w-4 lg:h-4"
              alt="arrow back"
            />
          </button>
          <div className="w-2 lg:w-5"></div>
          <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[40px]">
            Keranjang Belanja
          </div>
        </div>
        {isAnyChecked && (
          <div className="flex items-center pr-5">
            <button
              onClick={() => onRemoveItem(item.produkID)}
              className="block text-white lg:w-[106px] lg:h-[44px] bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Hapus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderCart;
