import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderEditProfileToko from "../sections/edit_profile_toko/header";
import ContentEditProfileToko from "../sections/edit_profile_toko/content";

const EditProfileToko = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[240px]">
      <NavbarPetani />
      <HeaderEditProfileToko />
      <ContentEditProfileToko />
    </div>
  );
};

export default EditProfileToko;
