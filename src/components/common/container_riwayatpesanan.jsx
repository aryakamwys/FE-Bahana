import React from "react";

import CarrotImage from "../../assets/images/carrot.jpg";
import TruckIcon from "../../assets/images/truck.svg";
import ArrowNext from "../../assets/images/arrow_next.svg";

const ContainerRiwayatPesanan = () => {
  return (
    <div className="w-full py-6">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img
            src={CarrotImage}
            style={{ width: 235, height: 186 }}
            alt="carrot"
          />
          <div className="flex flex-col items-start">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 30 }}
            >
              Nama product loren ipsum ddee
            </div>
            <div className="h-2"></div>
            <div
              className="font-inter font-medium text-black"
              style={{ fontSize: 17 }}
            >
              Lorem ipsum dolor sit amet consectetur. In in pellentesque
              sollicitudin aliquam tincidunt fermentum pharetra.
            </div>
            <div className="py-3">
              <div
                className="font-inter font-medium text-black pt-1 pb-1 pl-4 pr-4 border border-black rounded-xl "
                style={{ fontSize: 20 }}
              >
                5 kg
              </div>
            </div>
            <div
              className="font-inter font-bold text-primary"
              style={{ fontSize: 25 }}
            >
              Total Pesanan: Rp 100.000
            </div>
          </div>
          <div className="flex items-end py-6">
            <div className="font-inter font-medium text-black pt-4 pb-4 pl-12 pr-12 border border-black rounded-xl hover:bg-primary hover:text-white w-36 h-14">
              Nilai
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between border-b-2 border-gray border-opacity-20 py-5">
          <div className="flex flex-row items-center">
            <div>
              <img src={TruckIcon} alt="truck" />
            </div>
            <div
              className="font-inter font-normal text-black"
              style={{ fontSize: 22 }}
            >
              Pesanan telah sampai diterima oleh yang bersangkutan
            </div>
          </div>
          <button>
            <img src={ArrowNext} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerRiwayatPesanan;
