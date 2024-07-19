import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderDetailProduct from "../sections/detailProduct/header";
import ContentDetailProduct from "../sections/detailProduct/content";

const DetailProduct = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 310 }}>
      <NavbarPembeli />
      <HeaderDetailProduct />
      <ContentDetailProduct />
    </div>
  );
};

export default DetailProduct;
