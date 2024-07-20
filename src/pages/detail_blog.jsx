import React from "react";
import HeaderDetailBlog from "../sections/detail_blog/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentBlog from "../sections/detail_blog/content";
import Footer from "../components/specific/footer";

const DetailBlog = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 315 }}>
      <NavbarPembeli />
      <HeaderDetailBlog />
      <ContentBlog />
      <Footer />
    </div>
  );
};

export default DetailBlog;
