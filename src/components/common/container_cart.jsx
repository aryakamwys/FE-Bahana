import React, { useState } from "react";

import CartImage from "../../assets/images/carrot.jpg";
import PlusMinusProduct from "./button_plusminus_product";
import CheckIcon from "../../assets/images/check2.svg";

const ContainerCart = ({ item, onRemoveItem }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(item.jumlah);
  const [calculatedPrice, setCalculatedPrice] = useState(item.calculatedPrice);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    // Optionally, update the localStorage with the new quantity
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((cartItem) =>
      cartItem.produkID === item.produkID
        ? { ...cartItem, jumlah: newQuantity }
        : cartItem
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
<<<<<<< HEAD
    <div className="lg:py-5 py-2">
      <div className="min-w-full border border-black lg:rounded-3xl rounded-md  h-auto">
        <div className="flex felx-row items-center justify-between lg:px-10 lg:py-7 px-3 py-1 gap-1 ">
          <div className="flex flex-row items-center ">
            <button
              className={`lg:w-10 lg:h-10 border w-5 h-4 md:w-5 md:h-5  border-black  rounded-sm lg:rounded-lg flex items-center justify-center   ${
                isChecked ? "bg-primary" : ""
              }`}
              onClick={handleClick}
            >
              {isChecked ? <img src={CheckIcon} alt="check" /> : ""}
            </button>
            <div>
              <img
                src={CartImage}
=======
    <div className="lg:py-5 md:py-[15px] py-2">
      <div className="min-w-full border border-black md:rounded-3xl rounded-md  h-auto">
        <div className="flex felx-row items-center justify-around  lg:px-10 lg:py-7 px-3 py-1 gap-1">
          <button
            className={`lg:w-10 lg:h-10 border w-5 h-4 md:w-5 md:h-5 border-black rounded-sm lg:rounded-lg flex items-center justify-center ${
              isChecked ? "bg-black" : ""
            }`}
            onClick={handleClick}
          >
            {isChecked ? <img src={CheckIcon} alt="check" /> : ""}
          </button>
          <div className="flex flex-row">
            <div>
              <img
                src={item.image_produk}
                className="lg:h-[180px] lg:w-[200px] h-[80px]  w-[170px] md:h-[100px] "
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
                alt="carrot"
                className="lg:h-[100px] lg:w-[200px] h-[80px]  w-[170px]  md:h-[100px] "
              />
            </div>
            <div className="hidden lg:block" style={{ width: 25 }}></div>
<<<<<<< HEAD
            <div className="flex flex-col items-start">
              <div className="font-inter font-semibold text-black lg:text-[40px] text-[21px] text-start ">
                Wortel blabla
              </div>
              <div className="font-inter font-semibold text-black lg:text-[35px]  text-[15px] text-start ">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div className="font-inter font-semibold text-black text-start lg:text-[40px] text-[19px] ">
                Rp 100.000
=======
            <div className="flex flex-col items-start lg:w-[724px]">
              <div className="font-inter font-semibold text-black lg:text-[30px] text-[21px] text-start">
                {item.nama_produk}
              </div>
              <div className="font-inter font-medium text-black lg:text-[20px] text-[15px] text-start">
                {item.deskripsi_produk}
              </div>
              <div className="font-inter font-semibold text-black text-start lg:text-[30px] text-[19px]">
                Rp{" "}
                {calculatedPrice !== undefined
                  ? (calculatedPrice * quantity).toLocaleString()
                  : "Loading..."}
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {isChecked && (
              <button
                onClick={() => onRemoveItem(item)}
                className="block text-white lg:w-[106px] lg:h-[44px] bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Hapus
              </button>
            )}
            <PlusMinusProduct
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCart;
