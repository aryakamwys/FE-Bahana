import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import BackWishlist from "../sections/wishlist/back_wishlist";
import CardWishList from "../components/common/card_wishlist";
import Footer from "../components/specific/footer";

const Wishlist = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPembeli />
      <BackWishlist />
      <CardWishList />
      <CardWishList />
      <CardWishList />
      <CardWishList />
      <CardWishList />
      <Footer />
    </div>
  );
};

export default Wishlist;
