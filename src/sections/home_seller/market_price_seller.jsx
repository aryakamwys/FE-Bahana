import React from "react";
import HeaderMarketPrice from "../../sections/market_price/header";
import ContentArticle from "../../sections/market_price/content_article";
import NavbarPetani from "../../components/specific/navbar_seller";

const MarketPrice = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPetani />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
