import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderRiwayatPesanan from "../sections/riwayat_pesanan/header";
import ContentRiwayatPesanan from "../sections/riwayat_pesanan/content";
import Footer from "../components/specific/footer";

const RiwayatPesanan = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPembeli /> */}
      <HeaderRiwayatPesanan />
      <ContentRiwayatPesanan />
      {/* <Footer /> */}
    </div>
  );
};

export default RiwayatPesanan;
