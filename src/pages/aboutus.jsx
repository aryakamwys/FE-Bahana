import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import ArrowBack from "../sections/about_us/arrow_back";
import ContentAboutUs from "../sections/about_us/content";
import Footer from "../components/specific/footer";

const AboutUs = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 310 }}>
      <NavbarPembeli />
      <ArrowBack />
      <ContentAboutUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
