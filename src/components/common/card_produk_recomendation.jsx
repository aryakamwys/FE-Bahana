import React from "react";
import imageDummy from "../../assets/images/sayur.jpg";

const CardProductRecomendations = ({ title, isActive }) => {
  const cardClass = isActive
    ? "w-[90px] h-[65px] md:w-[151px] md:h-[122px] lg:w-[350px] lg:h-[265px] scale-100 transition-transform duration-300 ease-in-out"
    : "w-[64px] h-[47px] md:w-[130px] md:h-[100px] lg:w-[200px] lg:h-[180px] scale-75 transition-transform duration-300 ease-in-out";

  return (
    <div className="px-[5px] md:px-[4px] lg:px-3">
      <div className="w-[100px] md:w-[181px] lg:w-[350px] bg-white border border-black rounded-md lg:rounded-xl">
        <div className="flex items-center justify-center">
          <img
            src={imageDummy}
            className={`p-1 lg:p-6 ${cardClass}`}
            alt="sayur"
          />
        </div>
        <div className="flex flex-col p-1 lg:p-6">
          <div className="font-bold text-black font-inter text-start text-[7px] md:text-[10px] lg:text-[20px]">
            {title}
          </div>
          <div className="h-[5px]"></div>
          <div className="flex items-center justify-center bg-greenLight rounded-sm lg:rounded-md w-[36px] h-[14px] md:w-[40px] md:h-[15px] lg:w-[58px] lg:h-[26px]">
            <div className="font-inter font-normal text-primary text-[6px] md:text-[8px] lg:text-[12px]">
              Quality
            </div>
          </div>
          <div className="h-[7px]"></div>
          <div className="text-start font-inter font-normal text-[5px] md:text-[8px] lg:text-[14px]">
            Produk (x) ini memiliki keunggulan dalam (x) menurut (x) pengguna
            dan telah terjual (x) dalam kurung waktu x minggu
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductRecomendations;
