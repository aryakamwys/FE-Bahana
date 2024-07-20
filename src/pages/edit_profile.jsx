import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";
import Footer from "../components/specific/footer";

const EditProfile = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderEditProfile />
      <ContentEditProfile />
      <Footer />
    </div>
  );
};

export default EditProfile;
