import React from "react";
import HeaderDetailBlog from "../sections/detail_blog/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentBlog from "../sections/detail_blog/content";
import Footer from "../components/specific/footer";

const DetailBlog = () => {
  return (
    <div className="px-3 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
      <HeaderDetailBlog />
      <ContentBlog />
      {/* <Footer /> */}
    </div>
  );
};

export default DetailBlog;
