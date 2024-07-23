import React from "react";
import NavbarPembeli from "../components/specific/navbar";

import HeaderAllProducts from "../sections/allproducts/header";
import Products from "../sections/allproducts/content";
import Footer from "../components/specific/footer";

const AllProducts = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPembeli />
      <HeaderAllProducts />
      <Products />
      <Footer />
    </div>
  );
};

export default AllProducts;
