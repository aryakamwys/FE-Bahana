import React from "react";
import PesananDibuatIcon from "../../assets/images/stepper1.svg";
import PesananDikemasIcon from "../../assets/images/stepper2.svg";
import PesananSampaiIcon from "../../assets/images/stepper3.svg";
import PesananDiterimaIcon from "../../assets/images/stepper4.svg";
import PesananSelesaiIcon from "../../assets/images/stepper5.svg";
import TerkirimIcon from "../../assets/images/stepper6.svg";
import PesananSampaiVerticalIcon from "../../assets/images/stepper7.svg";
import DikemasIcon from "../../assets/images/stepper8.svg";
import DibuatIcon from "../../assets/images/stepper9.svg";
import DetailOrder from "../../components/common/text_detail_order";

const steps = [
  {
    label: "Pesanan Dibuat",
    icon: <img src={PesananDibuatIcon} alt="Pesanan Dibuat" />,
  },
  {
    label: "Pesanan Dikemas",
    icon: <img src={PesananDikemasIcon} alt="Pesanan Dikemas" />,
  },
  {
    label: "Pesanan Sampai",
    icon: <img src={PesananSampaiIcon} alt="Pesanan Sampai" />,
  },
  {
    label: "Pesanan Diterima",
    icon: <img src={PesananDiterimaIcon} alt="Pesanan Diterima" />,
  },
  {
    label: "Pesanan Selesai",
    icon: <img src={PesananSelesaiIcon} alt="Pesanan Selesai" />,
  },
];

const stepsVertical = [
  {
    date: "28 Jun",
    time: "13.21",
    label: "Terkirim",
    icon: <img src={TerkirimIcon} alt="Terkirim" />,
    isBlank: false,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah sampai di lokasi transit Hub terakhir Daan Mogot Hub",
    icon: <img src={PesananSampaiVerticalIcon} alt="Pesanan Sampai" />,
    isBlank: false,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah sampai di lokasi sortir Cakung DC",
    icon: <img src={PesananSampaiIcon} alt="Pesanan Sampai" />,
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah sampai di lokasi sortir Bandung DC",
    icon: <img src={PesananDiterimaIcon} alt="Pesanan Diterima" />,
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan sedang diproses di pusat penyortiran",
    icon: <img src={PesananSelesaiIcon} alt="Pesanan Selesai" />,
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesanan telah diserahkan ke jasa kirim",
    icon: <img src={PesananSelesaiIcon} alt="Pesanan Selesai" />,
    isBlank: true,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Sedang Dikemas",
    icon: <img src={DikemasIcon} alt="Sedang Dikemas" />,
    isBlank: false,
  },
  {
    date: "28 Jun",
    time: "13.21",
    label: "Pesan Dibuat",
    icon: <img src={DibuatIcon} alt="Pesan Dibuat" />,
    isBlank: false,
  },
];

const ContentTrackingOrder = ({ currentStep }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center w-full border border-gray border-opacity-50 rounded-xl pt-9 pb-9">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            <div
              className={`w-16 h-16 p-3 rounded-full flex items-center justify-center z-10 border-4 border-white ${
                index <= currentStep ? "bg-primary" : "bg-primary"
              }`}
            >
              {step.icon}
            </div>
            <div style={{ height: 3 }}></div>
            <span
              style={{ fontSize: 16 }}
              className={`font-inter font-semibold ${
                index <= currentStep ? "text-gray" : "text-black"
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className="absolute top-8 left-28 w-full border-t-2 border-gray"></div>
            )}
          </div>
        ))}
      </div>
      <div style={{ height: 24 }}></div>
      <div className="flex flex-row justify-between">
        <div
          className="border border-gray border-opacity-50 rounded-xl"
          style={{ width: 356, height: 658 }}
        >
          <div className="flex flex-col items-start pl-5 pr-5 pt-8">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 20 }}
            >
              Lacak
            </div>
            <div className="h-7"></div>
            <hr className="w-full border border-gray border-opacity-50" />
            <div className="h-7"></div>
            <DetailOrder title={"Nomor resi"} value={"SPXID091232829212"} />
            <DetailOrder title={"Pengirim"} value={"Nama Petani"} />
            <DetailOrder title={"Tanggal pengiriman"} value={"23 April 2024"} />
            <DetailOrder title={"Estimasi tiba"} value={"28 - 29 April 2024"} />
            <DetailOrder title={"Pembeli"} value={"Difa Rindang Utari"} />
          </div>
        </div>
        <div
          className="border border-gray border-opacity-50 rounded-xl"
          style={{ height: 658, width: 865 }}
        >
          <div className="flex flex-col items-start p-8">
            <div
              className="font-inter font-bold text-black"
              style={{ fontSize: 20 }}
            >
              Delivered
            </div>
            <div className="h-7"></div>
            <hr className="w-full border border-gray border-opacity-50" />
            <div className="h-7"></div>
            <div className="w-full rounded-xl">
              {stepsVertical.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center relative mb-6"
                >
                  <div
                    className="flex flex-col items-center mr-4 text-black font-inter font-medium"
                    style={{ fontSize: 12 }}
                  >
                    <div>{step.date}</div>
                    <div>{step.time}</div>
                  </div>
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`p-1 rounded-full flex items-center justify-center z-10 border-4 border-white ${
                        index <= currentStep - 1 ? "bg-green-500" : "bg-primary"
                      } ${step.isBlank ? "w-11 h-11 " : "w-11 h-11"}`}
                    >
                      {step.isBlank ? " " : step.icon}
                    </div>
                    {index < stepsVertical.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-18 bg-black"></div>
                    )}
                  </div>
                  <div className="ml-4">
                    <span
                      style={{ fontSize: 18 }}
                      className={`font-inter font-semibold ${
                        index <= currentStep - 1 ? "text-gray" : "text-black"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTrackingOrder;
