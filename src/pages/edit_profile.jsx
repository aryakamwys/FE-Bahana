import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";
import Footer from "../components/specific/footer";

const EditProfile = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPembeli /> */}
      <HeaderEditProfile />
      <ContentEditProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default EditProfile;
