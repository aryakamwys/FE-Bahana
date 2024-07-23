import React from "react";

import ProductImage from "../../assets/images/carrot.jpg";
import ButtonWeightProduct from "../../components/common/button_weight_product";
import PlusMinusProduct from "../../components/common/button_plusminus_product";
import StatusPrice from "../../components/common/status_price";
import DetailImage from "../../components/common/detail_image";

import CartIcon from "../../assets/images/keranjang.svg";

const ContentDetailProduct = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row row-auto md:gap-5 mt-6 ">
        <div>
          <img
            src={ProductImage}
            className="border border-gray border-opacity-50 rounded-3xl w-[350px] h-[222px] md:w-[400px] md:h-[300px] lg:w-[700px] lg:h-[434px] "
            alt="productimage"
          />
          <DetailImage />
        </div>
        <div className="md:hidden lg:block" style={{ width: 36 }}></div>
        <div className="flex flex-col col-auto items-start  w-[350px] h-auto lg:w-[505px] lg:h-[434px] ">
          <div className="pt-[15px] lg:py-0 font-inter font-semibold text-black text-start text-[18px] md:text-[20px] lg:text-[32px]">
            Nama Product blabla bshhvdshsh
          </div>
          <div className="md:hidden lg:block" style={{ height: 15 }}></div>
          <div className="py-[6px] lg:py-0 font-inter font-medium text-black text-start text-[14px] lg:text-[32px]">
            Description
          </div>
          <div className="md:hidden lg:block" style={{ height: 15 }}></div>
          <div className="font-inter font-medium text-black text-start text-[12px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Diam dui odio pulvinar
            scelerisque. Amet non habitant viverra orci egestas. Convallis
            adipiscing viverra sit amet lorem ac ultrices. Volutpat laoreet amet
            id facilisi.
          </div>
          <div className="flex flex-row row-auto">
            <ButtonWeightProduct weight={5} />
            <ButtonWeightProduct weight={10} />
            <ButtonWeightProduct weight={20} />
            <ButtonWeightProduct weight={30} />
          </div>
          <PlusMinusProduct />
          <StatusPrice />
          <div className="flex flex-col lg:h-[172px] col-auto p-1">
            <div className="flex flex-row row-auto items-center">
              <div className="font-inter text-[20px] lg:text-[40px] font-bold text-primary">
                Rp. 100.000
              </div>
              <div style={{ width: 10 }}></div>
              <div className="font-inter text-[16px] lg:text-[25px] font-normal text-gray text-opacity-50 line-through">
                Rp. 150.000
              </div>
            </div>
            <div className="flex items-start py-[8px] ">
              <div className="font-inter text-[14px] lg:text-[25px] font-semibold text-black">
                Stok: 10
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto">
              <button
                className="bg-primary rounded-xl lg:w-[205px] lg:h-[64px] md:w-[90px] md:h-[35px] "
                onClick={() => (window.location.href = "/payment")}
              >
                <div className="flex items-start justify-center text-white font-inter font-medium lg:text-[20px]  md:text-[15px] ">
                  Buy
                </div>
              </button>
              <div style={{ width: 25 }}></div>
              <button className="flex flex-row row-auto items-center gap-1 justify-center bg-white border border-primary rounded-xl lg:w-[275px] lg:h-[64px] md:px-2 md:py-2 lg:px-0">
                <img src={CartIcon} className="w-6 h-6" alt="cart icon" />
                <div className="md:hidden lg:block" style={{ width: 10 }}></div>
                <div className="flex items-center font-semibold justify-center text-primary font-inter  lg:text-[20px] md:text-[13px] ">
                  Masukkan Keranjang
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
