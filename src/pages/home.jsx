import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderHome from "../sections/home/header";
import SearchBar from "../components/common/searchBar";
import Recomendation from "../sections/home/recomendationItem";
import OurProduct from "../sections/home/ourproduct";
import Footer from "../components/specific/footer";

const PembeliHomePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPembeli />
      <HeaderHome />
      <div className="my-[36px] lg:my-8"></div>
      <SearchBar />
      <Recomendation />
      <OurProduct />
      <Footer />
    </div>
  );
};

export default PembeliHomePage;