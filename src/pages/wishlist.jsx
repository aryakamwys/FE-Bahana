import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import BackWishlist from "../sections/wishlist/back_wishlist";
import CardWishList from "../components/common/card_wishlist";
import Footer from "../components/specific/footer";

const Wishlist = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
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
