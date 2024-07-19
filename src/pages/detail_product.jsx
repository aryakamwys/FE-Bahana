import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderDetailProduct from "../sections/detailProduct/header";
import ContentDetailProduct from "../sections/detailProduct/content";
import PenjualSection from "../sections/detailProduct/penjual_section";
import ReviewRatings from "../sections/detailProduct/review_rating";
import Footer from "../components/specific/footer";

const DetailProduct = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 310 }}>
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
