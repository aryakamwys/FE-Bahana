import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderCart from "../sections/keranjang/header";
import ContentCart from "../sections/keranjang/contentCart";
import FooterCart from "../sections/keranjang/footer";

const CartPage = () => {
  return (
    <div>
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
        <NavbarPembeli />
        <HeaderCart />
        <ContentCart />
      </div>
      <FooterCart />
    </div>
  );
};

export default CartPage;
