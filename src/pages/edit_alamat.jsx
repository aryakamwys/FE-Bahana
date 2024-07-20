import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditAlamat from "../sections/edit_alamat/header";
import ContentEditAlamat from "../sections/edit_alamat/content";
import Footer from "../components/specific/footer";

const EditAlamat = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderEditAlamat />
      <ContentEditAlamat />
      <Footer />
    </div>
  );
};

export default EditAlamat;
