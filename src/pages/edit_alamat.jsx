import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditAlamat from "../sections/edit_alamat/header";
import ContentEditAlamat from "../sections/edit_alamat/content";
import Footer from "../components/specific/footer";

const EditAlamat = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPembeli /> */}
      <HeaderEditAlamat />
      <ContentEditAlamat />
      {/* <Footer /> */}
    </div>
  );
};

export default EditAlamat;
