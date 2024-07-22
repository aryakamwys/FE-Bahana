import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderPetaniProfilePage from "../sections/profile_seller/header";
import ContentPetaniProfilePage from "../sections/profile_seller/content";

const PetaniProfilePage = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPetani />
      <HeaderPetaniProfilePage />
      <ContentPetaniProfilePage />
    </div>
  );
};

export default PetaniProfilePage;
