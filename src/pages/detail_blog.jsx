import React from "react";
import HeaderDetailBlog from "../sections/detail_blog/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentBlog from "../sections/detail_blog/content";
import Footer from "../components/specific/footer";

const DetailBlog = () => {
  return (
<<<<<<< HEAD
    <div className="px-3 md:px-12 lg:px-[100px] 2xl:px-[315px]   xl:px-[200px]  max-w-screen-sm   md:max-w-full">
      {/* <NavbarPembeli /> */}
=======
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPembeli />
>>>>>>> 6c040d0aac418fc0e84f295c2bcc6047173383b0
      <HeaderDetailBlog />
      <ContentBlog />
      <Footer />
    </div>
  );
};

export default DetailBlog;
