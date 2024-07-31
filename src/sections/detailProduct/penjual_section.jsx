import React from "react";

import ProfilePenjual from "../../assets/images/profile_penjual.png";
import ChatIcon from "../../assets/images/chat.svg";

const PenjualSection = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="hidden lg:block" style={{ height: 52 }}></div>
      <div className="flex flex-row row-auto w-[350px]  md:w-full   md:border-t-[1px] px-[10px] md:border-b-[1px] py-[20px] border-gray border-opacity-50 items-center justify-between md:mt-7 ">
        <div className="flex flex-row row-auto">
          <img
            src={ProfilePenjual}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]  lg:w-[100px] lg:h-[100px] "
            alt="profile_penjual"
          />
          <div className="flex flex-col items-start pl-8">
            <div className="font-inter font-semibold text-start text-black text-[12px]  md:text-[18px]  lg:text-[32px]">
              Nama penjualnya yanto
            </div>
            <div className="font-inter font-semibold text-gray text-opacity-50 md:text-[12px] text-[10px] lg:text-[25px]">
=======
      <div className="h-[20px]  md:h-[52px]"></div>
      <div className="flex flex-row row-auto w-[350px] md:w-full border-t-[1px] border-b-[1px] md:py-[20px] py-[27px] border-gray border-opacity-50 items-center justify-between">
        <div className="flex flex-row row-auto">
          <img
            src={ProfilePenjual}
            className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[100px] lg:h-[100px] "
            alt="profile_penjual"
          />
          <div className="flex flex-col items-start pl-8">
            <div
              className="font-inter font-semibold text-start text-black text-[12px] md:text-[16px] lg:text-[32px]"
            >
              Nama penjualnya yanto
            </div>
            <div
              className="font-inter font-semibold text-gray text-opacity-50 text-[10px] md:text-[12px] lg:text-[25px]"
            >
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
              Aktif 10 Menit yang lalu
            </div>
          </div>
        </div>
        <button
<<<<<<< HEAD
          className="bg-primary rounded-sm lg:rounded-xl md:rounded-md w-[80px] h-[26px] md:w-[120px] md:h-[40px]  lg:w-[240px] lg:h-[64px] "
          onClick={() => (window.location.href = "/chat")}
        >
          <div className="flex flex-row row-auto items-center justify-center">
            <img
              src={ChatIcon}
              className="w-[10px] h-[10px] lg:w-[24px] md:w-[14px] md:h-[14px]  lg:h-[24px] "
              alt="icon_chat"
            />
            <div style={{ width: 10 }}></div>
            <div className="text-[8px] lg:text-[20px]  md:text-[0.8rem] font-medium font-inter text-white ">
=======
          className="bg-primary rounded-md lg:rounded-xl w-[80px] h-[26px] md:w-[100px] md:h-[30px] lg:w-[240px] lg:h-[64px] "
          onClick={() => (window.location.href = "/chat")}
        >
          <div className="flex flex-row row-auto items-center justify-center">
            <img src={ChatIcon} className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] lg:w-[24px] lg:h-[24px] " alt="icon_chat" />
            <div style={{ width: 10 }}></div>
            <div className="text-[8px] md:text-[10px] lg:text-[20px] font-medium font-inter text-white ">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
              Chat Penjual
            </div>
          </div>
        </button>
      </div>
      <div className="lg:h-[52px] "></div>
    </div>
  );
};

export default PenjualSection;
