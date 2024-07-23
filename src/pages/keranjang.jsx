import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderCart from "../sections/keranjang/header";
import ContentCart from "../sections/keranjang/contentCart";
import FooterCart from "../sections/keranjang/footer";

const CartPage = () => {
  return (
    <div>
      <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
        <NavbarPembeli />
        <HeaderCart />
        <ContentCart />
      </div>
      <FooterCart />
    </div>
  );
};

export default CartPage;
