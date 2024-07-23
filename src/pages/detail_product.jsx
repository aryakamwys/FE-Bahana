import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderDetailProduct from "../sections/detailProduct/header";
import ContentDetailProduct from "../sections/detailProduct/content";
import PenjualSection from "../sections/detailProduct/penjual_section";
import ReviewRatings from "../sections/detailProduct/review_rating";
import Footer from "../components/specific/footer";

const DetailProduct = () => {
  return (
    <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
      <HeaderDetailProduct />
      <ContentDetailProduct />
      <PenjualSection />
      <ReviewRatings />
      {/* <Footer /> */}
    </div>
  );
};

export default DetailProduct;
