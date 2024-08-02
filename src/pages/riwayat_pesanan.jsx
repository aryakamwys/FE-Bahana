import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderRiwayatPesanan from "../sections/riwayat_pesanan/header";
import ContentRiwayatPesanan from "../sections/riwayat_pesanan/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const RiwayatPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <Header title={"Orders History"} onClick={() => window.history.back()} />
      <ContentRiwayatPesanan />
      <Footer />
    </div>
  );
};

export default RiwayatPesanan;
