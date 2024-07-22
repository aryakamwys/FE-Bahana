import React from "react";
import HeaderDetailBlog from "../sections/detail_blog/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentBlog from "../sections/detail_blog/content";
import Footer from "../components/specific/footer";

const DetailBlog = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      {/* <NavbarPembeli /> */}
      <HeaderDetailBlog />
      <ContentBlog />
      {/* <Footer /> */}
    </div>
  );
};

export default DetailBlog;
