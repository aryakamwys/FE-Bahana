import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderUploadProduct from "../sections/upload_product/header";
import ContentUploadProduct from "../sections/upload_product/content";

const UploadProduct = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPetani /> */}
      <HeaderUploadProduct />
      <ContentUploadProduct />
    </div>
  );
};

export default UploadProduct;
