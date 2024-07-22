import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderProfile from "../sections/profile/header";
import ContentProfile from "../sections/profile/content";
import Footer from "../components/specific/footer";

const ProfilePage = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPembeli /> */}
      <HeaderProfile />
      <ContentProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
