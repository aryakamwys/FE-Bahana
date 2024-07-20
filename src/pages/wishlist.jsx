import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import BackWishlist from "../sections/wishlist/back_wishlist";
import CardWishList from "../components/common/card_wishlist";
import Footer from "../components/specific/footer";

const Wishlist = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
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
