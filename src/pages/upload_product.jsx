import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderUploadProduct from "../sections/upload_product/header";
import ContentUploadProduct from "../sections/upload_product/content";

const UploadProduct = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPetani />
      <HeaderUploadProduct />
      <ContentUploadProduct />
    </div>
  );
};

export default UploadProduct;
