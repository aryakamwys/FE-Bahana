import React from "react";

import BCAIcon from "../../assets/images/bca2.png";

const PembayaranPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ paddingLeft: 310, paddingRight: 315 }}
    >
      <div style={{ height: 69 }}></div>
      <div
        className="font-inter font-semibold text-black"
        style={{ fontSize: 35 }}
      >
        Pembayaran
      </div>
      <div style={{ height: 67 }}></div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col">
          <div
            className="flex flex-row justify-between font-inter font-medium text-black"
            style={{ fontSize: 30 }}
          >
            <div>Total Pembayaran</div>
            <div>Rp 100.000</div>
          </div>
          <div style={{ height: 20 }}></div>
          <div
            className="flex flex-row justify-between font-inter font-medium text-black"
            style={{ fontSize: 30 }}
          >
            <div>Bayar Dalam</div>
            <div>23 jam 50 menit 24 detik</div>
          </div>
        </div>
        <div style={{ height: 74 }}></div>
        <div className="border border-black rounded-xl">
          <div className="flex flex-row items-center px-5 py-4">
            <img src={BCAIcon} className="w-16 h-16" alt="bca" />
            <div style={{ width: 25 }}></div>
            <div className="flex flex-col">
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 30 }}
              >
                Bank BCA
              </div>
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 25 }}
              >
                No Rek/Virtual Account
              </div>
              <div
                className="font-inter font-medium text-red-500"
                style={{ fontSize: 35 }}
              >
                101 0812 1292 9212
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
      <div className="px-64 flex justify-between mt-auto mb-10">
        <button
          className="bg-primary w-full rounded-xl"
          style={{ fontSize: 20 }}
          onClick={() => (window.location.href = "/success")}
        >
          <div className="py-3 font-inter font-semibold text-white">
            Buat Pesanan
          </div>
        </button>
      </div>
    </div>
  );
};

export default PembayaranPage;
