import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import ArrowBack from "../sections/about_us/arrow_back";
import ContentAboutUs from "../sections/about_us/content";
import Footer from "../components/specific/footer";

const AboutUs = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px] ">
      {/* <NavbarPembeli /> */}
      <ArrowBack />
      <ContentAboutUs />
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
