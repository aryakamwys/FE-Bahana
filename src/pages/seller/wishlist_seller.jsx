import React from "react";
import BackWishlist from "../../sections/wishlist/back_wishlist";
import CardWishList from "../../components/common/card_wishlist";
import Footer from "../../components/specific/footer";
import NavbarPetani from "../../components/specific/navbar_seller";

const WishlistPetani = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPetani />
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

export default WishlistPetani;
