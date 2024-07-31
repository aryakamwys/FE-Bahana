import React from "react";
import NavbarPetani from "../../components/specific/navbar_seller";
import HeaderPetaniProfilePage from "../../sections/profile_seller/header";
import ContentPetaniProfilePage from "../../sections/profile_seller/content";

const PetaniProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPetani />
      <HeaderPetaniProfilePage />
      <ContentPetaniProfilePage />
    </div>
  );
};

export default PetaniProfilePage;
