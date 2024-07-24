import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderProfile from "../sections/profile/header";
import ContentProfile from "../sections/profile/content";
import Footer from "../components/specific/footer";

const ProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPembeli />
      <HeaderProfile />
      <ContentProfile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
