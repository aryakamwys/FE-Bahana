import React from "react";
import HeaderMarketPrice from "../sections/market_price/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentArticle from "../sections/market_price/content_article";

const MarketPrice = () => {
  return (
    <div className="max-w-screen-sm lg:max-w-full pl-5 pr-5 lg:pl-[310px] lg:pr-[315px]">
      <NavbarPembeli />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
