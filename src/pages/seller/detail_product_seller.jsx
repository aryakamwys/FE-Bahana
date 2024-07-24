import React from "react";
import { useMediaQuery } from "react-responsive";
import HeaderDetailProduct from "../../sections/detailProduct/header";
import ContentDetailProduct from "../../sections/detailProduct/content";
import PenjualSection from "../../sections/detailProduct/penjual_section";
import ReviewRatings from "../../sections/detailProduct/review_rating";
import Footer from "../../components/specific/footer";

import CartIcon from "../../assets/images/keranjang.svg";
import NavbarPetani from "../../components/specific/navbar_seller";

const DetailProduct = () => {
  const isLg = useMediaQuery({ minWidth: 1024 }); // adjust the breakpoint as needed

  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPetani />
      <HeaderDetailProduct />
      <ContentDetailProduct />
      <PenjualSection />
      <ReviewRatings />
      {isLg && <Footer />}
      <div className="lg:hidden flex flex-row py-2 lg:py-0">
        <button
          className="bg-primary rounded-md lg:rounded-xl w-[151px] h-[27px] lg:w-[205px] lg:h-[64px] "
          onClick={() => (window.location.href = "/payment")}
        >
          <div
            className="flex items-start justify-center text-white font-inter font-medium text-[10px] lg:text-[20px] "
          >
            Buy
          </div>
        </button>
        <div style={{ width: 25 }}></div>
        <button className="flex flex-row row-auto items-center justify-center bg-white border border-primary rounded-md lg:rounded-xl w-[184px] h-[27px] lg:w-[275px] lg:h-[64px]">
          <img src={CartIcon} className="w-[10px] h-[10px] lg:w-6 lg:h-6" alt="cart icon" />
          <div className="w-[7px] lg:w-[10px]"></div>
          <div
            className="flex items-center justify-center text-primary font-inter font-medium text-[10px] lg:text-[20px]"
          >
            Masukkan Keranjang
          </div>
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;