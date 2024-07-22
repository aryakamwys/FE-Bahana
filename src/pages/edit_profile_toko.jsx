import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderEditProfileToko from "../sections/edit_profile_toko/header";
import ContentEditProfileToko from "../sections/edit_profile_toko/content";

const EditProfileToko = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPetani />
      <HeaderEditProfileToko />
      <ContentEditProfileToko />
    </div>
  );
};

export default EditProfileToko;
