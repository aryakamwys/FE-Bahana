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
      <div className="h-[30px] lg:h-[0px]"></div>
      <div className="flex flex-col md:flex-row row-auto">
        <div>
          <img
            src={ProductImage}
            className="border border-gray border-opacity-50 rounded-3xl w-[350px] h-[222px] lg:w-[700px] lg:h-[434px] "
            alt="productimage"
          />
          <DetailImage />
        </div>
        <div style={{ width: 36 }}></div>
        <div className="flex flex-col col-auto items-start h-[275px] lg:w-[505px] lg:h-[434px] ">
          <div className="pt-[15px] md:py-0 font-inter font-semibold text-black text-start text-[18px] md:text-[16px] lg:text-[32px]">
            Nama Product blabla bshhvdshsh
          </div>
          <div style={{ height: 15 }}></div>
          <div className="py-[6px] lg:py-0 font-inter font-medium text-black text-start text-[14px] md:text-[16px] lg:text-[32px]">
            Description
          </div>
          <div style={{ height: 15 }}></div>
          <div className="font-inter font-medium text-black text-start text-[12px] lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Diam dui odio pulvinar
            scelerisque. Amet non habitant viverra orci egestas.
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
            <div className="flex flex-row row-auto items-center md:pt-[15px]">
              <div className="font-inter text-[20px] lg:text-[40px] font-bold text-primary">
                Rp. 100.000
              </div>
              <div style={{ width: 10 }}></div>
              <div className="font-inter text-[16px] md:text-[10px] lg:text-[25px] font-normal text-gray text-opacity-50 line-through">
                Rp. 150.000
              </div>
            </div>
            <div className="flex items-start py-[8px]">
              <div className="font-inter text-[14px] md:text-[12px] lg:text-[25px] font-semibold text-black">
                Stok: 10
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto">
              <button
                className="bg-primary md:rounded lg:rounded-xl md:w-[93px] md:h-[27px] lg:w-[205px] lg:h-[64px] "
                onClick={() => (window.location.href = "/payment")}
              >
                <div className="flex items-start justify-center text-white font-inter font-medium md:text-[10px] lg:text-[20px]">
                  Buy
                </div>
              </button>
              <div style={{ width: 25 }}></div>
              <button className="flex flex-row row-auto items-center justify-center bg-white border border-primary md:rounded lg:rounded-xl md:w-[129px] md:h-[27px] lg:w-[275px] lg:h-[64px]">
                <img
                  src={CartIcon}
                  className="md:w-[10px] md:h-[10px] lg:w-6 lg:h-6"
                  alt="cart icon"
                />
                <div style={{ width: 10 }}></div>
                <div className="flex items-center justify-center text-primary font-inter font-medium md:text-[10px] lg:text-[20px]">
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
