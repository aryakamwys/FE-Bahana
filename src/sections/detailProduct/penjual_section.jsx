import React from "react";

import ProfilePenjual from "../../assets/images/profile_penjual.png";
import ChatIcon from "../../assets/images/chat.svg";

const PenjualSection = () => {
  return (
    <div>
      <div style={{ height: 52 }}></div>
      <hr className="border-gray border-opacity-50" />
      <div className="h-9"></div>
      <div className="flex flex-row row-auto items-center justify-between">
        <div className="flex flex-row row-auto">
          <img
            src={ProfilePenjual}
            style={{ width: 100, height: 100 }}
            alt="profile_penjual"
          />
          <div className="flex flex-col items-start pl-8">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 32 }}
            >
              Nama penjualnya yanto
            </div>
            <div
              className="font-inter font-semibold text-gray text-opacity-50"
              style={{ fontSize: 25 }}
            >
              Aktif 10 Menit yang lalu
            </div>
          </div>
        </div>
        <button
          className="bg-primary rounded-xl"
          style={{ height: 64 }}
          onClick={() => (window.location.href = "/chat")}
        >
          <div className="flex flex-row row-auto items-center justify-center pl-10 pr-10">
            <img src={ChatIcon} alt="icon_chat" />
            <div style={{ width: 10 }}></div>
            <div className="text-h5 font-medium font-inter text-white ">
              Chat Penjual
            </div>
          </div>
        </button>
      </div>
      <div className="h-9"></div>
      <hr className="border-gray border-opacity-50 " />
      <div style={{ height: 52 }}></div>
    </div>
  );
};

export default PenjualSection;
