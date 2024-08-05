import React from "react";

import imageDummy from "../../assets/images/sayur.jpg";

const CardProductRecomendations = ({ title, isActive, cardRef }) => {
  const cardStyle = isActive
    ? {
        transform: "scale(1)",
        zIndex: 120,
        transform: "scale(1)",
        transition: "transform 0.35s ease-in-out",
        filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
      }
    : {
        transform: "scale(0.8)",
        zIndex: 1,
        transition: "transform 0.35s ease-in-out",
      };

  return (
    <div
      className="lg:px-3 md:px-1 w-[95px] h-[156px] md:w-[150px] md:h-[219px] lg:w-[350px] lg:h-[474px] "
      style={cardStyle}
      ref={cardRef}
    >
      <div className="lg:max-w-sm w-auto bg-white border border-black rounded-md p-1  md:rounded-xl overflow-hidden  ">
        <div className="flex items-center justify-center">
          <img
            src={imageDummy}
            className="lg:p-6  md:p-0 md:object-contain "
            alt="sayur"
          />
        </div>
        <div className="flex flex-col lg:p-6 md:p-3 ">
          <div className="font-bold text-black font-inter text-start text-[7px] md:text-[12px] lg:text-[20px] ">
            {title}
          </div>
          <div style={{ height: 5 }}></div>
          <div className="flex items-center  justify-center bg-greenLight rounded-md md:w-[58px] md:h-[26px] w-[40px] h-[16px] ">
            <div className="font-inter font-normal text-primary  md:text-[16px] text-[8px] ">
              Quality
            </div>
          </div>
          <div style={{ height: 7 }}></div>
          <div className="text-start font-inter font-normal lg:text-[14px] text-[5px]  md:text-[11px] ">
            Produk (x) ini memiliki keunggulan dalam (x) menurut (x) pengguna
            dan telah terjual (x) dalam kurung waktu x minggu
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductRecomendations;
