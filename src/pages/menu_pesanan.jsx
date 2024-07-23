import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderMenuPesanan from "../sections/menu_pesanan/header";
import ContentMenuPesanan from "../sections/menu_pesanan/content";

const MenuPesanan = () => {
  return (
    <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPetani /> */}
      <HeaderMenuPesanan />
      <ContentMenuPesanan />
    </div>
  );
};

export default MenuPesanan;
