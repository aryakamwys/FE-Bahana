import React, { useState } from "react";

import EditAlamatIcon from "../../assets/images/edit_alamat.svg";
import CarrotImage from "../../assets/images/carrot.jpg";
import TrashIcon from "../../assets/images/sampah.svg";
import DropdownIcon from "../../assets/images/dropdown.svg";
import DropdownUpIcon from "../../assets/images/dropdown_up2.svg";

const options = [
  {
    label: "J&T Express",
    value: "J&T Express",
    price: "Rp 30.000",
    discountPrice: "Rp 35.000",
  },
  {
    label: "JNE Express",
    value: "JNE Express",
    price: "Rp 25.000",
    discountPrice: "Rp 30.000",
  },
  {
    label: "Si Cepat Express",
    value: "Si Cepat Express",
    price: "Rp 15.000",
    discountPrice: "Rp 20.000",
  },
  {
    label: "Ninja Express",
    value: "Ninja Express",
    price: "Rp 15.000",
    discountPrice: "Rp 20.000",
  },
];

const ContentPayment = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col w-[350px] md:w-full" >
        <div style={{ height: 34 }}></div>
        <div className="flex flex-row justify-between items-center">
          <div
            className="font-inter text-[18px] md:text-[22px] font-semibold text-black"
          >
            Delivery Address
          </div>
          <button onClick={() => (window.location.href = "/editalamat")}>
            <img src={EditAlamatIcon} className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] " alt="edit_alamat" />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div
            className="font-inter text-[14px] md:text-[20px] font-medium text-black"
          >
            Difa Rindang Utari
          </div>
          <div
            className="font-inter text-[14px] md:text-[20px] font-medium text-black"
          >
            (+62) 811-2222-2222
          </div>
          <div
            className="font-inter text-[14px] md:text-[20px] font-medium text-black text-start"
          >
            Kostella Tanjung Duren No. 123, KOTA JAKARTA BARAT, GROGOL
            PETAMBURAN
          </div>
        </div>
        <div style={{ height: 30 }}></div>
        <div className="flex flex-row justify-between md:border-none border border-gray p-2 lg:p-0 rounded-[5px]">
          <div className="flex flex-row">
            <img
              src={CarrotImage}
              className="border-none lg:border border-gray border-opacity-50 rounded-xl w-[85px] h-[62px] md:w-[150px] md:h-[100px] "
              alt="carrot"
            />
            <div style={{ width: 37 }}></div>
            <div className="flex flex-col items-start">
              <div
                className="font-inter font-semibold text-black text-[14px] md:text-[20px]"
              >
                Nama product
              </div>
              <div style={{ height: 5 }}></div>
              <div
                className="font-inter font-medium text-black text-start text-[10px] md:text-[18px]"
              >
                Lorem ipsum dolor sit amet blablalalblballllaf
              </div>
              <div style={{ height: 5 }}></div>
              <div className="hidden md:flex w-12 h-6">
                <div
                  className="border border-gray rounded-md pt-1 pb-1 pl-2 pr-2 font-inter font-medium text-black"
                  style={{ fontSize: 10 }}
                >
                  10 kg
                </div>
              </div>
              <div style={{ height: 5 }}></div>
              <div className="flex flex-row items-center">
                <div
                  className="font-inter font-bold text-black md:text-primary text-[12px] md:text-[15px]"
                >
                  Rp 100.000
                </div>
                <div style={{ width: 10 }}></div>
                <div
                  className="hidden md:flex  font-inter font-normal text-gray line-through"
                  style={{ fontSize: 10 }}
                >
                  Rp 150.000
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center bg-gray bg-opacity-20 w-5 h-5 lg:w-9 lg:h-9 rounded-full">
            <img src={TrashIcon} className="w-[14px] h-[14px] lg:w-[22px] lg:h-[22px]" alt="sampah" />
          </button>
        </div>
        <div style={{ height: 34 }}></div>
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-bold text-black text-[16px] md:text-[22px]"
          >
            Pilih Pengiriman
          </div>
          <div style={{ height: 20 }}></div>
          <div className="flex flex-col items-start">
            <div style={{ height: 7 }}></div>
            <div className="relative w-[350px] md:w-[583px] ">
              <div
                className="flex flex-row justify-between h-[44px] md:h-[58px] items-center border border-gray-300 border-opacity-50 rounded-xl pl-10 pr-10 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-80 h-18 flex items-center font-medium font-inter text-xl">
                  {selectedOption ? selectedOption.label : "J&T Express"}
                </div>
                {isOpen ? (
                  <img src={DropdownUpIcon} className="w-[24px] h-[24px] lg:w-[38px] lg:h-[38px]"  alt="dropdown up" />
                ) : (
                  <img src={DropdownIcon} className="w-[24px] h-[24px] lg:w-[38px] lg:h-[38px]" alt="dropdown" />
                )}
              </div>
              {isOpen && (
                <div className="absolute w-full mt-3 bg-white border border-gray-300 rounded-xl font-inter shadow-lg z-10 max-h-96 overflow-y-auto">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight border-b-2 border-gray border-opacity-10 text-[14px] lg:text-[20px]"
                      onClick={() => handleOptionClick(option)}
                    >
                      <div
                        className="flex flex-row justify-between font-inter font-semibold text-black text-[14px] md:text-[20px]"
                      >
                        <div>{option.label}</div>
                        <div className="flex flex-row">
                          <div className="ml-2">{option.price}</div>
                          <div className="ml-2 line-through text-gray text-opacity-30 text-[14px] lg:text-[20px]">
                            {option.discountPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPayment;
