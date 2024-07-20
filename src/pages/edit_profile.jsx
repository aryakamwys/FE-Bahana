import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";

const EditProfile = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderEditProfile />
      <ContentEditProfile />
    </div>
  );
};

export default EditProfile;
