import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderCart from "../sections/keranjang/header";
import ContentCart from "../sections/keranjang/contentCart";
import FooterCart from "../sections/keranjang/footer";

const CartPage = () => {
  return (
    <div>
      <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
        <NavbarPembeli />
        <HeaderCart />
        <ContentCart />
      </div>
      <FooterCart />
    </div>
  );
};

export default CartPage;
