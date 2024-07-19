import React from "react";
import NavbarPembeli from "../components/specific/navbar";

import HeaderAllProducts from "../sections/allproducts/header";
import Products from "../sections/allproducts/content";
import Footer from "../components/specific/footer";

const AllProducts = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 310 }}>
      <NavbarPembeli />
      <HeaderAllProducts />
      <Products />
      <Footer />
    </div>
  );
};

export default AllProducts;
