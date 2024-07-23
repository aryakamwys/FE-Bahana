import React from "react";

import ProfilePenjual from "../../assets/images/profile_penjual.png";
import ChatIcon from "../../assets/images/chat.svg";

const PenjualSection = () => {
  return (
    <div>
      <div style={{ height: 52 }}></div>
      <div className="flex flex-row row-auto w-[350px] border rounded-md lg:w-full lg:border-t-[1px] lg:border-b-[1px] py-[27px] border-gray border-opacity-50 items-center justify-between">
        <div className="flex flex-row row-auto">
          <img
            src={ProfilePenjual}
            className="w-[35px] h-[35px] lg:w-[100px] lg:h-[100px] "
            alt="profile_penjual"
          />
          <div className="flex flex-col items-start pl-8">
            <div
              className="font-inter font-semibold text-start text-black text-[12px] lg:text-[32px]"
            >
              Nama penjualnya yanto
            </div>
            <div
              className="font-inter font-semibold text-gray text-opacity-50 text-[10px] lg:text-[25px]"
            >
              Aktif 10 Menit yang lalu
            </div>
          </div>
        </div>
        <button
          className="bg-primary rounded-sm lg:rounded-xl w-[80px] h-[26px] lg:w-[240px] lg:h-[64px] "
          onClick={() => (window.location.href = "/chat")}
        >
          <div className="flex flex-row row-auto items-center justify-center">
            <img src={ChatIcon} className="w-[10px] h-[10px] lg:w-[24px] lg:h-[24px] " alt="icon_chat" />
            <div style={{ width: 10 }}></div>
            <div className="text-[8px] lg:text-[20px] font-medium font-inter text-white ">
              Chat Penjual
            </div>
          </div>
        </button>
      </div>
      <div style={{ height: 52 }}></div>
    </div>
  );
};

export default PenjualSection;
