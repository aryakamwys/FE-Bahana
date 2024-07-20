import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderRiwayatPesanan from "../sections/riwayat_pesanan/header";
import ContentRiwayatPesanan from "../sections/riwayat_pesanan/content";
import Footer from "../components/specific/footer";

const RiwayatPesanan = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderRiwayatPesanan />
      <ContentRiwayatPesanan />
      <Footer />
    </div>
  );
};

export default RiwayatPesanan;
