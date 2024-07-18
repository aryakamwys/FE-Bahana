import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderHome from "../sections/home/header";
import SearchBar from "../components/common/searchBar";
import Recomendation from "../sections/home/recomendationItem";
import OurProduct from "../sections/home/ourproduct";
import Footer from "../components/specific/footer";

const HomePage = () => {
  return (
    <div style={{ paddingLeft: 310, paddingRight: 310 }}>
      <NavbarPembeli />
      <HeaderHome />
      <div style={{ height: 74 }}></div>
      <SearchBar />
      <Recomendation />
      <OurProduct />
      <Footer />
    </div>
  );
};

export default HomePage;
