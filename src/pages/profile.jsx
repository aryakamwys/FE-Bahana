import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderProfile from "../sections/profile/header";
import ContentProfile from "../sections/profile/content";
import Footer from "../components/specific/footer";

const ProfilePage = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderProfile />
      <ContentProfile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
