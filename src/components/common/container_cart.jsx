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
    <div className="lg:py-5 py-2">
      <div className="min-w-full border border-black lg:rounded-3xl rounded-md  h-auto">
        <div className="flex felx-row items-center justify-around  lg:px-10 lg:py-7 px-3 py-1 gap-1">
          <button
            className={`lg:w-10 lg:h-10 border w-5 h-4 md:w-5 md:h-5 border-black rounded-sm lg:rounded-lg flex items-center justify-center ${
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
                className="lg:h-[180px] lg:w-[200px] h-[80px]  w-[170px] md:h-[100px] "
                alt="carrot"
              />
            </div>
            <div className="hidden lg:block" style={{ width: 25 }}></div>
            <div className="flex flex-col items-start">
              <div className="font-inter font-semibold text-black lg:text-[40px] text-[21px] text-start">
                Wortel blabla
              </div>
              <div
                className="font-inter font-medium text-black lg:text-[35px] text-[15px] text-start"
              >
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div
                className="font-inter font-semibold text-black text-start lg:text-[40px] text-[19px]"
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
