import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderMenuPesanan from "../sections/menu_pesanan/header";
import ContentMenuPesanan from "../sections/menu_pesanan/content";

const MenuPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPetani />
      <HeaderMenuPesanan />
      <ContentMenuPesanan />
    </div>
  );
};

export default MenuPesanan;
