import React from "react";
import HeaderHome from "../../sections/home/header";
import SearchBar from "../../components/common/searchBar";
import Recomendation from "../../sections/home/recomendationItem";
import OurProduct from "../../sections/home/ourproduct";
import Footer from "../../components/specific/footer";
import NavbarPetani from "../../components/specific/navbar_seller";

const PetaniHomePage = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPetani />
      <HeaderHome />
      <div style={{ height: 74 }}></div>
      <SearchBar />
      <Recomendation />
      <OurProduct />
      <Footer />
    </div>
  );
};

export default PetaniHomePage;
