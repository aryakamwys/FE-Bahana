import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderProfile from "../sections/profile/header";
import ContentProfile from "../sections/profile/content";
import Footer from "../components/specific/footer";

const ProfilePage = () => {
  return (
    <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
      <HeaderProfile />
      <ContentProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
