import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderHome from "../sections/home/header";
import SearchBar from "../components/common/searchBar";
import Recomendation from "../sections/home/recomendationItem";

const HomePage = () => {
  return (
    <div>
      <NavbarPembeli />
      <HeaderHome />
      <div style={{ height: 74 }}></div>
      <SearchBar />
      <Recomendation/>
    </div>
  );
};

export default HomePage;
