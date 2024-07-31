import React, { useState } from "react";

import CartImage from "../../assets/images/carrot.jpg";
import PlusMinusProduct from "./button_plusminus_product";
import CheckIcon from "../../assets/images/check2.svg";

const ContainerCart = ({ item, onItemCheck, onQuantityChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(item.jumlah);
  const [calculatedPrice, setCalculatedPrice] = useState(item.calculatedPrice);

  const handleClick = () => {
    // setIsChecked(!isChecked);
    // onItemCheck(item.produkID, !isChecked);
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    onItemCheck(item.produkID, newIsChecked, item.calculatedPrice * quantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(item.produkID, newQuantity, calculatedPrice);
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
                alt="carrot"
              />
            </div>
            <div className="hidden lg:block" style={{ width: 25 }}></div>
            <div className="flex flex-col items-start lg:w-[724px]">
              <div className="font-inter font-semibold text-black lg:text-[30px] text-[21px] text-start">
                {item.nama_produk}
              </div>
              <div className="font-inter font-medium text-black lg:text-[20px] text-[15px] text-start">
                {item.deskripsi_produk}
              </div>
              <div className="font-inter font-semibold text-black text-start lg:text-[30px] text-[19px]">
              Rp{" "}
                {item.calculatedPrice !== undefined
                  ? (item.calculatedPrice * quantity).toLocaleString()
                  : "Loading..."}
              </div>
            </div>
          </div>
          <PlusMinusProduct
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            maxQuantity={item.jumlah_stok}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCart;
