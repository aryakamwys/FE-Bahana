import React from "react";
import { useMediaQuery } from "react-responsive";
import NavbarPembeli from "../components/specific/navbar";
import HeaderDetailProduct from "../sections/detailProduct/header";
import ContentDetailProduct from "../sections/detailProduct/content";
import PenjualSection from "../sections/detailProduct/penjual_section";
import ReviewRatings from "../sections/detailProduct/review_rating";
import Footer from "../components/specific/footer";

import CartIcon from "../assets/images/keranjang.svg";

const DetailProduct = () => {
  const isLg = useMediaQuery({ minWidth: 768 }); // adjust the breakpoint as needed

  return (
<<<<<<< HEAD
    <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
=======
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPembeli />
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
      <HeaderDetailProduct />
      <ContentDetailProduct />
      <PenjualSection />
      <ReviewRatings />
      {isLg && <Footer />}
      <div className="lg:hidden md:hidden flex flex-row py-2 lg:py-0">
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
