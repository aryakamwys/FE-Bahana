import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderDetailProduct from "../sections/detailProduct/header";
import ContentDetailProduct from "../sections/detailProduct/content";
import PenjualSection from "../sections/detailProduct/penjual_section";
import ReviewRatings from "../sections/detailProduct/review_rating";
import Footer from "../components/specific/footer";

const DetailProduct = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPembeli />
      <HeaderDetailProduct />
      <ContentDetailProduct />
      <PenjualSection />
      <ReviewRatings />
      <Footer />
    </div>
  );
};

export default DetailProduct;
