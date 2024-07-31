import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderCart from "../sections/keranjang/header";
import ContentCart from "../sections/keranjang/contentCart";
import FooterCart from "../sections/keranjang/footer";

const CartPage = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
=======
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
        <NavbarPembeli />
        <HeaderCart />
        <ContentCart />
      </div>
      <FooterCart />
    </div>
  );
};

export default CartPage;
