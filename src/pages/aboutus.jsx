import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import ArrowBack from "../sections/about_us/arrow_back";
import ContentAboutUs from "../sections/about_us/content";
import Footer from "../components/specific/footer";

const AboutUs = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[310px]">
      <NavbarPembeli />
      <ArrowBack />
      <ContentAboutUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
