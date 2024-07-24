import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";
import Footer from "../components/specific/footer";

const EditProfile = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPembeli />
      <HeaderEditProfile />
      <ContentEditProfile />
      <Footer />
    </div>
  );
};

export default EditProfile;
