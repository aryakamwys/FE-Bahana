import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderRiwayatPesanan from "../sections/riwayat_pesanan/header";
import ContentRiwayatPesanan from "../sections/riwayat_pesanan/content";
import Footer from "../components/specific/footer";

const RiwayatPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <HeaderRiwayatPesanan />
      <ContentRiwayatPesanan />
      <Footer />
    </div>
  );
};

export default RiwayatPesanan;
