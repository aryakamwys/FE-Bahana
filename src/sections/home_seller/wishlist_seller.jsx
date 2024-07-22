import React from "react";
import BackWishlist from "../../sections/wishlist/back_wishlist";
import CardWishList from "../../components/common/card_wishlist";
import Footer from "../../components/specific/footer";
import NavbarPetani from "../../components/specific/navbar_seller";

const WishlistPetani = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
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
