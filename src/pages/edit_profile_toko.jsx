import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderEditProfileToko from "../sections/edit_profile_toko/header";
import ContentEditProfileToko from "../sections/edit_profile_toko/content";

const EditProfileToko = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPetani /> */}
      <HeaderEditProfileToko />
      <ContentEditProfileToko />
    </div>
  );
};

export default EditProfileToko;
