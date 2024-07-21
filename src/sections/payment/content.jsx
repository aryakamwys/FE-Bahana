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
      <div className="flex flex-col" style={{ width: 583 }}>
        <div style={{ height: 34 }}></div>
        <div className="flex flex-row justify-between items-center">
          <div
            className="font-inter font-semibold text-black"
            style={{ fontSize: 22 }}
          >
            Delivery Address
          </div>
          <button onClick={() => (window.location.href = "/editalamat")}>
            <img src={EditAlamatIcon} alt="edit_alamat" />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-medium text-black"
            style={{ fontSize: 20 }}
          >
            Difa Rindang Utari
          </div>
          <div
            className="font-inter font-medium text-black"
            style={{ fontSize: 20 }}
          >
            (+62) 811-2222-2222
          </div>
          <div
            className="font-inter font-medium text-black text-start"
            style={{ fontSize: 20 }}
          >
            Kostella Tanjung Duren No. 123, KOTA JAKARTA BARAT, GROGOL
            PETAMBURAN
          </div>
        </div>
        <div style={{ height: 30 }}></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              src={CarrotImage}
              className="border border-gray border-opacity-50 rounded-xl"
              style={{ width: 150, height: 100 }}
              alt="carrot"
            />
            <div style={{ width: 37 }}></div>
            <div className="flex flex-col items-start">
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 20 }}
              >
                Nama product
              </div>
              <div style={{ height: 5 }}></div>
              <div
                className="font-inter font-medium text-black text-start"
                style={{ fontSize: 18 }}
              >
                Lorem ipsum dolor sit amet blablalalblballllaf
              </div>
              <div style={{ height: 5 }}></div>
              <div className="w-12 h-6">
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
                  className="font-inter font-bold text-primary"
                  style={{ fontSize: 15 }}
                >
                  Rp 100.000
                </div>
                <div style={{ width: 10 }}></div>
                <div
                  className="font-inter font-normal text-gray line-through"
                  style={{ fontSize: 10 }}
                >
                  Rp 150.000
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center bg-gray bg-opacity-20 w-9 h-9 rounded-full">
            <img src={TrashIcon} alt="sampah" />
          </button>
        </div>
        <div style={{ height: 34 }}></div>
        <div className="flex flex-col items-start">
          <div
            className="font-inter font-bold text-black"
            style={{ fontSize: 22 }}
          >
            Pilih Pengiriman
          </div>
          <div style={{ height: 20 }}></div>
          <div className="flex flex-col items-start">
            <div style={{ height: 7 }}></div>
            <div className="relative" style={{ width: 583 }}>
              <div
                className="flex flex-row justify-between items-center border border-gray-300 border-opacity-50 rounded-xl pl-10 pr-10 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-80 h-18 flex items-center font-medium font-inter text-xl">
                  {selectedOption ? selectedOption.label : "J&T Express"}
                </div>
                {isOpen ? (
                  <img src={DropdownUpIcon} alt="dropdown up" />
                ) : (
                  <img src={DropdownIcon} alt="dropdown" />
                )}
              </div>
              {isOpen && (
                <div className="absolute w-full mt-3 bg-white border border-gray-300 rounded-xl shadow-lg z-10 max-h-96 overflow-y-auto">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight border-b-2 border-gray border-opacity-10"
                      onClick={() => handleOptionClick(option)}
                    >
                      <div
                        className="flex flex-row justify-between font-inter font-semibold text-black"
                        style={{ fontSize: 20 }}
                      >
                        <div>{option.label}</div>
                        <div className="flex flex-row">
                          <div className="ml-2">{option.price}</div>
                          <div className="ml-2 line-through">
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
