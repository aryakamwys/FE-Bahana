import React, { useState } from "react";

import CartImage from "../../assets/images/carrot.jpg";
import PlusMinusProduct from "./button_plusminus_product";
import CheckIcon from "../../assets/images/check2.svg";

const ContainerCart = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="py-5">
      <div
        className="min-w-full border border-black rounded-3xl"
        style={{ height: 240 }}
      >
        <div className="flex felx-row items-center justify-around pl-10 pr-10 pt-7 pb-7">
          <button
            className={`w-10 h-10 border border-black rounded-lg flex items-center justify-center ${
              isChecked ? "bg-primary" : ""
            }`}
            onClick={handleClick}
          >
            {isChecked ? <img src={CheckIcon} alt="check" /> : ""}
          </button>
          <div className="flex flex-row">
            <div>
              <img
                src={CartImage}
                style={{ width: 200, height: 180 }}
                alt="carrot"
              />
            </div>
            <div style={{ width: 25 }}></div>
            <div className="flex flex-col items-start">
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 40 }}
              >
                Wortel blabla
              </div>
              <div
                className="font-inter font-medium text-black"
                style={{ fontSize: 35 }}
              >
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 40 }}
              >
                Rp 100.000
              </div>
            </div>
          </div>
          <PlusMinusProduct />
        </div>
      </div>
    </div>
  );
};

export default ContainerCart;
