import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderCart from "../sections/keranjang/header";
import ContentCart from "../sections/keranjang/contentCart";
import FooterCart from "../sections/keranjang/footer";

const CartPage = () => {
  return (
    <div>
      <div style={{ paddingLeft: 310, paddingRight: 315 }}>
        <NavbarPembeli />
        <HeaderCart />
        <ContentCart />
      </div>
      <FooterCart />
    </div>
  );
};

export default CartPage;
