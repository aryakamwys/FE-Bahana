import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderProfile from "../sections/profile/header";
import ContentProfile from "../sections/profile/content";
import Footer from "../components/specific/footer";

const ProfilePage = () => {
  return (
<<<<<<< HEAD
    <div className="px-5 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
=======
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPembeli />
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
      <HeaderProfile />
      <ContentProfile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
