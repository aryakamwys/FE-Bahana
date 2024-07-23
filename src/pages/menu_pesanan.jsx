import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderMenuPesanan from "../sections/menu_pesanan/header";
import ContentMenuPesanan from "../sections/menu_pesanan/content";

const MenuPesanan = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPetani /> */}
      <HeaderMenuPesanan />
      <ContentMenuPesanan />
    </div>
  );
};

export default MenuPesanan;
