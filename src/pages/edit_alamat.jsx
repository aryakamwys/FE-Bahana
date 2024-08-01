import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditAlamat from "../sections/edit_alamat/header";
import ContentEditAlamat from "../sections/edit_alamat/content";
import Footer from "../components/specific/footer";

const EditAlamat = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <HeaderEditAlamat />
      <ContentEditAlamat />
      {/* <Footer /> */}
    </div>
  );
};

export default EditAlamat;
