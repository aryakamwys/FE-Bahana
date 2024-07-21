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
      <div className="flex flex-row row-auto">
        <img
          src={ProductImage}
          className="border border-gray border-opacity-50 rounded-3xl"
          style={{ width: 700, height: 434 }}
          alt="productimage"
        />
        <div style={{ width: 36 }}></div>
        <div
          className="flex flex-col col-auto items-start"
          style={{ width: 505, height: 434 }}
        >
          <div
            className="font-inter font-semibold text-black text-start"
            style={{ fontSize: 32 }}
          >
            Nama Product blabla bshhvdshsh
          </div>
          <div style={{ height: 15 }}></div>
          <div
            className="font-inter font-medium text-black text-start"
            style={{ fontSize: 32 }}
          >
            Description
          </div>
          <div style={{ height: 15 }}></div>
          <div
            className="font-inter font-medium text-black text-start"
            style={{ fontSize: 20 }}
          >
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
        </div>
      </div>
      <div style={{ height: 25 }}></div>

      <div className="flex flex-row row-auto">
        <DetailImage />
        <div style={{ width: 36 }}></div>
        <div className="flex flex-col col-auto p-1">
          <div className="flex flex-row row-auto items-center">
            <div
              className="font-inter font-bold text-primary"
              style={{ fontSize: 40 }}
            >
              Rp. 100.000
            </div>
            <div style={{ width: 10 }}></div>
            <div
              className="font-inter font-normal text-gray text-opacity-50 line-through"
              style={{ fontSize: 25 }}
            >
              Rp. 150.000
            </div>
          </div>
          <div style={{ height: 15 }}></div>
          <div className="flex items-start">
            <div
              className="font-inter font-semibold text-black"
              style={{ fontSize: 25 }}
            >
              Stok: 10
            </div>
          </div>
          <div style={{ height: 15 }}></div>
          <div className="flex flex-row row-auto">
            <button className="bg-primary rounded-xl px-20 py-5" onClick={() => (window.location.href = "/payment")}>
              <div
                className="flex items-start justify-center text-white font-inter font-medium"
                style={{ fontSize: 20 }}
              >
                Buy
              </div>
            </button>
            <div style={{ width: 25 }}></div>
            <button className="flex flex-row row-auto items-center bg-white border border-primary rounded-xl px-7 py-5">
              <img src={CartIcon} className="w-6 h-6" alt="cart icon" />
              <div style={{ width: 10 }}></div>
              <div
                className="flex items-center justify-center text-primary font-inter font-medium"
                style={{ fontSize: 20 }}
              >
                Masukkan Keranjang
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
