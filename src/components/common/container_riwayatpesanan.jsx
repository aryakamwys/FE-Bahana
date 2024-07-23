import React from "react";

import CarrotImage from "../../assets/images/carrot.jpg";
import TruckIcon from "../../assets/images/truck.svg";
import ArrowNext from "../../assets/images/arrow_next.svg";

const ContainerRiwayatPesanan = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full py-3 lg:py-6">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img
            src={CarrotImage}
            className="w-[88px] h-[71px] lg:w-[235px] lg:h-[186px] "
            alt="carrot"
          />
          <div className="flex flex-col items-start">
            <div
              className="font-inter font-semibold text-black text-[14px] lg:text-[30px] "
            >
              Nama product loren ipsum ddee
            </div>
            <div className="h-2"></div>
            <div
              className="text-start font-inter font-medium text-black text-[10px] lg:text-[17px] "
            >
              Lorem ipsum dolor sit amet consectetur. In in pellentesque
              sollicitudin aliquam tincidunt fermentum pharetra.
            </div>
            <div className="py-3">
              <div
                className="font-inter font-medium text-black pt-1 pb-1 pl-[10px] pr-[10px] lg:pl-4 lg:pr-4 border border-black rounded-md lg:rounded-xl text-[10px] lg:text-[20px] "
              >
                5 kg
              </div>
            </div>
            <div
              className="font-inter font-bold text-primary text-[12px] lg:text-[25px]"
            >
              Total Pesanan: Rp 100.000
            </div>
          </div>
          <div className="flex items-end lg:py-6">
            <div className="flex items-center justify-center pt-[5px] pb-[5px] pl-[13px] pr-[13px] lg:pt-4 lg:pb-4 lg:pl-12 lg:pr-12 border border-black rounded-md lg:rounded-xl hover:bg-primary hover:text-white w-[50px] h-[24px] lg:w-36 lg:h-14">
              <div className="font-inter font-medium text-black text-[12px] lg:text-[20px]">
                Nilai
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between border-b-[1px] lg:border-b-2 border-gray border-opacity-20 py-2 lg:py-5">
          <div className="flex flex-row items-center">
            <div>
              <img src={TruckIcon} className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" alt="truck" />
            </div>
            <div className="w-[6px]"></div>
            <div
              className="font-inter font-normal text-black text-[10px] lg:text-[22px]"
            >
              Pesanan telah sampai diterima oleh yang bersangkutan
            </div>
          </div>
          <button onClick={() => (window.location.href = "/trackingorder")}>
            <img src={ArrowNext} className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerRiwayatPesanan;
