import React from "react";
import HeaderPayment from "../sections/payment/header";
import Divider from "@mui/material/Divider";
import PaymentMethod from "../sections/payment/payment_method";
import ContentPayment from "../sections/payment/content";

const Payment = () => {
  return (
    <div
      className="flex flex-row  min-h-screen bg-neutral"
      style={{ paddingLeft: 310, paddingRight: 315 }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col px-14 pb-20">
          <HeaderPayment />
          <ContentPayment />
        </div>
        <div>
          <hr className="w-full" />
          <div className="flex flex-col py-3 px-7">
            <div className="flex items-start">
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 22 }}
              >
                Rincian Pembayaran
              </div>
            </div>
            <div style={{ height: 10 }}></div>
            <div className="flex flex-row justify-between">
              <div
                className="font-inter font-medium text-gray"
                style={{ fontSize: 20 }}
              >
                Subtotal untuk Produk
              </div>
              <div
                className="font-inter font-medium text-gray"
                style={{ fontSize: 20 }}
              >
                Rp 100.000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div
                className="font-inter font-medium text-gray"
                style={{ fontSize: 20 }}
              >
                Subtotal Pengiriman{" "}
              </div>
              <div
                className="font-inter font-medium text-gray"
                style={{ fontSize: 20 }}
              >
                Rp 10.000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div
                className="font-inter font-medium text-black"
                style={{ fontSize: 20 }}
              >
                Total Pembayaran{" "}
              </div>
              <div
                className="font-inter font-medium text-black"
                style={{ fontSize: 20 }}
              >
                Rp 110.000
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black3 opacity-50"
      />
      <div>
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Payment;
