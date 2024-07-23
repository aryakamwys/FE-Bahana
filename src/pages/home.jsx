import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderHome from "../sections/home/header";
import SearchBar from "../components/common/searchBar";
import Recomendation from "../sections/home/recomendationItem";
import OurProduct from "../sections/home/ourproduct";
import Footer from "../components/specific/footer";

const PembeliHomePage = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPembeli />
      <HeaderHome />
      <div className="my-[15px] lg:my-8"></div>
      <SearchBar />
      <Recomendation />
      <OurProduct />
      <Footer />
    </div>
  );
};

export default PembeliHomePage;