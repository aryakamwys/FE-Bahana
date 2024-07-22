import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderPetaniProfilePage from "../sections/profile_seller/header";
import ContentPetaniProfilePage from "../sections/profile_seller/content";

const PetaniProfilePage = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px] ">
      {/* <NavbarPetani /> */}
      <HeaderPetaniProfilePage />
      <ContentPetaniProfilePage />
    </div>
  );
};

export default PetaniProfilePage;
