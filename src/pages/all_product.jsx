import React from "react";
import NavbarPembeli from "../components/specific/navbar";

import HeaderAllProducts from "../sections/allproducts/header";
import Products from "../sections/allproducts/content";
import Footer from "../components/specific/footer";

const AllProducts = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[310px]">
      <NavbarPembeli />
      {/* <HeaderAllProducts /> */}
      <Products />
      <Footer />
    </div>
  );
};

export default AllProducts;
