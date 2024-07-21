import React from "react";

import QRISImage from "../../assets/images/qris_image.png";

const QRISPayment = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col border border-black rounded-xl"
        style={{ width: 369, height: 440 }}
      >
        <div className="flex flex-col px-8 py-5">
          <div
            className=" flex items-start font-inter font-semibold text-black"
            style={{ fontSize: 25 }}
          >
            QRIS
          </div>
          <div className="flex flex-col items-center">
            <div
              className="font-inter font-medium py-6"
              style={{ fontSize: 20 }}
            >
              Nama yang dituju
            </div>
            <img src={QRISImage} alt="qris" />
          </div>
        </div>
        <div>
          <hr className="w-full" />
          <div
            className="flex flex-row justify-between font-inter font-semibold px-3 py-4"
            style={{ fontSize: 20 }}
          >
            <div>Total</div>
            <div>Rp 100.000</div>
          </div>
        </div>
      </div>
      <div style={{ height: 35 }}></div>
      <button
        className="bg-primary w-full rounded-xl "
        style={{ fontSize: 20 }}
      >
        <div className="py-3 font-inter font-semibold text-white" onClick={() => (window.location.href = "/success")}>
          Buat Pesanan
        </div>
      </button>
    </div>
  );
};

export default QRISPayment;
