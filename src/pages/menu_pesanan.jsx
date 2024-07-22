import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderMenuPesanan from "../sections/menu_pesanan/header";
import ContentMenuPesanan from "../sections/menu_pesanan/content";

const MenuPesanan = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPetani />
      <HeaderMenuPesanan />
      <ContentMenuPesanan />
    </div>
  );
};

export default MenuPesanan;
