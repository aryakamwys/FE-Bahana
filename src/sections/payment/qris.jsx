import React from "react";

import QRISImage from "../../assets/images/qris_image.png";

const QRISPayment = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col border border-black rounded-xl w-[240px] h-[303px] md:w-[369px] md:h-[440px] ">
        <div className="flex flex-col px-8 py-5">
          <div className=" flex items-start font-inter text-[20px] md:text-[25px] font-semibold text-black">
            QRIS
          </div>
          <div className="flex flex-col items-center">
            <div className="font-inter text-[14px] md:text-[20px] font-medium py-[16px] md:py-6">
              Nama yang dituju
            </div>
            <img
              src={QRISImage}
              className="md:w-[224px] md:h-[217px] w-[150px] h-[143px] "
              alt="qris"
            />
          </div>
        </div>
        <div>
          <hr className="w-full" />
          <div className="flex flex-row justify-between font-inter text-[12px] md:text-[20px] font-semibold px-3 py-[10px] md:py-4">
            <div>Total</div>
            <div>Rp 100.000</div>
          </div>
        </div>
      </div>
      <div className="lg:h-[35px] h-[160px] "></div>
      <div className="lg:hidden flex flex-col md:border-t-[1px] border-gray w-[350px] md:w-full py-3 lg:px-7">
        <div className="flex items-start">
          <div className="font-inter font-semibold text-black text-[16px] md:text-[22px]">
            Rincian Pembayaran
          </div>
        </div>
        <div style={{ height: 10 }}></div>
        <div className="flex flex-row justify-between">
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Subtotal untuk Produk
          </div>
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Rp 100.000
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Subtotal Pengiriman{" "}
          </div>
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Rp 10.000
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="font-inter font-medium text-black text-[13px] md:text-[20px]">
            Total Pembayaran{" "}
          </div>
          <div className="font-inter font-medium text-black text-[13px] md:text-[20px]">
            Rp 110.000
          </div>
        </div>
      </div>
      <button
        className="bg-primary w-[221px] md:w-full rounded-xl text-[10px] md:text-[20px]"
      >
        <div
          className="py-3 font-inter font-semibold text-white"
          onClick={() => (window.location.href = "/success")}
        >
          Buat Pesanan
        </div>
      </button>
    </div>
  );
};

export default QRISPayment;
