import React from "react";
import HeaderMarketPrice from "../../sections/market_price/header";
import ContentArticle from "../../sections/market_price/content_article";
import NavbarPetani from "../../components/specific/navbar_seller";

const MarketPrice = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPetani />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
