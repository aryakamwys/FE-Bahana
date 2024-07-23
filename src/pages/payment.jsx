import React from "react";
import HeaderPayment from "../sections/payment/header";
import Divider from "@mui/material/Divider";
import PaymentMethod from "../sections/payment/payment_method";
import ContentPayment from "../sections/payment/content";

const Payment = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:min-h-screen bg-neutral max-w-screen-sm lg:w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <div className="flex flex-col px-5 lg:px=0">
        <div className="flex flex-col lg:px-14 lg:pb-20">
          <HeaderPayment />
          <ContentPayment />
        </div>
        <div>
          <hr className="hidden lg:flex w-full" />
          <div className="h-[301px] lg:h-0 "></div>
          <div className="flex flex-col w-[350px] lg:w-full py-3 lg:px-7">
            <div className="flex items-start">
              <div className="font-inter font-semibold text-black text-[16px] lg:text-[22px]">
                Rincian Pembayaran
              </div>
            </div>
            <div style={{ height: 10 }}></div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Subtotal untuk Produk
              </div>
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Rp 100.000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Subtotal Pengiriman{" "}
              </div>
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Rp 10.000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-black text-[13px] lg:text-[20px]">
                Total Pembayaran{" "}
              </div>
              <div className="font-inter font-medium text-black text-[13px] lg:text-[20px]">
                Rp 110.000
              </div>
            </div>
          </div>
          <div className="lg:hidden w-[350px] flex justify-center py-[10px]">
            <button className="flex items-center justify-center rounded-[7px] w-[271px] h-[32px] bg-primary">
              <div className="font-inter font-semibold text-white text-[10px]">
                Selanjutnya
              </div>
            </button>
          </div>
        </div>
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:flex bg-black3 opacity-50"
      />
      <div className="hidden lg:flex">
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Payment;
